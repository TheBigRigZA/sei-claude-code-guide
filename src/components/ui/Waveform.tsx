'use client';

/**
 * Animated SVG waveform band — three layered sine waves
 * that drift horizontally at different speeds.
 */
export default function Waveform() {
  // Each wave: d path covers 2 full cycles so we can translate -50% seamlessly
  const wave1 =
    'M0,80 C60,30 120,130 180,80 C240,30 300,130 360,80 C420,30 480,130 540,80 C600,30 660,130 720,80 C780,30 840,130 900,80 C960,30 1020,130 1080,80 C1140,30 1200,130 1260,80 C1320,30 1380,130 1440,80';
  const wave2 =
    'M0,90 C80,50 160,130 240,90 C320,50 400,130 480,90 C560,50 640,130 720,90 C800,50 880,130 960,90 C1040,50 1120,130 1200,90 C1280,50 1360,130 1440,90';
  const wave3 =
    'M0,100 C90,65 180,135 270,100 C360,65 450,135 540,100 C630,65 720,135 810,100 C900,65 990,135 1080,100 C1170,65 1260,135 1350,100 C1440,65 1530,135 1620,100';

  return (
    <div className="absolute inset-x-0 bottom-0 h-40 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Wave 1 — cyan, slow */}
      <svg
        className="absolute bottom-0 w-[200%] h-full animate-wave-slow"
        viewBox="0 0 1440 160"
        preserveAspectRatio="none"
      >
        <path
          d={wave1}
          fill="none"
          stroke="rgba(34, 211, 238, 0.25)"
          strokeWidth="2"
        />
      </svg>

      {/* Wave 2 — brand blue, medium */}
      <svg
        className="absolute bottom-2 w-[200%] h-full animate-wave-mid"
        viewBox="0 0 1440 160"
        preserveAspectRatio="none"
        style={{ animationDirection: 'reverse' }}
      >
        <path
          d={wave2}
          fill="none"
          stroke="rgba(102, 144, 255, 0.2)"
          strokeWidth="1.5"
        />
      </svg>

      {/* Wave 3 — accent gradient, fast */}
      <svg
        className="absolute bottom-4 w-[200%] h-full animate-wave-fast"
        viewBox="0 0 1620 160"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="wave-grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(34, 211, 238, 0.3)" />
            <stop offset="50%" stopColor="rgba(59, 108, 255, 0.2)" />
            <stop offset="100%" stopColor="rgba(34, 211, 238, 0.3)" />
          </linearGradient>
        </defs>
        <path
          d={wave3}
          fill="none"
          stroke="url(#wave-grad)"
          strokeWidth="2.5"
        />
      </svg>

      {/* Fade overlay at top */}
      <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-surface-950 to-transparent" />
    </div>
  );
}
