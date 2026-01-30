const serverInput = document.getElementById('serverAddress');
serverInput.value = "http://13.38.137.68:8000";

const playerSelect = document.getElementById('playerSelect');
const rankingTable = document.getElementById('rankingTableBody');
const statsDisplay = document.getElementById('playerStatsDisplay');

let currentSelectedPlayer = "";

async function loadData() {
    try {
        const response = await fetch(`${serverInput.value}/api/listPlayers`);
        const players = await response.json();

        if (!players || players.length === 0) return;

        // 1. Mise à jour de la liste déroulante (seulement si elle est vide)
        if (playerSelect.options.length <= 1) {
            players.forEach(p => {
                const opt = document.createElement('option');
                opt.value = p.name; 
                opt.textContent = p.name;
                playerSelect.appendChild(opt);
            });
        }

        // 2. Mise à jour du classement
        const sorted = [...players].sort((a, b) => (b.totalKills || 0) - (a.totalKills || 0));
        rankingTable.innerHTML = sorted.map((p, index) => `
            <tr>
                <td>${index + 1}</td>
                <td>${p.name}</td>
                <td>${p.totalKills || 0}</td>
                <td>${p.totalDeaths || 0}</td>
                <td>${(p.kdRatio || 0).toFixed(2)}</td>
            </tr>
        `).join('');

        // 3. Mise à jour des STATS INDIVIDUELLES
        // On force la recherche sur le nom stocké dans currentSelectedPlayer
        if (currentSelectedPlayer !== "") {
            const playerStats = players.find(p => p.name === currentSelectedPlayer);
            
            if (playerStats) {
                statsDisplay.innerHTML = `
                    <div class="stats-item"><b>Joueur :</b> ${playerStats.name}</div>
                    <div class="stats-item"><b>Nombre de Kills :</b> ${playerStats.totalKills || 0}</div>
                    <div class="stats-item"><b>Nombre de Morts :</b> ${playerStats.totalDeaths || 0}</div>
                    <div class="stats-item"><b>Ratio K/D :</b> ${(playerStats.kdRatio || 0).toFixed(2)}</div>
                    <div class="stats-item"><b>Parties jouées :</b> ${playerStats.gamesPlayed || 0}</div>
                `;
            }
        }
    } catch (error) {
        console.error("Erreur de rafraîchissement :", error);
    }
}

// Événement de sélection
playerSelect.addEventListener('change', (e) => {
    currentSelectedPlayer = e.target.value;
    // On lance la mise à jour immédiatement pour éviter d'attendre les 5 secondes
    loadData(); 
});

// Auto-refresh toutes les 5 secondes
setInterval(loadData, 5000);

// Chargement initial
loadData();