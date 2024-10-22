let players = [];
let currentPlayerIndex = 0;
let currentGameMode = 'Picolo';

// Add player to the queue
document.getElementById('add-player-btn').addEventListener('click', function() {
    const playerName = document.getElementById('player-name').value;
    if (playerName && !players.includes(playerName)) {
        players.push(playerName);
        updatePlayerList();
        document.getElementById('player-name').value = '';
    }
});

// Remove player from the queue
document.getElementById('remove-player-btn').addEventListener('click', function() {
    const playerName = document.getElementById('player-name').value;
    players = players.filter(player => player !== playerName);
    updatePlayerList();
    document.getElementById('player-name').value = '';
});

// Update the player list display
function updatePlayerList() {
    const playerList = document.getElementById('player-list');
    playerList.innerHTML = '';
    players.forEach(player => {
        const li = document.createElement('li');
        li.classList.add('list-group-item');
        li.textContent = player;
        playerList.appendChild(li);
    });
}

// Start the game
document.getElementById('start-game-btn').addEventListener('click', function() {
    if (players.length > 0) {
        // Hide the lobby and show the game screen
        document.getElementById('lobby').classList.add('d-none');
        document.getElementById('game').classList.remove('d-none');

        // Set the selected game mode
        currentGameMode = document.getElementById('game-mode').value;
        displayNextPrompt();
    }
});

// Display the next prompt
function displayNextPrompt() {
    const promptList = prompts[currentGameMode];
    const randomPrompt = promptList[Math.floor(Math.random() * promptList.length)];
    const finalPrompt = replacePlayerNames(randomPrompt);
    document.getElementById('current-prompt').textContent = finalPrompt;
}

// Replace $p in the prompt with random player names
function replacePlayerNames(prompt) {
    const playerNamesInPrompt = prompt.match(/\$p/g);
    if (playerNamesInPrompt) {
        let usedPlayers = [];
        playerNamesInPrompt.forEach(() => {
            let randomPlayer;
            do {
                randomPlayer = players[Math.floor(Math.random() * players.length)];
            } while (usedPlayers.includes(randomPlayer));
            usedPlayers.push(randomPlayer);
            prompt = prompt.replace('$p', randomPlayer);
        });
    }
    return prompt;
}

// Move to the next player on button click
document.getElementById('next-turn-btn').addEventListener('click', function() {
    currentPlayerIndex = (currentPlayerIndex + 1) % players.length;
    displayNextPrompt();
});
