import { useEffect, useMemo, useRef, useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import { Link, Route, Routes, useParams } from 'react-router-dom';
import catalogData from './data/catalog.json';
import type { Catalog, Lesson, LessonKind } from './data/types';
import './app.css';

const catalog = catalogData as Catalog;
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
  const [query, setQuery] = useState('');
  const [kindFilter, setKindFilter] = useState<LessonKind | 'all'>('all');
  const normalized = query.trim().toLocaleLowerCase('fr');
  const filtered = useMemo(() => catalog.chapters.map((chapter) => ({
    ...chapter,
    lessons: chapter.lessons.filter((lesson) => {
      const matchesKind = kindFilter === 'all' || (chapter.id === '24-projets-pratiques' ? 'project' : 'skill') === kindFilter;
      const searchableText = `${lesson.title} ${lesson.description} ${chapter.title}`.toLocaleLowerCase('fr').normalize('NFD').replace(/[\u0300-\u036f]/g, '');
      return matchesKind && (!normalized || searchableText.includes(normalized.normalize('NFD').replace(/[\u0300-\u036f]/g, '')));
    }),
  })).filter((chapter) => chapter.lessons.length > 0), [kindFilter, normalized]);
  const resultCount = filtered.reduce((total, chapter) => total + chapter.lessons.length, 0);
  return <main className="container">
    <header className="hero">
      <div className="hero-top">
        <p className="eyebrow">Parcours pédagogique évolutif</p>
        <ThemeToggle theme={theme} onToggleTheme={onToggleTheme} />
      </div>
      <h1>Devenir développeur Full Stack</h1>
      <p>Un catalogue navigable de compétences, avec conservation des tutoriels HTML de la version source.</p>
      <div className="stats"><div><strong>{catalog.chapters.length}</strong><span>chapitres</span></div><div><strong>{lessons.filter((lesson) => lesson.kind === 'skill').length}</strong><span>compétences</span></div><div><strong>{lessons.filter((lesson) => lesson.kind === 'project').length}</strong><span>projets</span></div></div>
      <label className="search-label" htmlFor="search">Rechercher une compétence</label>
      <input id="search" className="search" type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Ex. React, SQL, accessibilité…" aria-describedby="search-results" />
      <div className="entry-filters" role="group" aria-label="Filtrer les entrées">
        <button type="button" aria-pressed={kindFilter === 'all'} onClick={() => setKindFilter('all')}>Tout</button>
        <button type="button" aria-pressed={kindFilter === 'skill'} onClick={() => setKindFilter('skill')}>Compétences</button>
        <button type="button" aria-pressed={kindFilter === 'project'} onClick={() => setKindFilter('project')}>Projets</button>
      </div>
      <p className="search-results" id="search-results" role="status" aria-live="polite">
        {normalized ? `${resultCount} résultat(s) pour « ${query.trim()} »` : `${resultCount} entrée(s) affichée(s)`}
      </p>
    </header>
    <div className="catalogue">{filtered.map((chapter) => <section className="chapter" id={chapter.id} key={chapter.id}>
      <div className="chapter-heading"><span className="chapter-number">{chapter.number}</span><div><h2>{chapter.title}</h2><p>{chapter.lessons.length} entrée(s)</p></div></div>
      <div className="lesson-grid">{chapter.lessons.map((lesson) => <Link className="lesson-card" to={`/lesson/${lesson.id}`} key={lesson.id}><strong>{lesson.title}</strong><span>{lesson.description}</span><span className="arrow" aria-hidden="true">↗</span></Link>)}</div>
    </section>)}</div>
    {filtered.length === 0 && <p className="empty-state">Aucune entrée ne correspond à ces filtres.</p>}
    <footer>Catalogue migré depuis V41. Les tutoriels HTML sont conservés ; la validation fonctionnelle complète reste en cours.</footer>
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
  return <Routes><Route path="/" element={<Home {...themeProps} />} /><Route path="/lesson/:slug" element={<LessonPage {...themeProps} />} /><Route path="*" element={<main className="container"><h1>Page introuvable</h1><Link to="/">Retour à l’accueil</Link><ThemeToggle {...themeProps} /></main>} /></Routes>;
}
