import { useEffect, useMemo, useRef, useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark, oneLight } from 'react-syntax-highlighter/dist/esm/styles/prism';
import markup from 'react-syntax-highlighter/dist/esm/languages/prism/markup';
import cssLanguage from 'react-syntax-highlighter/dist/esm/languages/prism/css';
import javascriptLanguage from 'react-syntax-highlighter/dist/esm/languages/prism/javascript';
import typescriptLanguage from 'react-syntax-highlighter/dist/esm/languages/prism/typescript';
import jsxLanguage from 'react-syntax-highlighter/dist/esm/languages/prism/jsx';
import tsxLanguage from 'react-syntax-highlighter/dist/esm/languages/prism/tsx';
import sqlLanguage from 'react-syntax-highlighter/dist/esm/languages/prism/sql';
import { Link, Navigate, Route, Routes, useParams, useSearchParams } from 'react-router-dom';
import { courses } from './data/courses';
import catalogData from './data/catalog.json';
import type { Catalog, CatalogFilter, Course, Lesson, LessonKind } from './data/types';
import './app.css';

SyntaxHighlighter.registerLanguage('markup', markup);
SyntaxHighlighter.registerLanguage('html', markup);
SyntaxHighlighter.registerLanguage('xml', markup);
SyntaxHighlighter.registerLanguage('css', cssLanguage);
SyntaxHighlighter.registerLanguage('javascript', javascriptLanguage);
SyntaxHighlighter.registerLanguage('typescript', typescriptLanguage);
SyntaxHighlighter.registerLanguage('jsx', jsxLanguage);
SyntaxHighlighter.registerLanguage('tsx', tsxLanguage);
SyntaxHighlighter.registerLanguage('sql', sqlLanguage);

const catalog = catalogData as Catalog;
const courseConceptCount = courses.reduce((total, course) => total + course.modules.length, 0);
const lessons = catalog.chapters.flatMap((chapter) => chapter.lessons.map((lesson) => ({
  ...lesson,
  kind: chapter.id === '24-projets-pratiques' ? 'project' as const : 'skill' as const,
  chapterTitle: chapter.title,
  chapterId: chapter.id,
})));

type Theme = 'light' | 'dark';

interface ThemeProps {
  theme: Theme;
  onToggleTheme: () => void;
}

function ThemeToggle({ theme, onToggleTheme }: ThemeProps) {
  const label = theme === 'dark' ? 'Passer au mode clair' : 'Passer au mode sombre';
  const Icon = theme === 'dark' ? Sun : Moon;
  return <button className="theme-toggle" type="button" onClick={onToggleTheme} aria-label={label} aria-pressed={theme === 'dark'} title={label}>
    <Icon aria-hidden="true" size={19} strokeWidth={1.8} />
  </button>;
}

function Home({ theme, onToggleTheme }: ThemeProps) {
  const [searchParams] = useSearchParams();
  const [query, setQuery] = useState(() => searchParams.get('q') ?? '');
  const [kindFilter, setKindFilter] = useState<CatalogFilter>('all');
  const [selectedCourseId, setSelectedCourseId] = useState(courses[0]?.id ?? '');
  const [selectedChapterId, setSelectedChapterId] = useState(catalog.chapters[0]?.id ?? '');
  useEffect(() => setQuery(searchParams.get('q') ?? ''), [searchParams]);
  const normalized = query.trim().toLocaleLowerCase('fr');
  const filtered = useMemo(() => catalog.chapters.map((chapter) => ({
    ...chapter,
    lessons: chapter.lessons.filter((lesson) => {
      const lessonKind: LessonKind = chapter.id === '24-projets-pratiques' ? 'project' : 'skill';
      const matchesKind = kindFilter === 'all' || (kindFilter !== 'course' && lessonKind === kindFilter);
      const searchableText = `${lesson.title} ${lesson.description} ${chapter.title}`.toLocaleLowerCase('fr').normalize('NFD').replace(/[\u0300-\u036f]/g, '');
      return matchesKind && (!normalized || searchableText.includes(normalized.normalize('NFD').replace(/[\u0300-\u036f]/g, '')));
    }),
  })).filter((chapter) => chapter.lessons.length > 0), [kindFilter, normalized]);
  const filteredCourses = useMemo(() => courses.map((course) => ({
    ...course,
    modules: course.modules.filter((module) => {
      const matchesKind = kindFilter === 'all' || kindFilter === 'course';
      const moduleDetails = module.sections?.map((section) => `${section.title} ${section.body} ${section.examples?.map((example) => `${example.title} ${example.code}`).join(' ')}`).join(' ') ?? '';
      const searchableText = `${course.title} ${course.category} ${course.tags.join(' ')} ${module.id} ${module.title} ${module.summary} ${module.exercise} ${module.concepts.join(' ')} ${moduleDetails}`.toLocaleLowerCase('fr').normalize('NFD').replace(/[\u0300-\u036f]/g, '');
      return matchesKind && (!normalized || searchableText.includes(normalized.normalize('NFD').replace(/[\u0300-\u036f]/g, '')));
    }),
  })).filter((course) => course.modules.length > 0), [kindFilter, normalized]);
  const resultCount = filtered.reduce((total, chapter) => total + chapter.lessons.length, 0) + filteredCourses.reduce((total, course) => total + course.modules.length, 0);
  const activeCourse = filteredCourses.find((course) => course.id === selectedCourseId) ?? filteredCourses[0];
  const activeSkillChapter = filtered.find((chapter) => chapter.id === selectedChapterId) ?? filtered[0];
  return <main className="container">
    <header className="hero">
      <div className="hero-top">
        <p className="eyebrow">Parcours pédagogique évolutif</p>
        <ThemeToggle theme={theme} onToggleTheme={onToggleTheme} />
      </div>
      <h1>Devenir développeur Full Stack</h1>
      <p>Un catalogue navigable de compétences, avec conservation des tutoriels HTML de la version source.</p>
      <div className="stats"><div><strong>{catalog.chapters.length}</strong><span>chapitres</span></div><div><strong>{lessons.filter((lesson) => lesson.kind === 'skill').length}</strong><span>compétences</span></div><div><strong>{lessons.filter((lesson) => lesson.kind === 'project').length}</strong><span>projets</span></div><div><strong>{courses.length}</strong><span>cours</span></div></div>
      <label className="search-label" htmlFor="search">Rechercher dans le catalogue</label>
      <input id="search" className="search" type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Ex. React, SQL, accessibilité…" aria-describedby="search-results" />
      <div className="entry-filters" role="group" aria-label="Filtrer les entrées">
        <button type="button" aria-pressed={kindFilter === 'all'} onClick={() => setKindFilter('all')}>Tout</button>
        <button type="button" aria-pressed={kindFilter === 'skill'} onClick={() => setKindFilter('skill')}>Compétences</button>
        <button type="button" aria-pressed={kindFilter === 'project'} onClick={() => setKindFilter('project')}>Projets</button>
        <button type="button" aria-pressed={kindFilter === 'course'} onClick={() => setKindFilter('course')}>Cours</button>
      </div>
      <p className="search-results" id="search-results" role="status" aria-live="polite">
        {kindFilter === 'course'
          ? normalized ? `${resultCount} module(s) correspondant(s) dans ${filteredCourses.length} cours` : `${courses.length} cours · ${courseConceptCount} modules au total`
          : normalized ? `${resultCount} résultat(s) pour « ${query.trim()} »` : `${resultCount} entrée(s) affichée(s)`}
      </p>
    </header>
    {kindFilter !== 'skill' && <div className="catalogue">{filtered.map((chapter) => <section className="chapter" id={chapter.id} key={chapter.id}>
      <div className="chapter-heading"><span className="chapter-number">{chapter.number}</span><div><h2>{chapter.title}</h2><p>{chapter.lessons.length} entrée(s)</p></div></div>
      <div className="lesson-grid">{chapter.lessons.map((lesson) => <Link className="lesson-card" to={`/lesson/${lesson.id}`} key={lesson.id}><strong>{lesson.title}</strong><span>{lesson.description}</span><span className="arrow" aria-hidden="true">↗</span></Link>)}</div>
    </section>)}</div>}
    {kindFilter === 'skill' ? <section className="skills-library" aria-label="Bibliothèque de compétences">
      <aside className="skills-sidebar">
        <div className="skills-sidebar-heading"><h2>Chapitres</h2><span>{filtered.length}</span></div>
        <nav className="skills-sidebar-list" aria-label="Choisir un chapitre de compétences">
          {filtered.map((chapter) => <button className="skills-sidebar-item" type="button" key={chapter.id} aria-pressed={activeSkillChapter?.id === chapter.id} onClick={() => setSelectedChapterId(chapter.id)}>
            <span className="skills-sidebar-item-title">{chapter.number}. {chapter.title}</span>
            <span className="skills-sidebar-item-meta">{chapter.lessons.length} compétences</span>
          </button>)}
        </nav>
      </aside>
      <div className="skills-library-content">
        {activeSkillChapter ? <>
          <header className="skills-library-header">
            <p className="course-kicker">Chapitre {activeSkillChapter.number}</p>
            <h2>{activeSkillChapter.title}</h2>
            <p>{activeSkillChapter.lessons.length} compétences dans ce chapitre</p>
          </header>
          <nav className="skills-entry-list" aria-label={`Compétences du chapitre ${activeSkillChapter.title}`}>
            {activeSkillChapter.lessons.map((lesson, index) => <Link className="skills-entry-row" to={`/lesson/${lesson.id}`} key={lesson.id}>
              <span className="skills-entry-index" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
              <span className="skills-entry-copy"><strong>{lesson.title}</strong><span>{lesson.description}</span></span>
              <span className="skills-entry-arrow" aria-hidden="true">↗</span>
            </Link>)}
          </nav>
        </> : <p className="empty-state">Aucune compétence ne correspond à cette recherche.</p>}
      </div>
    </section> : null}
    {kindFilter === 'course' ? <section className="course-library" aria-label="Bibliothèque de cours">
      <aside className="course-sidebar">
        <div className="course-sidebar-heading"><h2>Les cours</h2><span>{filteredCourses.length}</span></div>
        <nav className="course-sidebar-list" aria-label="Choisir un cours">
          {filteredCourses.map((course) => <button className="course-sidebar-item" type="button" key={course.id} aria-pressed={activeCourse?.id === course.id} onClick={() => setSelectedCourseId(course.id)}>
            <span className="course-sidebar-item-title">{course.title}</span>
            <span className="course-sidebar-item-meta">{course.category} · {course.modules.length} modules</span>
          </button>)}
        </nav>
      </aside>
      <div className="course-library-content">
        {activeCourse ? <>
          <header className="course-library-header">
            <p className="course-kicker">{activeCourse.category} · {activeCourse.level}</p>
            <h2>{activeCourse.title}</h2>
            <p>{activeCourse.description}</p>
            <div className="course-library-meta"><span>{activeCourse.modules.length} modules</span><span>{activeCourse.duration}</span></div>
          </header>
          <nav className="course-module-list" aria-label={`Modules du cours ${activeCourse.title}`}>
            {activeCourse.modules.map((module, index) => <Link className="course-module-row" to={`/course/${activeCourse.id}/${module.id}`} key={module.id}>
              <span className="course-module-index" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
              <span className="course-module-copy"><strong>{module.title}</strong><span>{module.summary}</span></span>
              <span className="course-module-meta">{module.concepts.length} notions <span aria-hidden="true">↗</span></span>
            </Link>)}
          </nav>
        </> : <p className="empty-state">Aucun cours ne correspond à cette recherche.</p>}
      </div>
    </section> : filteredCourses.map((course) => <section className="course-section" aria-labelledby={`course-${course.id}`} key={course.id}>
      <div className="chapter-heading"><span className="chapter-number" aria-hidden="true">{course.title.slice(0, 2)}</span><div><h2 id={`course-${course.id}`}>{course.title}</h2><p>{course.modules.length} grand(s) concept(s) · {course.category}</p></div></div>
      <div className="lesson-grid course-grid">{course.modules.map((module) => <ConceptCard course={course} module={module} key={module.id} />)}</div>
    </section>)}
    {resultCount === 0 && kindFilter !== 'skill' && kindFilter !== 'course' && <p className="empty-state">Aucune entrée ne correspond à ces filtres.</p>}
    <footer>Catalogue migré depuis V41. Les tutoriels HTML sont conservés ; la validation fonctionnelle complète reste en cours.</footer>
  </main>;
}

function getConceptTags(course: Course, moduleId: string) {
  return [...new Set([...course.tags, moduleId])];
}

function createPreviewDocument(source: string) {
  const parsed = new DOMParser().parseFromString(source, 'text/html');
  const styles = Array.from(parsed.head.querySelectorAll('style'), (style) => style.outerHTML).join('\n');
  const body = parsed.body.innerHTML || source;
  return `<!doctype html>
<html lang="fr">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta http-equiv="Content-Security-Policy" content="default-src 'none'; style-src 'unsafe-inline'; img-src data: blob:; media-src data: blob:;">
  <style>body{font:16px/1.6 system-ui,sans-serif;padding:20px;color:#202725}img,video,iframe{max-width:100%}table{border-collapse:collapse}th,td{border:1px solid #9aa5a0;padding:6px 10px}</style>
  ${styles}
</head>
<body>${body}</body>
</html>`;
}

function CodeExample({ example, theme }: { example: { title?: string; language: string; code: string }; theme: Theme }) {
  const [mode, setMode] = useState<'source' | 'preview'>('source');
  const supportsPreview = example.language.toLowerCase() === 'html';
  const language = example.language.toLowerCase() === 'html' ? 'markup' : example.language.toLowerCase();
  if (language === 'text') return <pre className="course-example"><code>{example.code}</code></pre>;
  return <div className="code-example">
    {supportsPreview && <div className="code-example-modes" role="group" aria-label={`Affichage de l’exemple${example.title ? ` : ${example.title}` : ''}`}>
      <button type="button" aria-pressed={mode === 'source'} onClick={() => setMode('source')}>Code source</button>
      <button type="button" aria-pressed={mode === 'preview'} onClick={() => setMode('preview')}>Aperçu HTML</button>
    </div>}
    {mode === 'preview' && supportsPreview
      ? <iframe className="example-preview" title={`Aperçu HTML${example.title ? ` : ${example.title}` : ''}`} sandbox="" srcDoc={createPreviewDocument(example.code)} />
      : <SyntaxHighlighter
          language={language}
          style={theme === 'dark' ? oneDark : oneLight}
          customStyle={{ margin: 0, padding: '16px 18px', borderRadius: '8px', fontSize: '.88rem', lineHeight: 1.6 }}
          wrapLongLines={false}
        >{example.code}</SyntaxHighlighter>}
  </div>;
}

function ConceptCard({ course, module }: { course: Course; module: Course['modules'][number] }) {
  return <Link className="lesson-card course-card" to={`/course/${course.id}/${module.id}`}>
    <span className="course-category">{course.title} · {course.category}</span>
    <strong>{module.title}</strong>
    <span>{module.summary}</span>
    <span className="course-card-meta">{module.concepts.length} notions · exercice pratique</span>
    <span className="arrow" aria-hidden="true">↗</span>
  </Link>;
}

function CourseRedirect() {
  const { slug = '' } = useParams();
  const course = courses.find((item) => item.id === slug);
  if (!course) return <main className="container"><h1>Cours introuvable</h1><Link to="/">Retour au catalogue</Link></main>;
  return <Navigate to={`/course/${course.id}/${course.modules[0].id}`} replace />;
}

function CourseConceptPage({ theme, onToggleTheme }: ThemeProps) {
  const { slug = '', conceptId = '' } = useParams();
  const course = courses.find((item) => item.id === slug);
  const conceptIndex = course?.modules.findIndex((module) => module.id === conceptId) ?? -1;
  const module = conceptIndex >= 0 ? course?.modules[conceptIndex] : undefined;
  if (!course || !module) return <main className="container"><h1>Concept introuvable</h1><Link to="/">Retour au catalogue</Link></main>;
  const previous = course.modules[conceptIndex - 1];
  const next = course.modules[conceptIndex + 1];
  const tags = getConceptTags(course, module.id);
  return <main className="container course-page">
    <header className="course-header">
      <nav className="course-nav" aria-label="Navigation du cours"><Link to="/">← Catalogue</Link><span>{course.category}</span><ThemeToggle theme={theme} onToggleTheme={onToggleTheme} /></nav>
      <p className="course-kicker">{course.title} · Concept {conceptIndex + 1} sur {course.modules.length}</p>
      <nav className="course-tags" aria-label={`Hashtags du concept ${module.title}`}>
        {tags.map((tag) => <Link key={tag} to={`/?q=${encodeURIComponent(tag)}`}>#{tag}</Link>)}
      </nav>
      <h1>{course.title} — {module.title.replace(/^\d+\.\s*/, '')}</h1>
      <p className="course-description">{module.summary}</p>
      <p className="course-duration">Cours {course.title} · {course.level} · {course.duration}</p>
    </header>
    <section className="course-syllabus" aria-labelledby="syllabus-heading">
      <h2 id="syllabus-heading">{module.title}</h2>
      {module.sections?.map((section) => <section className="course-subsection" key={section.title}>
        <h3>{section.title}</h3>
        <p>{section.body}</p>
        {section.examples?.map((example) => <figure className="course-code-figure" key={example.title}>
          <figcaption>{example.title}</figcaption>
          <CodeExample example={example} theme={theme} />
        </figure>)}
      </section>)}
      <section className="concept-points" aria-labelledby="key-points-heading">
        <h3 id="key-points-heading">Points à retenir</h3>
        <ul>{module.concepts.map((concept) => <li key={concept}>{concept}</li>)}</ul>
      </section>
      {module.example && <CodeExample example={module.example} theme={theme} />}
      <p className="course-exercise"><strong>À pratiquer :</strong> {module.exercise}</p>
    </section>
    {!next && <section className="course-project" aria-labelledby="project-heading">
      <p className="course-kicker">Projet de synthèse</p>
      <h2 id="project-heading">{course.finalProject.title}</h2>
      <p>{course.finalProject.description}</p>
      <h3>Critères de réussite</h3>
      <ul>{course.finalProject.criteria.map((criterion) => <li key={criterion}>{criterion}</li>)}</ul>
    </section>}
    {course.references && <section className="course-references" aria-labelledby="references-heading">
      <details>
        <summary id="references-heading">Références du cours {course.title} ({course.references.length})</summary>
        <ol>{course.references.map((reference) => <li key={reference.url}><a href={reference.url} target="_blank" rel="noreferrer">{reference.title}</a></li>)}</ol>
      </details>
    </section>}
    <nav className="concept-navigation" aria-label="Navigation entre concepts">
      {previous ? <Link to={`/course/${course.id}/${previous.id}`}>← {previous.title}</Link> : <span />}
      <Link to="/">Tous les langages</Link>
      {next ? <Link to={`/course/${course.id}/${next.id}`}>{next.title} →</Link> : <span />}
    </nav>
  </main>;
}

function LessonPage({ theme, onToggleTheme }: ThemeProps) {
  const { slug = '' } = useParams();
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const lesson = lessons.find((item) => item.id === slug) as (Lesson & { chapterTitle: string }) | undefined;
  useEffect(() => {
    const iframeDocument = iframeRef.current?.contentDocument;
    if (iframeDocument?.documentElement) iframeDocument.documentElement.dataset.theme = theme;
  }, [theme]);
  if (!lesson) return <main className="container"><h1>Compétence introuvable</h1><Link to="/">Retour au catalogue</Link></main>;
  return <main className="lesson-page">
    <nav className="lesson-nav" aria-label="Navigation de la leçon"><Link to="/">← Catalogue</Link><span>{lesson.chapterTitle}</span><strong>{lesson.title}</strong><ThemeToggle theme={theme} onToggleTheme={onToggleTheme} /></nav>
    <iframe ref={iframeRef} className="lesson-frame" title={lesson.title} src={`${import.meta.env.BASE_URL}${lesson.path.replace(/^\//, '')}`} sandbox="allow-same-origin allow-top-navigation-by-user-activation" onLoad={(event) => { const iframeDocument = event.currentTarget.contentDocument; if (iframeDocument?.documentElement) iframeDocument.documentElement.dataset.theme = theme; }} />
  </main>;
}

export default function App() {
  const [theme, setTheme] = useState<Theme>(() => window.localStorage.getItem('roadmap-theme') === 'dark' ? 'dark' : 'light');
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem('roadmap-theme', theme);
  }, [theme]);
  const themeProps = { theme, onToggleTheme: () => setTheme((current) => current === 'dark' ? 'light' : 'dark') };
  return <Routes><Route path="/" element={<Home {...themeProps} />} /><Route path="/lesson/:slug" element={<LessonPage {...themeProps} />} /><Route path="/course/:slug" element={<CourseRedirect />} /><Route path="/course/:slug/:conceptId" element={<CourseConceptPage {...themeProps} />} /><Route path="*" element={<main className="container"><h1>Page introuvable</h1><Link to="/">Retour à l’accueil</Link><ThemeToggle {...themeProps} /></main>} /></Routes>;
}
