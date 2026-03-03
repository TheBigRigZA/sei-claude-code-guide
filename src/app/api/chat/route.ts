import { createOpenRouter } from '@openrouter/ai-sdk-provider';
import { streamText, type CoreMessage } from 'ai';
import { getSystemPrompt, OPENROUTER_MODEL } from '@/lib/openrouter';

// ---------------------------------------------------------------------------
// Simple in-memory rate limiter: 10 requests per minute per IP
// ---------------------------------------------------------------------------
const RATE_LIMIT_MAX = 10;
const RATE_LIMIT_WINDOW_MS = 60_000;

const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now > entry.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }

  entry.count += 1;
  return entry.count > RATE_LIMIT_MAX;
}

// ---------------------------------------------------------------------------
// POST /api/chat
// ---------------------------------------------------------------------------
export async function POST(req: Request) {
  // 1. Ensure the API key is configured on the server
  const apiKey = process.env.OPENROUTER_API_KEY;
  if (!apiKey) {
    return new Response(
      JSON.stringify({ error: 'OpenRouter API key is not configured on the server.' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } },
    );
  }

  // 2. Rate-limit by client IP
  const forwarded = req.headers.get('x-forwarded-for');
  const realIp = req.headers.get('x-real-ip');
  const ip = forwarded?.split(',')[0]?.trim() ?? realIp ?? 'unknown';

  if (isRateLimited(ip)) {
    return new Response(
      JSON.stringify({ error: 'Rate limit exceeded. Please wait a moment and try again.' }),
      { status: 429, headers: { 'Content-Type': 'application/json' } },
    );
  }

  // 3. Parse request body
  let messages: CoreMessage[];
  let locale: string;

  try {
    const body = await req.json();
    messages = body.messages;
    locale = body.locale ?? 'en';
  } catch {
    return new Response(
      JSON.stringify({ error: 'Invalid request body.' }),
      { status: 400, headers: { 'Content-Type': 'application/json' } },
    );
  }

  if (!Array.isArray(messages) || messages.length === 0) {
    return new Response(
      JSON.stringify({ error: 'Messages array is required.' }),
      { status: 400, headers: { 'Content-Type': 'application/json' } },
    );
  }

  // 4. Stream the response from OpenRouter
  try {
    const openrouter = createOpenRouter({ apiKey });

    const result = streamText({
      model: openrouter(OPENROUTER_MODEL),
      system: getSystemPrompt(locale),
      messages,
    });

    return result.toDataStreamResponse();
  } catch (err) {
    console.error('[api/chat] streaming error:', err);
    return new Response(
      JSON.stringify({ error: 'An error occurred while generating a response.' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } },
    );
  }
}
