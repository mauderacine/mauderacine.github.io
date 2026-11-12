---
# ── GABARIT ──────────────────────────────────────────────────
# Le plus simple : npm run nouveau -- "Nom du projet"
# (copie ce gabarit dans un nouveau dossier pour toi)
# Ce dossier _modele n'apparaît jamais sur le site.
# ─────────────────────────────────────────────────────────────

titre: Titre complet du projet
station: Nom court # affiché sur le plan (2-3 mots)
resume: Une ou deux phrases. Ce que c'est et pourquoi c'est intéressant.
ligne: logiciel # logiciel | donnees | ville (voir src/config.ts)
date: 2026-01-01 # sert à placer la station sur la ligne (plus récent = plus loin)
periode: Hiver 2026
contexte: Cours ou employeur
role: Ce que TU as fait
equipe: Seule / en équipe de 4
outils: [Python, SQL]
statut: termine # termine | en-cours (station dessinée « en construction »)

# Images : dépose-les dans ce dossier, puis :
# couverture: ./couverture.jpg
# couvertureAlt: Description de l'image
# galerie:
#   - src: ./photo-1.jpg
#     legende: Légende
#   - src: ./photo-2.jpg

# Liens (PDF dans public/fichiers/)
liens: []
#  - label: Voir la démo
#    url: https://...
#  - label: Lire le rapport (PDF)
#    url: /fichiers/mon-rapport.pdf

# github: ton-nom/ton-depot
brouillon: false # true = caché sur le site publié
---

Écris ici en Markdown. Sections suggérées :

## Le problème

## Ma démarche

## Résultat

Pour une image dans le texte, écris `![Description](./mon-image.png)` (avec le fichier dans ce dossier).
