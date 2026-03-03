import { compileMDX } from 'next-mdx-remote/rsc';
import { readFile } from 'fs/promises';
import { join } from 'path';

const contentDir = join(process.cwd(), 'src/content');

export async function getContent<TFrontmatter = Record<string, unknown>>(
  locale: string,
  slug: string,
) {
  const filePath = join(contentDir, locale, `${slug}.mdx`);
  const source = await readFile(filePath, 'utf-8');

  const { content, frontmatter } = await compileMDX<TFrontmatter>({
    source,
    options: { parseFrontmatter: true },
  });

  return { content, frontmatter };
}

export async function getEsafenetContent<TFrontmatter = Record<string, unknown>>(
  locale: string,
  slug: string,
) {
  const filePath = join(contentDir, locale, 'esafenet', `${slug}.mdx`);
  const source = await readFile(filePath, 'utf-8');

  const { content, frontmatter } = await compileMDX<TFrontmatter>({
    source,
    options: { parseFrontmatter: true },
  });

  return { content, frontmatter };
}
