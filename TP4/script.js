function genererEleves() {
    // Taille aléatoire du tableau d'élèves
    let tailleMin = 7;
    let tailleMax = 10;
    let taille = Math.floor(Math.random() * (tailleMax - tailleMin + 1)) + tailleMin;

    // Tableau des prénoms possibles
    let prenoms = [
    "Lucas", "Emma", "Noah", "Léa", "Hugo", "Chloé", "Louis", "Inès",
    "Gabriel", "Jade", "Arthur", "Mila", "Raphaël", "Lina", "Ethan", "Zoé",
    "Nathan", "Manon", "Tom", "Sarah", "Enzo", "Camille", "Maxime", "Anaïs",
    "Paul", "Clara", "Adam", "Eva", "Jules", "Maëlys", "Sacha", "Romane",
    "Timéo", "Louna", "Maël", "Ambre", "Théo", "Océane", "Yanis", "Iris",
    "Nolan", "Elsa", "Mathis", "Pauline", "Aaron", "Lou", "Samuel", "Amandine",
    "Eliott", "Solène"];

    // Variable pour l'index du prénom sélectionné au hasard
    let indexPrenom;

    // Tableau des élèves
    let eleves = [];

    // Génération des élèves
    for (let i = 0; i < taille; i++) {
        // Sélection aléatoire d'un prénom par index
        indexPrenom = Math.floor(Math.random() * prenoms.length);
        let eleve = {
            // Accès au prénom via l'index aléatoire
            prenom: prenoms[indexPrenom],
            noteFrancais: Math.floor(Math.random() * 21),
            noteMaths: Math.floor(Math.random() * 21),
            noteHistoire: Math.floor(Math.random() * 21)
        };

        // Calcul de la moyenne
        eleve.moyenne = (eleve.noteFrancais + eleve.noteMaths + eleve.noteHistoire) / 3;

        // Ajout de l'élève au tableau
        eleves.push(eleve);
    }

    // Retour du tableau d'élèves
    return eleves;
}

function afficherEleves(tableau) {
    // Affichage des élèves
    console.log("Liste des élèves :");
    for (let i = 0; i < tableau.length; i++) {
        console.log(tableau[i].prenom + " : " + tableau[i].moyenne.toFixed(1));
    }
}

function trouverMoyenneMin(tableau, indexDepart) {
    // Initialisation de l'indice du minimum avec l'index de départ
    let indiceMin = indexDepart;
    
    // Parcours du tableau à partir de indexDepart
    for (let i = indexDepart + 1; i < tableau.length; i++) {
        // Si la moyenne de l'élève actuel est inférieure au minimum trouvé
        if (tableau[i].moyenne < tableau[indiceMin].moyenne) {
            // On met à jour l'indice du minimum
            indiceMin = i;
        }
    }
    
    // Retour de l'indice de l'élève avec la moyenne minimale
    return indiceMin;
}

function afficherDonnees(tableau) {
    // Affichage du nombre d'élèves
    console.log("Nombre d'élèves : " + tableau.length);
    
    // Recherche de l'indice de l'élève avec la moyenne minimale
    let indexMin = trouverMoyenneMin(tableau, 0);
    console.log("Moyenne la plus basse : " + tableau[indexMin].moyenne.toFixed(1));
    
    // Recherche manuelle de la moyenne maximale
    let indexMax = 0;
    for (let i = 1; i < tableau.length; i++) {
        if (tableau[i].moyenne > tableau[indexMax].moyenne) {
            indexMax = i;
        }
    }
    console.log("Moyenne la plus haute : " + tableau[indexMax].moyenne.toFixed(1));
}

function swap(tableau, indexA, indexB) {
    // Sauvegarde de l'élément à l'index A
    let temp = tableau[indexA];
    
    // Échange des éléments
    tableau[indexA] = tableau[indexB];
    tableau[indexB] = temp;
}

function triParSelection(tableau) {
    // Parcours du tableau
    for (let i = 0; i < tableau.length - 1; i++) {
        // Recherche de l'indice de la moyenne minimale à partir de i
        let indexMin = trouverMoyenneMin(tableau, i);
        
        // Échange de l'élément à l'indice i avec l'élément ayant la moyenne minimale
        swap(tableau, i, indexMin);
    }
}

let Eleves = genererEleves();

afficherEleves(Eleves);

console.log("");

afficherDonnees(Eleves);

console.log("");

console.log("Liste non triée :");
afficherEleves(Eleves);

console.log("");

triParSelection(Eleves);

console.log("Liste triée :");
afficherEleves(Eleves);