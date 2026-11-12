import type { ImageMetadata } from 'astro';

// Toutes les images du dossier src/photos/ (JPG, PNG, WebP, AVIF).
const fichiers = import.meta.glob<{ default: ImageMetadata }>(
  '/src/photos/*.{jpg,jpeg,png,webp,avif,JPG,JPEG,PNG,WEBP,AVIF}',
  { eager: true },
);

export type Photo = {
  id: string;
  src: ImageMetadata;
  /** Le lieu, tiré du nom du fichier */
  lieu: string;
  /** largeur / hauteur */
  ratio: number;
};

/**
 * « 03 - Kyoto, Japon.jpg » → « Kyoto, Japon »
 * Le numéro au début (suivi d'un tiret, d'un point ou d'un _) sert seulement à l'ordre.
 */
function lieuDepuisNom(nom: string) {
  return nom
    .replace(/^\d{1,3}\s*[-–—_.)]\s*/, '')
    .replace(/_/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

export function toutesLesPhotos(): Photo[] {
  return Object.entries(fichiers)
    .sort(([a], [b]) => a.localeCompare(b, 'fr', { numeric: true, sensitivity: 'base' }))
    .map(([chemin, module]) => {
      const fichier = decodeURIComponent(chemin.split('/').pop() ?? '');
      const nom = fichier.replace(/\.[^.]+$/, '');
      const src = module.default;
      return { id: nom, src, lieu: lieuDepuisNom(nom), ratio: src.width / src.height };
    });
}
