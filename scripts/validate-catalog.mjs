import { readFileSync, existsSync } from 'node:fs';
import { resolve, dirname, extname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const catalog = JSON.parse(readFileSync(resolve(root, 'src/data/catalog.json'), 'utf8'));
const errors = [];
const lessons = catalog.chapters.flatMap((chapter) => chapter.lessons);
const ids = lessons.map((lesson) => lesson.id);
const projectChapter = catalog.chapters.find((chapter) => chapter.id === '24-projets-pratiques');
const expectedProjectIds = [
  'projet-1-site-frontend',
  'projet-2-api-base-donnees',
  'projet-3-application-fullstack',
  'projet-4-production',
  'projet-5-application-professionnelle',
];
const projectIds = projectChapter?.lessons.map((lesson) => lesson.id) ?? [];

if (catalog.chapters.length !== 25) errors.push(`Expected 25 chapters, found ${catalog.chapters.length}`);
if (lessons.length !== 174) errors.push(`Expected 174 catalogue entries, found ${lessons.length}`);
if (projectIds.length !== 5 || expectedProjectIds.some((id) => !projectIds.includes(id))) {
  errors.push('Expected the five source projects in chapter 24-projets-pratiques');
}
if (lessons.length - projectIds.length !== 169) errors.push(`Expected 169 skills, found ${lessons.length - projectIds.length}`);
if (new Set(ids).size !== ids.length) errors.push('Duplicate lesson IDs detected');
if (!existsSync(resolve(root, 'public/style.css'))) errors.push('Missing shared stylesheet: public/style.css');

for (const lesson of lessons) {
  if (!lesson.path.startsWith('/lessons/')) {
    errors.push(`Invalid path prefix: ${lesson.path}`);
    continue;
  }
  const localPath = resolve(root, 'public', `.${lesson.path}`);
  if (!existsSync(localPath)) {
    errors.push(`Missing source file: ${lesson.path}`);
    continue;
  }
  const html = readFileSync(localPath, 'utf8');
  if (!html.includes('href="../style.css"')) errors.push(`Expected shared stylesheet reference missing in ${lesson.path}`);
  if (html.includes('href="../index.html"')) errors.push(`Legacy catalogue link not migrated in ${lesson.path}`);

  // Verify local lesson-to-lesson links; external URLs, fragments, and protocol URLs are ignored.
  for (const match of html.matchAll(/\b(?:href|src)\s*=\s*["']([^"']+)["']/gi)) {
    const ref = match[1].trim();
    if (!ref || ref.startsWith('#') || /^(?:[a-z]+:|\/\/)/i.test(ref)) continue;
    const pathname = ref.split(/[?#]/, 1)[0];
    if (!pathname || extname(pathname).toLowerCase() !== '.html') continue;
    if (pathname === '../index.html') continue;
    const resolved = resolve(localPath, '..', pathname);
    if (!existsSync(resolved)) errors.push(`Broken local HTML link in ${lesson.path}: ${ref}`);
  }
}

const htmlCount = lessons.filter((lesson) => lesson.path.endsWith('.html')).length;
if (htmlCount !== 174) errors.push(`Expected 174 HTML lesson references, found ${htmlCount}`);
if (errors.length) {
  console.error('CATALOG VALIDATION FAILED');
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}
console.log(JSON.stringify({
  result: 'passed',
  chapters: catalog.chapters.length,
  entries: lessons.length,
  skills: lessons.length - projectIds.length,
  projects: projectIds.length,
  uniqueIds: new Set(ids).size,
  sourceFilesResolved: htmlCount,
  sharedStylesheet: 'present',
  legacyCatalogueLinks: 'none',
  localHtmlReferences: 'validated',
}, null, 2));
