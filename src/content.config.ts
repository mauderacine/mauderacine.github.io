import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { lignes } from './config';

// Chaque projet = un dossier dans src/content/projets/ avec un index.md
// (+ ses images à côté). Le dossier _modele est ignoré : c'est le gabarit.
const projets = defineCollection({
  loader: glob({
    pattern: ['**/index.md', '!_modele/**'],
    base: './src/content/projets',
  }),
  schema: ({ image }) =>
    z.object({
      titre: z.string(),
      // Nom court affiché sur le plan (sinon le titre est utilisé)
      station: z.string().optional(),
      resume: z.string(),
      ligne: z
        .string()
        .refine((l) => l in lignes, {
          message: `ligne doit être une de : ${Object.keys(lignes).join(', ')}`,
        }),
      date: z.coerce.date(),
      periode: z.string().optional(),
      contexte: z.string().optional(),
      role: z.string().optional(),
      equipe: z.string().optional(),
      outils: z.array(z.string()).default([]),
      statut: z.enum(['termine', 'en-cours']).default('termine'),
      couverture: image().optional(),
      couvertureAlt: z.string().optional(),
      galerie: z
        .array(z.object({ src: image(), legende: z.string().optional() }))
        .default([]),
      // Extraits d'un gros rapport : une figure + quelques phrases chacun
      extraits: z
        .array(
          z.object({
            image: image().optional(),
            titre: z.string(),
            texte: z.string(),
          }),
        )
        .default([]),
      // Documents PDF à consulter (mets les PDF dans public/fichiers/)
      documents: z
        .array(
          z.object({
            titre: z.string(),
            fichier: z.string(),
            description: z.string().optional(),
            pages: z.number().optional(),
          }),
        )
        .default([]),
      liens: z.array(z.object({ label: z.string(), url: z.string() })).default([]),
      // Dépôt GitHub lié, ex. 'mauderacine/bixi-hiver'
      github: z.string().optional(),
      // true = le projet n'apparaît pas sur le site publié
      brouillon: z.boolean().default(false),
    }),
});

export const collections = { projets };
