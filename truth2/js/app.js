// Global variables
let selectedCategory = null;
let players = [];
let currentPromptType = null;
let currentPlayerIndex = 0;

// Event listeners
document.getElementById('category-menu').addEventListener('change', (event) => {
    selectedCategory = event.target.value;
    checkStartGameButton();
});

document.getElementById('add-player').addEventListener('click', () => {
    const playerName = document.getElementById('player-name').value;
    if (playerName) {
        players.push(playerName);
        updatePlayerList();
        document.getElementById('player-name').value = '';
        checkStartGameButton();
    }
});

document.getElementById('start-game').addEventListener('click', () => {
    startGame();
});

document.getElementById('truth-btn').addEventListener('click', () => {
    currentPromptType = 'truth';
    displayPrompt();
});

document.getElementById('dare-btn').addEventListener('click', () => {
    currentPromptType = 'dare';
    displayPrompt();
});

document.getElementById('regenerate-btn').addEventListener('click', () => {
    displayPrompt();
});

document.getElementById('next-player-btn').addEventListener('click', () => {
    nextPlayer();
});

// Functions
function checkStartGameButton() {
    const startButton = document.getElementById('start-game');
    if (players.length >= 2 && selectedCategory) {
        startButton.disabled = false;
    } else {
        startButton.disabled = true;
    }
}

function updatePlayerList() {
    const playerListElement = document.getElementById('player-list');
    playerListElement.innerHTML = '';
    players.forEach((player, index) => {
        const li = document.createElement('li');
        li.textContent = player;
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.onclick = () => {
            removePlayer(index);
        };
        li.appendChild(removeButton);
        playerListElement.appendChild(li);
    });
}

function removePlayer(index) {
    players.splice(index, 1);
    updatePlayerList();
    checkStartGameButton();
}

function startGame() {
    document.getElementById('player-section').style.display = 'none';
    document.getElementById('start-game-section').style.display = 'none';
    document.getElementById('game-controls').style.display = 'block';
    updateCurrentPlayerName();
    document.getElementById('truth-btn').disabled = false;
    document.getElementById('dare-btn').disabled = false;
    document.getElementById('next-player-btn').disabled = true; // Next Player button disabled initially
    document.getElementById('regenerate-btn').disabled = true; // Regenerate button disabled initially
}

function updateCurrentPlayerName() {
    const currentPlayerElement = document.getElementById('current-player-name');
    currentPlayerElement.textContent = `${players[currentPlayerIndex]}'s Turn`;
}

function getRandomPrompt(type) {
    const prompts = truthOrDareData.categories[selectedCategory][type];
    return prompts[Math.floor(Math.random() * prompts.length)];
}

function displayPrompt() {
    if (currentPromptType && selectedCategory) {
        const promptText = getRandomPrompt(currentPromptType);
        console.log(`Displaying prompt for ${currentPromptType}: ${promptText}`); // Log prompt text
        document.getElementById('prompt').textContent = `${promptText}`; //${players[currentPlayerIndex]}, your ${currentPromptType} is: ${promptText}`
        document.getElementById('truth-btn').disabled = true;
        document.getElementById('dare-btn').disabled = true;
        document.getElementById('regenerate-btn').disabled = false;
        document.getElementById('next-player-btn').disabled = false;
    } else {
        console.error("Prompt type or category is missing.");
    }
}


function nextPlayer() {
    currentPlayerIndex = (currentPlayerIndex + 1) % players.length;
    document.getElementById('prompt').textContent = '';
    document.getElementById('truth-btn').disabled = false;
    document.getElementById('dare-btn').disabled = false;
    document.getElementById('regenerate-btn').disabled = true;
    document.getElementById('next-player-btn').disabled = true;
    updateCurrentPlayerName();
}
