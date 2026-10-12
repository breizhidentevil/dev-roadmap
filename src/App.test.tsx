import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import App from './App';
import catalog from './data/catalog.json';

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

  it('affiche le catalogue et son volume initial', () => {
    renderApp();
    expect(screen.getByRole('heading', { name: 'Devenir développeur Full Stack' })).toBeTruthy();
    expect(screen.getByRole('status').textContent).toContain('174 entrée(s) affichée(s)');
  });

  it('filtre les compétences sans tenir compte des accents', () => {
    renderApp();
    const search = screen.getByRole('searchbox', { name: 'Rechercher une compétence' });
    fireEvent.change(search, { target: { value: 'accessibilite' } });
    expect(screen.getByRole('status').textContent).toContain('résultat(s) pour « accessibilite »');
    expect(screen.getByRole('link', { name: /Accessibilité Web/ })).toBeTruthy();
  });

  it('annonce explicitement une recherche sans résultat', () => {
    renderApp();
    fireEvent.change(screen.getByRole('searchbox', { name: 'Rechercher une compétence' }), { target: { value: 'zzzz-introuvable' } });
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
    expect(screen.getAllByRole('link')).toHaveLength(169);
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
});
