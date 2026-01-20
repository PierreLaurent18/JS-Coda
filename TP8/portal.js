const skins = ["1.png", "2.png", "3.png", "4.png", "5.png", "6.png", "7.png", "8.png", "9.png", 
    "10.png", "11.png", "12.png", "13.png", "14.png", "15.png", "16.png", "17.png", "18.png", 
    "19.png", "20.png", "21.png", "22.png", "23.png", "24.png", "25.png", "26.png", "27.png", 
    "28.png", "29.png"]; 

const container = document.getElementById('sprite');
const hiddenInput = document.getElementById('selected-sprite');
const pseudoInput = document.getElementById("pseudo");
const urlInput = document.getElementById("url");
const form = document.querySelector('form');

// Génération des skins
skins.forEach(skinName => {
    const canvas = document.createElement('canvas');
    canvas.width = 50;
    canvas.height = 50;
    canvas.classList.add('sprite-item');

    const ctx = canvas.getContext('2d');
    const img = new Image();
    
    img.src = `assets/${skinName}`;
    img.onload = () => {
        ctx.drawImage(img, 0, 128, 64, 64, 0, 0, canvas.width, canvas.height);
    };

    canvas.addEventListener('click', () => {
        document.querySelectorAll('.sprite-item').forEach(c => c.classList.remove('selected'));
        canvas.classList.add('selected');
        hiddenInput.value = `${skinName}`;
    });

    container.appendChild(canvas);
});

// Sélectionner le premier skin par défaut
if (container.firstChild) {
    container.firstChild.classList.add('selected');
}

// Charger les données sauvegardées (si elles existent)
window.addEventListener('DOMContentLoaded', () => {
    const savedPseudo = localStorage.getItem('pseudo');
    const savedUrl = localStorage.getItem('backend');
    const savedSkin = localStorage.getItem('sprite');

    if (savedPseudo) pseudoInput.value = savedPseudo;
    if (savedUrl) urlInput.value = savedUrl;
    if (savedSkin) {
        hiddenInput.value = savedSkin;
        // Sélectionner visuellement le bon skin
        const canvases = document.querySelectorAll('.sprite-item');
        canvases.forEach((canvas, index) => {
            if (skins[index] === savedSkin) {
                canvas.classList.add('selected');
            }
        });
    }
});

// Sauvegarder lors de la soumission du formulaire
form.addEventListener('submit', (e) => {
    e.preventDefault(); // Empêche le rechargement de la page

    const pseudo = pseudoInput.value.trim();
    const backend = urlInput.value.trim();
    const sprite = hiddenInput.value;

    // Sauvegarde dans localStorage
    localStorage.setItem("pseudo", pseudo);
    localStorage.setItem("backend", backend);
    localStorage.setItem("sprite", `assets/${sprite}`);

    console.log('Données sauvegardées :');
    console.log('Pseudo:', pseudo);
    console.log('Backend:', backend);
    console.log('Sprite:', sprite);

    window.location.href="game.html";
   
});

const pseudo = localStorage.getItem('pseudo')
const skin = localStorage.getItem('sprite') 
const backend = localStorage.getItem('backend')     

console.log('Pseudo récupéré:', pseudo);
console.log('Skin récupéré:', skin);
console.log('Backend récupéré:', backend);


