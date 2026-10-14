import { cleanup, fireEvent, render, screen, waitFor } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import App from './App';
import { courses } from './data/courses';
import catalog from './data/catalog.json';

const catalogEntryCount = catalog.chapters.reduce((total, chapter) => total + chapter.lessons.length, 0);
const courseConceptCount = courses.reduce((total, course) => total + course.modules.length, 0);

afterEach(() => {
  cleanup();
  localStorage.removeItem('roadmap-theme');
  delete document.documentElement.dataset.theme;
});

function renderApp() {
  return render(<MemoryRouter><App /></MemoryRouter>);
}

describe('catalogue de migration', () => {
  it('contient 25 chapitres et 174 entrées avec des identifiants uniques', () => {
    expect(catalog.chapters).toHaveLength(25);
    const entries = catalog.chapters.flatMap((chapter) => chapter.lessons);
    expect(entries).toHaveLength(174);
    expect(entries.every((entry) => entry.path.startsWith('/lessons/'))).toBe(true);
    expect(new Set(entries.map((entry) => entry.id)).size).toBe(entries.length);
  });

  it('propose un cours JavaScript moderne approfondi', () => {
    const javascript = courses.find((course) => course.id === 'javascript');
    expect(javascript).toBeTruthy();
    expect(javascript!.modules.length).toBe(26);
    expect(javascript!.modules.some((module) => module.id === 'promesses-async')).toBe(true);
    expect(javascript!.modules.some((module) => module.id === 'securite-javascript')).toBe(true);
    expect(javascript!.references?.length).toBeGreaterThanOrEqual(10);
    expect(javascript!.finalProject.criteria.length).toBeGreaterThanOrEqual(8);

    const javascriptExamples = javascript!.modules.flatMap((module) =>
      (module.sections ?? []).flatMap((section) => section.examples ?? []),
    );
    const conversionExample = javascriptExamples.find((example) => example.code.includes('function parsePositiveAmount'));
    expect(conversionExample?.code).toContain("typeof input !== 'string'");
    expect(conversionExample?.code).toContain("input.trim() === ''");
    const nullishExample = javascriptExamples.find((example) => example.code.includes('const safeName = user?.profile?.name'));
    expect(nullishExample?.code).toContain('const user = null;');
    const securityExample = javascriptExamples.find((example) => example.code.includes("fetch('/api/orders'"));
    expect(securityExample?.code).toContain("'Content-Type': 'application/json'");
    expect(securityExample?.code).toContain('if (!response.ok)');
  });

  it('affiche le catalogue et son volume initial', () => {
    renderApp();
    expect(screen.getByRole('heading', { name: 'Devenir développeur Full Stack' })).toBeTruthy();
    expect(screen.getByRole('status').textContent).toContain(`${catalogEntryCount + courseConceptCount} entrée(s) affichée(s)`);
  });

  it('filtre les compétences sans tenir compte des accents', () => {
    renderApp();
    const search = screen.getByRole('searchbox', { name: 'Rechercher dans le catalogue' });
    fireEvent.change(search, { target: { value: 'accessibilite' } });
    expect(screen.getByRole('status').textContent).toContain('résultat(s) pour « accessibilite »');
    expect(screen.getByRole('link', { name: /Accessibilité Web/ })).toBeTruthy();
  });

  it('annonce explicitement une recherche sans résultat', () => {
    renderApp();
    fireEvent.change(screen.getByRole('searchbox', { name: 'Rechercher dans le catalogue' }), { target: { value: 'zzzz-introuvable' } });
    expect(screen.getByRole('status').textContent).toContain('0 résultat');
    expect(screen.getByText('Aucune entrée ne correspond à ces filtres.')).toBeTruthy();
  });

  it('filtre les cinq projets et les 169 compétences selon la source', () => {
    renderApp();
    fireEvent.click(screen.getByRole('button', { name: 'Projets' }));
    expect(screen.getByRole('status').textContent).toContain('5 entrée(s) affichée(s)');
    expect(screen.getAllByRole('link')).toHaveLength(5);

    fireEvent.click(screen.getByRole('button', { name: 'Compétences' }));
    expect(screen.getByRole('status').textContent).toContain('169 entrée(s) affichée(s)');
    const skillChapters = catalog.chapters.filter((chapter) => chapter.id !== '24-projets-pratiques');
    expect(screen.getByRole('region', { name: 'Bibliothèque de compétences' })).toBeTruthy();
    expect(document.querySelectorAll('.skills-sidebar-item')).toHaveLength(skillChapters.length);
    expect(document.querySelectorAll('.skills-entry-row')).toHaveLength(skillChapters[0].lessons.length);
    expect(screen.getByRole('heading', { name: skillChapters[0].title })).toBeTruthy();
    const secondChapterButton = screen.getAllByRole('button').find((button) => button.classList.contains('skills-sidebar-item') && button.textContent?.includes(skillChapters[1].title));
    expect(secondChapterButton).toBeTruthy();
    fireEvent.click(secondChapterButton!);
    expect(screen.getByRole('heading', { name: skillChapters[1].title })).toBeTruthy();
    expect(document.querySelectorAll('.skills-entry-row')).toHaveLength(skillChapters[1].lessons.length);
  });

  it('bascule le thème et mémorise la préférence', () => {
    renderApp();
    fireEvent.click(screen.getByRole('button', { name: 'Passer au mode sombre' }));
    expect(document.documentElement.dataset.theme).toBe('dark');
    expect(localStorage.getItem('roadmap-theme')).toBe('dark');
    expect(screen.getByRole('button', { name: 'Passer au mode clair' })).toBeTruthy();
  });

  it('synchronise le thème sombre avec le document de leçon', () => {
    localStorage.setItem('roadmap-theme', 'dark');
    render(<MemoryRouter initialEntries={['/lesson/projet-1-site-frontend']}><App /></MemoryRouter>);
    const iframe = screen.getByTitle('Projet 1 — Site frontend');
    const iframeDocument = document.implementation.createHTMLDocument('Leçon');
    Object.defineProperty(iframe, 'contentDocument', { configurable: true, value: iframeDocument });
    fireEvent.load(iframe);
    expect(iframeDocument.documentElement.dataset.theme).toBe('dark');
  });

  it('présente les neuf cours et calcule leur volume', () => {
    expect(courses.map((course) => course.id)).toEqual(['html', 'css', 'javascript', 'typescript', 'react', 'gestion-etat-react', 'nodejs', 'sql', 'postgresql']);
    const { container } = renderApp();
    fireEvent.click(screen.getByRole('button', { name: 'Cours' }));
    expect(screen.getByRole('status').textContent).toContain(`${courses.length} cours · ${courseConceptCount} modules au total`);
    expect(container.querySelectorAll('.course-sidebar-item')).toHaveLength(courses.length);
    expect(container.querySelectorAll('.course-section')).toHaveLength(0);
    expect(container.querySelectorAll('.course-module-row')).toHaveLength(courses[0].modules.length);
    expect(screen.getAllByRole('link').filter((link) => link.getAttribute('href')?.startsWith('/course/'))).toHaveLength(courses[0].modules.length);
    expect(screen.getByRole('link', { name: /Syntaxe, éléments, attributs et parsing/ }).getAttribute('href')).toBe('/course/html/syntaxe');
    fireEvent.click(screen.getByRole('button', { name: /^React/ }));
    expect(screen.getByRole('heading', { name: 'React' })).toBeTruthy();
    expect(container.querySelectorAll('.course-module-row')).toHaveLength(courses.find((course) => course.id === 'react')!.modules.length);
    expect(screen.queryByRole('heading', { name: /Compétences professionnelles/ })).toBeNull();
  });

  it('expose un cours TypeScript approfondi avec des exercices guidés', () => {
    const typescript = courses.find((course) => course.id === 'typescript');
    expect(typescript).toBeTruthy();
    expect(typescript!.modules).toHaveLength(20);
    expect(typescript!.modules.reduce((total, module) => total + (module.sections?.length ?? 0), 0)).toBe(60);
    expect(typescript!.modules.reduce((total, module) => total + (module.sections?.reduce((count, section) => count + (section.examples?.length ?? 0), 0) ?? 0), 0)).toBe(80);
    expect(typescript!.modules.every((module) => module.exercise.includes('Critères d’acceptation'))).toBe(true);
    expect(typescript!.references?.length).toBeGreaterThanOrEqual(13);
    expect(typescript!.finalProject.criteria.length).toBeGreaterThanOrEqual(8);

    render(<MemoryRouter initialEntries={['/course/typescript/modele-types']}><App /></MemoryRouter>);
    expect(screen.getByRole('heading', { name: 'TypeScript approfondi — Modèle mental du système de types' })).toBeTruthy();
    expect(screen.getAllByText(/Approfondissement —/).length).toBeGreaterThan(0);
  });


  it('expose un cours React approfondi avec 21 modules, sections, exemples et références', () => {
    const reactCourse = courses.find((course) => course.id === 'react');
    expect(reactCourse).toBeTruthy();
    expect(reactCourse!.modules).toHaveLength(21);
    expect(reactCourse!.modules.reduce((total, module) => total + (module.sections?.length ?? 0), 0)).toBeGreaterThanOrEqual(60);
    expect(reactCourse!.modules.reduce((total, module) => total + (module.sections?.reduce((count, section) => count + (section.examples?.length ?? 0), 0) ?? 0), 0)).toBeGreaterThanOrEqual(60);
    expect(reactCourse!.modules.every((module) => module.exercise.trim().length > 30)).toBe(true);
    expect(reactCourse!.references?.length).toBeGreaterThanOrEqual(10);
    expect(reactCourse!.finalProject.criteria.length).toBeGreaterThanOrEqual(8);

    render(<MemoryRouter initialEntries={['/course/react/etat-usestate']}><App /></MemoryRouter>);
    expect(screen.getByRole('heading', { name: 'React — État local, useState et snapshots' })).toBeTruthy();
    expect(screen.getByRole('heading', { name: 'Points à retenir' })).toBeTruthy();
    expect(screen.getByText(/forme fonctionnelle garantit/)).toBeTruthy();
  });

  it('expose un cours approfondi sur les stores et la gestion de l’état', () => {
    const stateCourse = courses.find((course) => course.id === 'gestion-etat-react');
    expect(stateCourse).toBeTruthy();
    expect(stateCourse!.modules).toHaveLength(8);
    expect(stateCourse!.modules.reduce((total, module) => total + (module.sections?.length ?? 0), 0)).toBe(41);
    expect(stateCourse!.modules.reduce((total, module) => total + (module.sections?.reduce((count, section) => count + (section.examples?.length ?? 0), 0) ?? 0), 0)).toBe(41);
    expect(stateCourse!.references?.length).toBeGreaterThanOrEqual(9);
    expect(stateCourse!.finalProject.title).toContain('Zustand contre Redux Toolkit');
    expect(stateCourse!.modules.some((module) => module.id === 'tanstack-query')).toBe(true);
    const stateExamples = stateCourse!.modules.flatMap((module) =>
      (module.sections ?? []).flatMap((section) => section.examples ?? []),
    );
    const zustandCart = stateExamples.find((example) => example.title === 'Store de panier minimal');
    expect(zustandCart?.code).toContain('quantity: item.quantity + 1');
    const queryExample = stateExamples.find((example) => example.title === 'Requête typée');
    expect(queryExample?.code).toContain('const items: unknown[] = payload');
    expect(queryExample?.code).toContain('items.filter(isTodo)');

    render(<MemoryRouter initialEntries={['/course/gestion-etat-react/zustand']}><App /></MemoryRouter>);
    expect(screen.getByRole('heading', { name: 'Gestion d’état avancée avec React — Zustand : store léger et sélecteurs' })).toBeTruthy();
    expect(screen.getByText(/Sélecteurs pour ne s’abonner qu’à une portion utile/)).toBeTruthy();
  });

  it('affiche un concept CSS sur sa route dédiée, sans iframe legacy', () => {
    render(<MemoryRouter initialEntries={['/course/css']}><App /></MemoryRouter>);
    expect(screen.getByRole('heading', { name: 'CSS — Modèle mental, syntaxe et branchement à HTML' })).toBeTruthy();
    expect(screen.getByRole('heading', { name: 'Points à retenir' })).toBeTruthy();
    expect(screen.getByRole('link', { name: /HTML|catalogue/i })).toBeTruthy();
    expect(screen.queryByTitle('Cours CSS')).toBeNull();
  });

  it('expose un cours CSS approfondi avec 21 concepts, au moins 60 sections et 13 références', () => {
    const cssCourse = courses.find((course) => course.id === 'css');
    expect(cssCourse?.modules).toHaveLength(21);
    expect(cssCourse?.modules.reduce((total, module) => total + (module.sections?.length ?? 0), 0)).toBeGreaterThanOrEqual(60);
    expect(cssCourse?.modules.every((module) => module.exercise.trim().length > 30)).toBe(true);
    expect(cssCourse?.modules.reduce((total, module) => total + (module.sections?.reduce((count, section) => count + (section.examples?.length ?? 0), 0) ?? 0), 0)).toBeGreaterThanOrEqual(60);
    expect(cssCourse?.references?.length).toBeGreaterThanOrEqual(13);
    render(<MemoryRouter initialEntries={['/course/css/valeurs-unites']}><App /></MemoryRouter>);
    expect(screen.getByRole('heading', { name: /CSS — Valeurs, unités, fonctions et propriétés personnalisées/ })).toBeTruthy();
    expect(screen.getByText(/ne répare pas une valeur présente mais incompatible/)).toBeTruthy();
  });

  it('expose le cours HTML approfondi avec 21 concepts, du code et 15 sources', () => {
    const { container } = render(<MemoryRouter initialEntries={['/course/html/syntaxe']}><App /></MemoryRouter>);
    expect(screen.getByRole('heading', { name: 'HTML — Syntaxe, éléments, attributs et parsing' })).toBeTruthy();
    const htmlCourse = courses.find((course) => course.id === 'html');
    expect(htmlCourse?.modules).toHaveLength(21);
    expect(htmlCourse?.modules.reduce((total, module) => total + (module.sections?.reduce((sectionTotal, section) => sectionTotal + (section.examples?.length ?? 0), 0) ?? 0), 0)).toBeGreaterThan(15);
    expect(container.querySelectorAll('.course-subsection pre code')).toHaveLength(2);
    expect(container.querySelectorAll('.course-references a')).toHaveLength(15);
    expect(screen.getByRole('link', { name: /2\. Document complet, doctype et métadonnées/ })).toBeTruthy();
  });

  it('colorise les exemples HTML et permet de basculer vers un aperçu sans scripts', () => {
    const { container } = render(<MemoryRouter initialEntries={['/course/html/syntaxe']}><App /></MemoryRouter>);
    const coloredTokens = container.querySelectorAll('.code-example pre code span.token[style]');
    expect(coloredTokens.length).toBeGreaterThan(0);
    expect(new Set(Array.from(coloredTokens, (token) => token.getAttribute('style'))).size).toBeGreaterThan(1);
    fireEvent.click(screen.getAllByRole('button', { name: 'Aperçu HTML' })[0]);
    const preview = screen.getAllByTitle(/Aperçu HTML/)[0] as HTMLIFrameElement;
    expect(preview.getAttribute('sandbox')).toBe('');
    expect(preview.srcdoc).toContain("default-src 'none'");
    expect(preview.srcdoc).toContain('<p class="introduction">');
    expect(screen.getAllByRole('button', { name: 'Code source' })[0].getAttribute('aria-pressed')).toBe('false');
  });

  it('utilise un hashtag de concept pour préremplir la recherche', async () => {
    render(<MemoryRouter initialEntries={['/course/html/syntaxe']}><App /></MemoryRouter>);
    fireEvent.click(screen.getByRole('link', { name: '#syntaxe' }));
    const search = screen.getByRole('searchbox', { name: 'Rechercher dans le catalogue' });
    await waitFor(() => expect((search as HTMLInputElement).value).toBe('syntaxe'));
    const matchingConceptLinks = screen.getAllByRole('link').filter((link) => link.getAttribute('href')?.startsWith('/course/'));
    expect(matchingConceptLinks.some((link) => link.getAttribute('href') === '/course/html/syntaxe')).toBe(true);
  });

  it('conserve la route HTML des fiches de compétence', () => {
    render(<MemoryRouter initialEntries={['/lesson/react-composants']}><App /></MemoryRouter>);
    expect(screen.getByTitle('React : composants, props et state').getAttribute('src')).toContain('/lessons/react-composants.html');
  });
});
