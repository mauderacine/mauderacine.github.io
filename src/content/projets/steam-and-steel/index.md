---
titre: Steam & Steel Battlegrounds
station: Steam & Steel
resume: Un jeu tactique multijoueur sur trois plateformes. Client lourd Angular, client léger Flutter sur tablette, serveur NestJS synchronisé en temps réel.
ligne: logiciel
date: 2025-12-01
periode: Automne 2025
contexte: LOG3900, projet de développement logiciel, Polytechnique Montréal
equipe: Équipe de 6
outils: [Flutter, Dart, Angular, NestJS, MongoDB, WebSocket, AWS EC2, GitLab CI/CD, UML]
statut: termine
couverture: ./accueil.jpg
couvertureAlt: Écran d'accueil de Steam & Steel Battlegrounds, style steampunk
galerie:
  - src: ./choix-carte.jpg
    legende: Choisir une carte et un mode de jeu
  - src: ./avatar.jpg
    legende: Création du personnage
  - src: ./partie.jpg
    legende: Une partie en cours, sur tablette
  - src: ./boutique.jpg
    legende: La boutique, avec la monnaie gagnée en jeu
  - src: ./fin-de-partie.jpg
    legende: Statistiques et récompenses de fin de partie
github: maudeeracinee/Projet-integrateur-Developpement-mobile
---

Le projet final du baccalauréat en génie logiciel : faire évoluer un jeu web en une vraie plateforme multiplateforme, avec comptes, économie de jeu et vie sociale.

## La plateforme

- **Client lourd** (Angular) pour ordinateur.
- **Client léger** (Flutter) pour tablette Android, la grande nouveauté du projet.
- **Serveur** NestJS avec MongoDB, déployé sur AWS EC2.
- **Synchronisation en temps réel** par WebSocket entre tous les clients.

## Ce qu'on peut faire

- Jouer en mode **Classique** (trois duels gagnants) ou **Capture du drapeau**.
- Activer des options : élimination rapide, joueurs qui entrent et sortent en cours de partie, prix d'entrée, amis seulement.
- Réussir des **défis** pour gagner des pièces, monter de niveau et débloquer des items à la boutique.
- **Clavarder** dans un canal général ou propre à chaque partie, ajouter des amis, regarder une partie en **mode observateur**.
- Gérer son profil, avec photo prise par la caméra de la tablette et statistiques personnelles.

## Côté méthode

Spécifications (SRS) et modélisation UML avant le développement, tests unitaires, intégration et déploiement continus avec GitLab.
