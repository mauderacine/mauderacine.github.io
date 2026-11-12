---
titre: BrainBurst Quiz!
station: BrainBurst Quiz
resume: Une plateforme de quiz multijoueur en direct. L'organisateur lance une partie, les joueurs entrent un code et répondent en temps réel.
ligne: logiciel
date: 2024-04-20
periode: Hiver 2024
contexte: LOG2990, projet intégrateur en développement web, Polytechnique Montréal
equipe: Équipe de 6
outils: [Angular, TypeScript, Express, API REST, GitLab CI, AWS]
statut: termine
couverture: ./menu.jpg
couvertureAlt: Menu principal de BrainBurst Quiz, sur un fond dégradé pastel
galerie:
  - src: ./creation.jpg
    legende: Choisir un quiz et créer une partie
  - src: ./salle-attente.jpg
    legende: Salle d'attente avec clavardage
  - src: ./question.jpg
    legende: Vue joueur pendant une question
  - src: ./resultats-organisateur.jpg
    legende: Vue organisateur, réponses en direct
  - src: ./administration.jpg
    legende: Administration des quiz
github: maudeeracinee/Projet-integrateur-Developpement-web
---

Premier gros projet d'équipe du baccalauréat : une application web complète, du client au serveur, construite en sprints avec intégration continue.

## Ce que fait l'application

- **Créer** des quiz et une banque de questions, avec historique des parties.
- **Lancer** une partie : un code d'accès est généré, les joueurs rejoignent la salle d'attente.
- **Jouer** en direct : questions minutées, points, bonus de rapidité et classement.
- **Animer** la partie côté organisateur : statistiques des réponses en temps réel, passage à la question suivante, clavardage.

## Côté technique

Client Angular, serveur Express en TypeScript, API REST documentée, tests unitaires et pipeline GitLab CI. Le code respecte des normes strictes (pas de `any`, pas de duplication) et chaque fonctionnalité passe par une branche `feature/` et une revue.
