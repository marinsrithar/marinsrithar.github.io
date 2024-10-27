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

// Update the player list display
function updatePlayerList() {
    const playerList = document.getElementById('player-list');
    playerList.innerHTML = ''; // Clear the current list
    players.forEach((player, index) => {
        const li = document.createElement('li');
        li.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');
        li.textContent = player;

        // Create the remove button for each player
        const removeButton = document.createElement('button');
        removeButton.classList.add('btn', 'btn-danger', 'btn-sm');
        removeButton.textContent = 'Remove';
        removeButton.addEventListener('click', function() {
            players.splice(index, 1); // Remove the player at the current index
            if (currentPlayerIndex >= players.length) {
                currentPlayerIndex = 0; // Reset index if it exceeds the players length
            }
            updatePlayerList(); // Update the displayed list
        });

        li.appendChild(removeButton); // Add the button to the list item
        playerList.appendChild(li); // Add the list item to the player list
    });
}

// Start the game
document.getElementById('start-game-btn').addEventListener('click', function() {
    console.log("Start Game button clicked."); // Debug statement
    console.log("Number of players: ", players.length); // Log number of players

    if (players.length > 0) {
        // Hide the lobby and show the game screen
        document.getElementById('lobby').classList.add('d-none');
        document.getElementById('game').classList.remove('d-none');

        // Set the selected game mode
        currentGameMode = document.getElementById('game-mode').value;
        displayNextPrompt();
    } else {
        alert('Please add at least one player to start the game.'); // Alert if no players
    }
});

// Function to display next prompt
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
    if (players.length > 0) { // Ensure there are players
        currentPlayerIndex = (currentPlayerIndex + 1) % players.length;
        displayNextPrompt();
    }
});
