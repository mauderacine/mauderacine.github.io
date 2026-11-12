---
titre: Prédire la consommation de carburant
station: Consommation de carburant
resume: Prédire la consommation (L/100 km) de véhicules récents. Notre modèle hybride a remporté la compétition Kaggle du cours.
ligne: donnees
date: 2024-12-01
periode: Automne 2024
contexte: MTH3302, méthodes probabilistes et statistiques pour l'IA, Polytechnique Montréal
equipe: Équipe de 4
outils: [Julia, Jupyter, Forêt aléatoire, Régression]
statut: termine
github: maudeeracinee/prediction-consommation-carburant
---

> 🏆 **1re place** de la compétition Kaggle du cours, avec une erreur quadratique moyenne (RMSE) de 0,785.

## La démarche

1. **Explorer et nettoyer** les données : types, valeurs manquantes, valeurs aberrantes, colinéarité (VIF).
2. **Créer de nouvelles variables** : volume des cylindres, poids estimé selon le type de véhicule, regroupement des catégories.
3. **Comparer six modèles** sur la RMSE : régression linéaire, Ridge, SVD, polynomiale, arbre de régression et forêt aléatoire.

## Le modèle gagnant

Une approche hybride inspirée des « mélanges d'experts » :

- quand un véhicule du jeu de test ressemble beaucoup à un véhicule déjà vu, on utilise la consommation observée pour ce véhicule ;
- sinon, une **forêt aléatoire** prend le relais pour capter les relations non linéaires.

La prédiction finale combine les deux, avec une pondération.
