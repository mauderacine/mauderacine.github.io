// @ts-check
import { defineConfig } from 'astro/config';

// ─────────────────────────────────────────────────────────────
//  Mise en ligne sur GitHub Pages
//  • Dépôt nommé  <ton-nom>.github.io  → site: 'https://<ton-nom>.github.io', base: '/'
//  • Autre nom, ex. « portfolio »      → site: 'https://<ton-nom>.github.io', base: '/portfolio'
// ─────────────────────────────────────────────────────────────
export default defineConfig({
    site: 'https://mauderacine.github.io',
    base: '/',
});
