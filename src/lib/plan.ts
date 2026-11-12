// Géométrie du plan : les tracés des lignes et le placement des stations.
// Tu n'as normalement pas besoin de toucher à ce fichier.
// Le plan fait 1000 × 560 unités ; le terminus (« Maude ») est au point HUB.

export const LARGEUR = 1000;
export const HAUTEUR = 560;
export const HUB: Pt = [120, 280];

type Pt = [number, number];

// Tracés octolinéaires (segments à 0°, 45° ou 90°) comme sur un plan de métro.
export const traces: Record<string, Pt[]> = {
  haut: [HUB, [250, 150], [560, 150], [620, 90], [880, 90]],
  centre: [HUB, [880, 280]],
  bas: [HUB, [250, 410], [500, 410], [560, 470], [880, 470]],
  extra: [HUB, [120, 30], [880, 30]],
};

const dist = (a: Pt, b: Pt) => Math.hypot(b[0] - a[0], b[1] - a[1]);

export function longueur(pts: Pt[]) {
  let L = 0;
  for (let i = 1; i < pts.length; i++) L += dist(pts[i - 1], pts[i]);
  return L;
}

/** Point situé à la distance d le long de la polyligne. */
export function pointA(pts: Pt[], d: number): Pt {
  let reste = d;
  for (let i = 1; i < pts.length; i++) {
    const seg = dist(pts[i - 1], pts[i]);
    if (reste <= seg) {
      const t = seg === 0 ? 0 : reste / seg;
      return [
        pts[i - 1][0] + (pts[i][0] - pts[i - 1][0]) * t,
        pts[i - 1][1] + (pts[i][1] - pts[i - 1][1]) * t,
      ];
    }
    reste -= seg;
  }
  return pts[pts.length - 1];
}

/** Chemin SVG avec des coins arrondis (rayon r) à chaque coude. */
export function cheminArrondi(pts: Pt[], r = 34) {
  let d = `M ${pts[0][0]} ${pts[0][1]}`;
  for (let i = 1; i < pts.length - 1; i++) {
    const [p0, p1, p2] = [pts[i - 1], pts[i], pts[i + 1]];
    const r1 = Math.min(r, dist(p0, p1) / 2);
    const r2 = Math.min(r, dist(p1, p2) / 2);
    const a: Pt = [
      p1[0] - ((p1[0] - p0[0]) / dist(p0, p1)) * r1,
      p1[1] - ((p1[1] - p0[1]) / dist(p0, p1)) * r1,
    ];
    const b: Pt = [
      p1[0] + ((p2[0] - p1[0]) / dist(p1, p2)) * r2,
      p1[1] + ((p2[1] - p1[1]) / dist(p1, p2)) * r2,
    ];
    d += ` L ${a[0].toFixed(1)} ${a[1].toFixed(1)} Q ${p1[0]} ${p1[1]} ${b[0].toFixed(1)} ${b[1].toFixed(1)}`;
  }
  const fin = pts[pts.length - 1];
  return d + ` L ${fin[0]} ${fin[1]}`;
}

/**
 * Positions de n stations le long d'un tracé.
 * Les stations commencent après le premier segment (pour laisser le terminus « Maude »
 * respirer) et la dernière tombe au bout de la ligne.
 */
export function positionsStations(pts: Pt[], n: number): Pt[] {
  if (n === 0) return [];
  const L = longueur(pts);
  const debut = pts.length > 2 ? dist(pts[0], pts[1]) + 70 : 200;
  if (n === 1) return [pointA(pts, debut + (L - debut) * 0.45)];
  return Array.from({ length: n }, (_, i) => pointA(pts, debut + ((L - debut) * i) / (n - 1)));
}

/** Coupe un nom de station en lignes d'environ `max` caractères. */
export function couperNom(nom: string, max = 17): string[] {
  const mots = nom.split(' ');
  const lignes: string[] = [];
  let cur = '';
  for (const m of mots) {
    if (cur && (cur + ' ' + m).length > max) {
      lignes.push(cur);
      cur = m;
    } else cur = cur ? cur + ' ' + m : m;
  }
  if (cur) lignes.push(cur);
  return lignes;
}
