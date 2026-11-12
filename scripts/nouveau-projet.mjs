// Crée un nouveau projet à partir du gabarit.
// Utilisation : npm run nouveau -- "Nom du projet" [ligne]
//   ex.       : npm run nouveau -- "Tableau de bord STM" donnees
import { mkdirSync, readFileSync, writeFileSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const racine = join(dirname(fileURLToPath(import.meta.url)), '..', 'src', 'content', 'projets');
const [titre, ligne] = process.argv.slice(2);

if (!titre) {
  console.log('\nUtilisation : npm run nouveau -- "Nom du projet" [logiciel|donnees|ville]\n');
  process.exit(1);
}

const slug = titre
  .normalize('NFD')
  .replace(/[̀-ͯ]/g, '')
  .toLowerCase()
  .replace(/[^a-z0-9]+/g, '-')
  .replace(/^-|-$/g, '');

const dossier = join(racine, slug);
if (existsSync(dossier)) {
  console.log(`\nLe dossier existe déjà : src/content/projets/${slug}\n`);
  process.exit(1);
}

const aujourdhui = new Date().toISOString().slice(0, 10);
let gabarit = readFileSync(join(racine, '_modele', 'index.md'), 'utf8');

// Retire l'en-tête d'explication du gabarit
gabarit = gabarit.replace(/^---\n(# .*\n)+\n/, '---\n');
gabarit = gabarit
  .replace(/^titre: .*$/m, `titre: ${JSON.stringify(titre)}`)
  .replace(/^station: .*$/m, `station: ${JSON.stringify(titre)}`)
  .replace(/^date: .*$/m, `date: ${aujourdhui}`)
  .replace(/^brouillon: .*$/m, 'brouillon: true # passe à false quand c\'est prêt');
if (ligne) gabarit = gabarit.replace(/^ligne: .*$/m, `ligne: ${ligne}`);

mkdirSync(dossier, { recursive: true });
writeFileSync(join(dossier, 'index.md'), gabarit);

console.log(`\n✓ Projet créé : src/content/projets/${slug}/index.md`);
console.log('  Dépose tes images dans ce dossier, remplis le texte,');
console.log('  puis mets « brouillon: false » pour le publier.\n');
