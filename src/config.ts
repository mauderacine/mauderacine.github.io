// ─────────────────────────────────────────────────────────────
//  TES INFOS — c'est le seul fichier à modifier pour le texte
//  général du site. Les projets sont dans src/content/projets/
//  et les photos dans src/photos/
// ─────────────────────────────────────────────────────────────

export const moi = {
    nom: 'MAUDE RACINE',
    // Grande phrase d'accueil sous ton nom
    accroche:
        'De l’ingénierie logicielle à l’IA, en passant par l’analyse de données, je transforme l’information en décisions et les idées en outils concrets.',
    ville: 'Montréal',
    photo: '/fichiers/maude.jpg', // dépose ta photo dans public/fichiers/maude.jpg

    // Petites colonnes d'infos sous la phrase d'accueil
    infos: [
        { titre: 'Formation', texte: 'B. Ing. génie logiciel, Polytechnique Montréal' },
        { titre: 'En ce moment', texte: 'Maîtrise en science des données, HEC Montréal, et stage chez Hydro-Québec' },
        { titre: 'Disponibilité', texte: 'Temps partiel cet hiver, temps plein dès mai 2027' },
    ],

    // Liens — laisse '' pour cacher un lien
    courriel: 'maude.racine6@gmail.com',
    linkedin: 'https://www.linkedin.com/in/maude-racine',
    github: 'maudeeracinee', // affiche tes dépôts automatiquement
    cv: '', // ex. '/fichiers/cv-maude-racine.pdf' (mets le PDF dans public/fichiers/)

    // Dépôts GitHub à NE PAS afficher dans la section « Dépôts GitHub »
    githubCacher: [] as string[], // ex. ['vieux-tp']

    // Texte de la section À propos (un paragraphe par élément)
    apropos: [
        "J'ai fait mon baccalauréat en génie logiciel à Polytechnique Montréal, avec une session d'échange à POSTECH, en Corée du Sud. Aujourd'hui, je poursuis une maîtrise en science des données et analytique d'affaires à HEC Montréal, tout en continuant mon stage chez Hydro-Québec.",
        "Ce qui relie mes projets : comprendre un système, que ce soit une application multijoueur, un réseau de transport ou un jeu de données, puis le rendre plus simple pour les gens qui l'utilisent. J'aime travailler en équipe, faire le pont entre les besoins et la technique, et présenter les résultats clairement.",
    ],

    // Hors des cours
    horsCours: [{ titre: 'Photographie', detail: 'Voir mes photos', lien: '/photographie/' }] as { titre: string; detail: string; lien?: string }[],

    // Distinctions
    distinctions: [
        { titre: '1re place, compétition Kaggle', detail: 'MTH3302, Polytechnique, automne 2024' },
        { titre: 'Bourses académiques Desjardins', detail: '2022 et 2024' },
        { titre: 'A* en cybersécurité', detail: 'Polytechnique Montréal' },
    ],
};

// ─────────────────────────────────────────────────────────────
//  PHOTOGRAPHIE
//  Dépose tes photos dans src/photos/ — le nom du fichier devient
//  le lieu affiché au survol. Ex. « Kyoto, Japon.jpg »
// ─────────────────────────────────────────────────────────────
export const photographie = {
    intro: 'Quelques lieux qui m’ont marquée, en voyage ou tout près de chez moi.',
    // Nombre de photos montrées sur la page d'accueil (le reste sur /photographie)
    surAccueil: 6,
};

export const horsCours = {
    intro: 'J’ai pratiqué plusieurs sports de façon compétitive, jusqu’au niveau provincial en softball avec l’équipe du Québec, et j’ai aussi joué au volleyball et au flag au secondaire et au cégep. Aujourd’hui, je reste active en combinant natation, course, vélo et ski, tout en gardant cette énergie d’équipe qui m’a toujours poussée à bouger, à m’entraîner et à aimer le mouvement au quotidien. Mon esprit d’équipe vient exactement de là : j’aime jouer, courir, m’investir et rester active chaque jour, avec la même envie de partager, de dépasser mes limites et de vivre bien en mouvement.',
    image: '/fichiers/sports.jpeg',
    sports: [],
};

// ─────────────────────────────────────────────────────────────
//  LES LIGNES DU PLAN
//  Chaque projet appartient à une ligne (champ « ligne » dans son index.md).
//  « couleur » : 'var(--encre)' = noir (ou blanc en mode nuit).
//                Pour ajouter de la couleur plus tard : un code hex, ex. '#7C6CF2'.
//  « trace » : le tracé sur le plan : 'haut', 'centre', 'bas' ou 'extra'.
// ─────────────────────────────────────────────────────────────
export const lignes = {
    logiciel: {
        nom: 'Logiciel',
        couleur: 'var(--encre)',
        description: 'Applications, outils internes, projets intégrateurs',
        trace: 'haut',
    },
    donnees: {
        nom: 'Données',
        couleur: 'var(--encre)',
        description: 'Modélisation statistique et apprentissage automatique',
        trace: 'centre',
    },
    ville: {
        nom: 'Ville',
        couleur: 'var(--encre)',
        description: 'Génie, architecture, transport et aménagement',
        trace: 'bas',
    },
} as const;

export type CleLigne = keyof typeof lignes;

// ─────────────────────────────────────────────────────────────
//  PARCOURS (du plus récent au plus ancien)
//  type : 'etudes', 'stage' ou 'echange'
// ─────────────────────────────────────────────────────────────
export const parcours = [
    {
        type: 'etudes',
        periode: '2026 – aujourd’hui',
        titre: "Maîtrise en science des données et analytique d'affaires",
        lieu: 'HEC Montréal',
    },
    {
        type: 'stage',
        periode: 'Mai 2026 – aujourd’hui',
        titre: 'Stagiaire en gestion informatique',
        lieu: 'Hydro-Québec',
        detail: "Pilotage d'un coffre à outils numérique, du recueil des besoins à la livraison (C#/.NET), en coordonnant deux équipes. J'y coordonne aussi l'intégration de l'IA dans les processus de l'équipe. Temps plein l'été, temps partiel pendant la session.",
    },
    {
        type: 'etudes',
        periode: '2022 – 2026',
        titre: 'Baccalauréat en génie logiciel',
        lieu: 'Polytechnique Montréal',
        detail: 'Projets intégrateurs en développement web, mobile et en transport (écoquartier Louvain Est).',
    },
    {
        type: 'echange',
        periode: 'Janvier – juin 2025',
        titre: "Session d'échange",
        lieu: 'POSTECH, Corée du Sud',
        detail: 'Adaptabilité, autonomie et collaboration interculturelle.',
    },
    {
        type: 'stage',
        periode: 'Mai – août 2024',
        titre: 'Stagiaire en développement logiciel, Certification',
        lieu: 'Airbus Canada',
        detail: "Amélioration des outils de l'équipe avec Google Apps Script et Qlik Sense, en mode Agile.",
    },
    {
        type: 'etudes',
        periode: '2019 – 2022',
        titre: 'DEC en sciences de la nature',
        lieu: 'Collège Montmorency',
    },
];

// ─────────────────────────────────────────────────────────────
//  BOÎTE À OUTILS
// ─────────────────────────────────────────────────────────────
export const outils = [
    {
        groupe: 'IA et apprentissage automatique',
        items: [
            'Apprentissage automatique',
            'Apprentissage statistique',
            'Modèles prédictifs (régression, forêts aléatoires)',
            'IA générative (Claude, GPT)',
            'Évaluation de modèles',
            'Développement assisté par IA',
        ],
    },
    { groupe: 'Données', items: ['Python', 'R', 'SQL', 'Julia', 'Qlik Sense', 'Excel', 'QGIS'] },
    {
        groupe: 'Développement',
        items: ['TypeScript', 'JavaScript', 'C#/.NET', 'Java', 'C/C++', 'Dart', 'Apps Script', 'HTML/CSS'],
    },
    {
        groupe: 'Web, mobile et APIs',
        items: ['APIs REST', 'WebSocket', 'Angular', 'Flutter', 'NestJS', 'Node.js', 'MongoDB'],
    },
    { groupe: 'Infonuagique et déploiement', items: ['Docker', 'AWS EC2', 'Git/GitLab', 'CI/CD'] },
    {
        groupe: 'Méthodes',
        items: ['Agile', 'Architecture logicielle', 'UML', 'Documentation technique', 'Cybersécurité', 'Vulgarisation technique'],
    },
    { groupe: 'Langues', items: ['Français', 'Anglais'] },
];
