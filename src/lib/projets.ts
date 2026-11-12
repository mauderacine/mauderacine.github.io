import { getCollection, type CollectionEntry } from 'astro:content';
import { lignes, type CleLigne } from '../config';

export type Projet = CollectionEntry<'projets'>;

/** Tous les projets publiés (les brouillons restent visibles en mode dev). */
export async function tousLesProjets() {
  const projets = await getCollection(
    'projets',
    ({ data }) => import.meta.env.DEV || !data.brouillon,
  );
  return projets.sort((a, b) => a.data.date.valueOf() - b.data.date.valueOf());
}

/** Projets groupés par ligne, du plus ancien au plus récent. */
export async function projetsParLigne() {
  const projets = await tousLesProjets();
  return (Object.keys(lignes) as CleLigne[]).map((cle) => ({
    cle,
    ...lignes[cle],
    projets: projets.filter((p) => p.data.ligne === cle),
  }));
}

/** Ajoute le « base » du site (utile si le site est dans un sous-dossier sur GitHub Pages). */
export function lien(chemin: string) {
  if (/^(https?:|mailto:|#)/.test(chemin)) return chemin;
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return base + (chemin.startsWith('/') ? chemin : '/' + chemin);
}

export const urlProjet = (p: Projet) => lien(`/projets/${p.id}/`);
