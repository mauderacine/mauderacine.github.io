# Portfolio de Maude Racine

Site construit avec [Astro](https://astro.build). Tout se modifie dans VS Code, et chaque `git push` met le site en ligne.

## Démarrer

```bash
npm install
npm run dev
```

Ouvre http://localhost:4321. Le site se recharge tout seul quand tu modifies un fichier.

Extension VS Code recommandée : **Astro** (proposée automatiquement à l'ouverture du dossier).

## Où modifier quoi

| Je veux changer…                         | Fichier                                   |
| ---------------------------------------- | ----------------------------------------- |
| Mon texte d'accueil, à propos, liens     | `src/config.ts`                           |
| Mon parcours (études, stages)            | `src/config.ts` → `parcours`              |
| Les lignes du plan (noms, couleurs)      | `src/config.ts` → `lignes`                |
| Un projet                                | `src/content/projets/<nom>/index.md`      |
| Mes photos                               | Glisse-les dans `src/photos/`             |
| Le texte de la section Photographie      | `src/config.ts` → `photographie`          |
| Les couleurs (noir et blanc pour l'instant) | `src/styles/global.css` (en haut)      |
| Ma boîte à outils, mes distinctions      | `src/config.ts` → `outils`, `distinctions` |
| Mes dépôts GitHub affichés               | `src/config.ts` → `github: 'ton-nom'`     |

## Ajouter des photos

Glisse tes photos dans `src/photos/`. **Le nom du fichier devient le lieu** affiché au survol :

```
src/photos/
  01 - Kyoto, Japon.jpg            → « Kyoto, Japon »
  02 - Montréal, Québec.jpg        → « Montréal, Québec »
  Parc national de la Mauricie.jpg
```

- Le numéro suivi d'un tiret sert seulement à choisir l'ordre ; il ne s'affiche pas.
- JPG, PNG, WebP ou AVIF (pas de HEIC : exporte en JPG depuis ton iPhone).
- N'importe quelle taille : le site crée des versions légères tout seul.
- Les 6 premières photos apparaissent sur l'accueil, toutes sont sur la page `/photographie`.
- Tant que le dossier est vide, la section et le lien du menu restent cachés sur le site publié.

## Ajouter un projet

```bash
npm run nouveau -- "Nom du projet" donnees
```

La ligne est `logiciel`, `donnees` ou `ville`. Ça crée `src/content/projets/nom-du-projet/index.md` en mode brouillon.

1. Remplis le haut du fichier (titre, résumé, période, outils…).
2. Écris le texte en Markdown en dessous.
3. **Images** : glisse-les dans le même dossier, puis dans le haut du fichier :
   ```yaml
   couverture: ./photo.jpg
   galerie:
     - src: ./maquette-1.jpg
       legende: Vue d'ensemble
   ```
   Les images sont compressées automatiquement. JPG ou PNG, n'importe quelle taille.
4. **PDF** (rapport, affiche) : mets-le dans `public/fichiers/`, puis :
   ```yaml
   liens:
     - label: Lire le rapport (PDF)
       url: /fichiers/mon-rapport.pdf
   ```
5. **Gros rapport** (ex. Louvain Est) : ne mets pas seulement le PDF complet, personne ne lit 150 pages. Dans l'ordre :
   - 1 photo de couverture + 4 à 6 photos dans `galerie` (la maquette, par exemple) ;
   - 3 ou 4 `extraits` : une figure tirée du rapport + 2-3 phrases (ce que tu as fait, décidé, et pourquoi) ;
   - dans `documents`, un PDF avec **seulement tes sections**, puis le rapport complet si l'équipe est d'accord.
   ```yaml
   extraits:
     - image: ./coupe-rue.png
       titre: Une rue pensée pour la marche et le vélo
       texte: Voie cyclable protégée, trottoirs élargis et 30 km/h.
   documents:
     - titre: Mes sections du rapport
       fichier: /fichiers/mes-sections.pdf
       description: Transport et mobilité
       pages: 24
   ```
   Le PDF s'affiche dans la page (bouton « Aperçu ») et se télécharge. Garde chaque PDF sous 10 Mo.
6. **Code sur GitHub** : `github: ton-nom/nom-du-depot` ajoute un bouton vers le dépôt.
7. Passe `brouillon: false` pour le publier.

La station apparaît toute seule sur le plan, placée selon sa `date` (plus récent = plus loin sur la ligne). `statut: en-cours` la dessine en pointillé.

## Mettre en ligne (GitHub Pages, gratuit)

1. Crée un dépôt GitHub. Le plus simple : le nommer `ton-nom.github.io`.
2. Dans `astro.config.mjs`, remplace `site` par `https://ton-nom.github.io`.
   Si le dépôt a un autre nom (ex. `portfolio`), mets aussi `base: '/portfolio'`.
3. Sur GitHub : **Settings → Pages → Source : GitHub Actions**.
4. Pousse le code :
   ```bash
   git init
   git add .
   git commit -m "Premier jet du portfolio"
   git branch -M main
   git remote add origin https://github.com/ton-nom/ton-nom.github.io.git
   git push -u origin main
   ```

Ensuite, chaque `git push` republie le site en environ une minute. La liste des dépôts GitHub se met aussi à jour chaque lundi.

## Ajouter une ligne au plan

Dans `src/config.ts`, ajoute une entrée à `lignes` avec `trace: 'extra'` (le 4e tracé disponible). Exemple :

```ts
perso: { nom: 'Perso', couleur: '#C2410C', description: 'Projets hors cours', trace: 'extra' },
```

Les tracés eux-mêmes sont définis dans `src/lib/plan.ts`.
