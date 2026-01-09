//////////////////////// Code fourni (ne pas moidifier) ////////////////////////

// Définir la taille du tableau de notes au hasard entre 15 et 30 éléments
let taille_minimum = 7;
let taille_maximum = 10;
let taille = Math.floor(Math.random() * (taille_maximum - taille_minimum + 1)) + taille_minimum;

// Déclarer le tableau pour stocker les notes
let notes = [];
// Définir la note maximale (pas besoin de définir la note minimale car elle est 0 par défaut)
let note_maximum = 20;

// Itérer autant de fois qu'on a de notes aléatoires à générer
for (let i = 0; i < taille; i++) {
    // Générer une note aléatoire entre 0 et note_maximum (inclus)
    let note = Math.floor(Math.random() * (note_maximum + 1));
    // Ajouter la note générée au tableau
    notes.push(note);
}

///////////////////////////////////////////////////////////////////////////////
let tableau = []
for (let i = 0; i < taille; i++) {
    tableau.push(notes[i]);
}

console.log("La taille du tableau généré est:", notes.length);
let valeur_min = Infinity;
console.log()
for (let i = 0; i < notes.length; i++) {
    if (notes[i] < valeur_min) {
        valeur_min = notes[i];
    }
}

console.log("La valeur minimale est:", valeur_min);

let valeur_max = -Infinity;
for (let i = 0; i < notes.length; i++) {
    if (notes[i] > valeur_max) {
        valeur_max = notes[i];
    }
}

console.log("La valeur maximale est:", valeur_max);

console.log("Les valeurs du tableau sont :");
console.log(notes);

// On initialise l'indice à 0 (la première position)
let indice_min = 0;
let valeur_minimale = notes[0]; // On commence par comparer avec la première note

for (let i = 1; i < notes.length; i++) {
    if (notes[i] < valeur_minimale) {
        valeur_minimale = notes[i]; // On met à jour la plus petite valeur
        indice_min = i;        // On mémorise l'indice où on l'a trouvée
    }
}

console.log("La plus petite valeur est " + valeur_min + " et elle se trouve à l'indice " + indice_min);

let indice_max = 0;
let valeur_maximale = notes[0]; // On commence par comparer avec la première note

for (let i = 1; i < notes.length; i++) {
    if (notes[i] > valeur_maximale) {
        valeur_maximale = notes[i]; // On met à jour la plus grande valeur
        indice_max = i;        // On mémorise l'indice où on l'a trouvée
    }
}

console.log("La plus grande valeur est " + valeur_maximale + " et elle se trouve à l'indice " + indice_max);

let mid;
mid = notes[indice_min];
notes[indice_min] = notes[0];
notes[0] = mid;

console.log(notes);

for (let i = 0; i < notes.length - 1; i++) {

    let indice_min_restant = i;


    for (let j = i + 1; j < notes.length; j++) {
        if (notes[j] < notes[indice_min_restant]) {
            indice_min_restant = j;
        }
    }

    let mid = notes[i];
    notes[i] = notes[indice_min_restant];
    notes[indice_min_restant] = mid;


    console.log(`Étape ${i + 1} : on a placé ${notes[i]} à l'indice ${i}`);
}

console.log("---------------------------------------");
console.log("Tableau entièrement trié :");
console.log(tableau);
console.log(notes);
