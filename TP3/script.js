// 1. Liste de prénoms pour le tirage aléatoire
const listePrenoms = ["Léo", "Maya", "Lucas", "Amine", "Sarah", "Hugo", "Lina", "Thomas"];

// 2. Définition de la taille du tableau (entre 7 et 10)
const tailleTableau = Math.floor(Math.random() * (10 - 7 + 1)) + 7;

const classe = [];

// 3. Remplissage du tableau
for (let i = 0; i < tailleTableau; i++) {
    // Sélection d'un prénom aléatoire
    const prenomAleatoire = listePrenoms[Math.floor(Math.random() * listePrenoms.length)];
    
    // Génération de notes entre 0 et 20
    const noteFrancais = Math.floor(Math.random() * 21);
    const noteMaths = Math.floor(Math.random() * 21);
    const noteHistoire = Math.floor(Math.random() * 21);
    
    // Calcul de la moyenne
    const moyenne = (noteFrancais + noteMaths + noteHistoire) / 3;

    // Création de l'objet élève
    const eleve = {
        prenom: prenomAleatoire,
        noteFrancais: noteFrancais,
        noteMaths: noteMaths,
        noteHistoire: noteHistoire,
        moyenne: moyenne.toFixed(2) // On arrondit à 2 décimales pour l'affichage
    };
 
    // Ajout au tableau
    classe.push(eleve);
}

// 4. Affichage des élèves

console.log("--- Résultats ---");
classe.forEach(eleve => {
    console.log(`${eleve.prenom} - ${eleve.moyenne}`); // Affichage du prénom et de la moyenne
});
console.log("Nombre total d'élèves : " + classe.length); 

// 2. Calculer la plus petite et la plus grande moyenne
// On extrait d'abord toutes les moyennes dans un tableau de nombres
const toutesLesMoyennes = classe.map(eleve => parseFloat(eleve.moyenne));

const moyenneMin = Math.min(...toutesLesMoyennes); // Utilisation de l'opérateur spread pour passer les valeurs
const moyenneMax = Math.max(...toutesLesMoyennes);

// Affichage des résultats
console.log("La plus petite moyenne est : " + moyenneMin); 
console.log("La plus grande moyenne est : " + moyenneMax);

let indiceMin = 0; 

// On parcourt le tableau pour trouver l'indice du minimum
for (let i = 1; i < classe.length; i++) {
    if (parseFloat(classe[i].moyenne) < parseFloat(classe[indiceMin].moyenne)) {
        indiceMin = i;
    }
}

console.log("--- Élève ayant la plus petite moyenne ---");
console.log(`Prénom : ${classe[indiceMin].prenom}`);
console.log(`Moyenne : ${classe[indiceMin].moyenne}`);
console.log(`Indice dans le tableau : ${indiceMin}`);


// --- Partie 4 : Échange de valeurs ---

console.log("--- Échange de l'élève à l'indice 0 avec l'élève à l'indice " + indiceMin + " ---");

// Technique de l'échange (Swap) avec une variable temporaire
let temp = classe[0];
classe[0] = classe[indiceMin];
classe[indiceMin] = temp;

// Affichage du tableau après l'échange
console.log("Tableau après échange :");
classe.forEach((eleve, index) => {
    console.log(`Indice ${index} : ${eleve.prenom} - ${eleve.moyenne}`);
});

console.log("--- Début du tri par sélection ---");

// Boucle externe : parcourt chaque position du tableau
for (let i = 0; i < classe.length - 1; i++) {
    
    let indiceMin = i; // On suppose que le minimum est à la position actuelle i

    // Boucle interne : cherche l'élève avec la plus petite moyenne dans le reste du tableau
    for (let j = i + 1; j < classe.length; j++) {
        // Comparaison des moyennes (parseFloat est nécessaire car .toFixed(2) a créé un string)
        if (parseFloat(classe[j].moyenne) < parseFloat(classe[indiceMin].moyenne)) {
            indiceMin = j; // Nouveau minimum trouvé
        }
    }

    // Échange des objets à l'indice i et l'indiceMin
    if (indiceMin !== i) {
        let temp = classe[i];
        classe[i] = classe[indiceMin];
        classe[indiceMin] = temp;
    }
}

// --- AFFICHAGE DU TABLEAU TRIÉ ---
console.log("Tableau trié par moyenne croissante :");
classe.forEach((eleve, index) => {
    console.log(`${index} : ${eleve.prenom} - ${eleve.moyenne}`);
});

// --- AFFICHAGE AVANT TRI ---
console.log("--- Tableau AVANT tri ---");
classe.forEach(eleve => {
    console.log(`${eleve.prenom} - ${eleve.moyenne}`); // Affichage du prénom et de la moyenne
});

// Initialisation des compteurs
let nbComparaisons = 0;
let nbEchanges = 0;

// --- TRI PAR SÉLECTION ---
for (let i = 0; i < classe.length - 1; i++) {
    let indiceMin = i;

    for (let j = i + 1; j < classe.length; j++) {
        nbComparaisons++; // On compte chaque comparaison effectuée
        if (parseFloat(classe[j].moyenne) < parseFloat(classe[indiceMin].moyenne)) {
            indiceMin = j;
        }
    }

    // Échange des objets si nécessaire
    if (indiceMin !== i) {
        let temp = classe[i];
        classe[i] = classe[indiceMin];
        classe[indiceMin] = temp;
        nbEchanges++; // On compte l'échange
    }
}

// --- AFFICHAGE APRÈS TRI ---
console.log("\n--- Tableau TRIÉ par ordre croissant ---");
classe.forEach(eleve => {
    console.log(`${eleve.prenom} - ${eleve.moyenne}`);
});

// --- AFFICHAGE DES STATISTIQUES ---
console.log("\n--- Statistiques du tri ---");
console.log(`Nombre total d'élèves : ${classe.length}`);
console.log(`Nombre total de comparaisons : ${nbComparaisons}`);
console.log(`Nombre total d'échanges : ${nbEchanges}`);

// --- TRI PAR SÉLECTION (Par note de Maths - Croissant) ---

let nbComparaisonsMaths = 0;
let nbEchangesMaths = 0;

console.log("\n--- Tri du tableau par notes de MATHS ---");

for (let i = 0; i < classe.length - 1; i++) {
    let indiceMin = i;

    for (let j = i + 1; j < classe.length; j++) {
        nbComparaisonsMaths++;
        
        // On compare ici uniquement la propriété noteMaths
        if (classe[j].noteMaths < classe[indiceMin].noteMaths) {
            indiceMin = j;
        }
    }

    if (indiceMin !== i) {
        let temp = classe[i];
        classe[i] = classe[indiceMin];
        classe[indiceMin] = temp;
        nbEchangesMaths++;
    }
}

// --- AFFICHAGE DU RÉSULTAT ---
console.log("Tableau trié par notes de MATHS (croissant) :");
classe.forEach(eleve => {
    console.log(`${eleve.prenom} - Note Maths : ${eleve.noteMaths} (Moyenne générale : ${eleve.moyenne})`);
});

console.log(`Statistiques : ${nbComparaisonsMaths} comparaisons et ${nbEchangesMaths} échanges.`);