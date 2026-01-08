//exo 1
const name = "B1-A"; // nom de la classe 
console.log(name); // afficher le nom de la classe
let eleves = 28;
console.log(eleves);
let classe = true; 
console.log(classe); 
console.log("=====================================================");
//exo 2
let eleve1 = { // on définit un objet eleve1 
    prenom: "Theo",
    math: 13, 
    français: 1,
};
console.log("=====================================================");
//exo 3
let eleve2 = {
    prenom: "Lilian",
    math: 15,
    français: 14,
};

let eleve3 = {
    prenom: "Pierre",
    math: 19,
    français: 19,
};

let eleve = [eleve1, eleve2, eleve3];
for (let i = 0; i < eleve.length; i++) {
    console.log(eleve[i].prenom);
};
console.log("=====================================================");
//exo 4
for (let i = 0; i < eleve.length; i++) {
    let moyenne = (eleve[i].math + eleve[i].français) / 2; // calcule la moyenne
    console.log(eleve[i].prenom, moyenne); // affiche le prénom et la moyenne de chaque élève
    if (moyenne >= 10) {
        console.log(eleve[i].prenom + " est admis"); // affiche un commentaire est admis si la moyenne est supérieure a 10
    } else {
        console.log(eleve[i].prenom + " n'est pas admis"); // affiche un commentaire est admis si la moyenne est inférieure a 10
    }
}
console.log("=====================================================");

//exo 5
for (let i = 0; i < eleve.length; i++) {
    moyenne = (eleve[i].math + eleve[i].français) / 2; // faire la moyenne des notes de français et de maths 
    console.log(eleve[i].prenom, moyenne); // retourner la valeur de la moyenne 
//exo 6
    if (10 <= moyenne && moyenne < 12) { // on affiche un commentaire en fonctions des notes des élèves
        console.log("Passable");
    }
    else if (12 <= moyenne && moyenne < 14) {
        console.log("Assez bien");
    }
    else if (14 <= moyenne && moyenne < 16) {
        console.log("Bien");
    }
    else if (16 <= moyenne && moyenne <= 20) {
        console.log("Très bien");
    }
    else if (moyenne < 10) {
        console.log("Insuffisant");
    }
}

//exo 7

let admis = 0;
let i = 0;

while (i < eleve.length) { // on prend l'ensemble des élèves
    let moyenne = (eleve[i].math + eleve[i].français) / 2;

    if  (moyenne >= 10) { // si on a une moyenne supérieure a 10 on ajoute 1 a nombre d'élèves admis
        admis++;
    }

    i++; 
}
console.log("Nombre d'élèves admis :", admis);