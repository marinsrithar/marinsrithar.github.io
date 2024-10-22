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
    // Hide the initial sections using Bootstrap class
    document.getElementById('player-section').classList.add('d-none');
    document.getElementById('start-game-section').classList.add('d-none');
    
    // Show the game controls section by removing d-none class
    document.getElementById('game-controls').classList.remove('d-none');

    updateCurrentPlayerName(); // Display whose turn it is

    // Enable the Truth and Dare buttons
    document.getElementById('truth-btn').disabled = false;
    document.getElementById('dare-btn').disabled = false;

    // Disable Next Player and Regenerate buttons initially
    document.getElementById('next-player-btn').disabled = true;
    document.getElementById('regenerate-btn').disabled = true;
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

        // Display the prompt in the UI
        document.getElementById('prompt').textContent = promptText;

        // Disable the Truth and Dare buttons once a prompt is displayed
        document.getElementById('truth-btn').disabled = true;
        document.getElementById('dare-btn').disabled = true;

        // Enable the Regenerate and Next Player buttons
        document.getElementById('regenerate-btn').disabled = false;
        document.getElementById('next-player-btn').disabled = false;
    } else {
        console.error("Prompt type or category is missing.");
    }
}


function nextPlayer() {
    // Move to the next player
    currentPlayerIndex = (currentPlayerIndex + 1) % players.length;

    // Reset the prompt area
    document.getElementById('prompt').textContent = '';

    // Enable the Truth and Dare buttons for the next player
    document.getElementById('truth-btn').disabled = false;
    document.getElementById('dare-btn').disabled = false;

    // Disable Next Player and Regenerate buttons until a prompt is shown
    document.getElementById('next-player-btn').disabled = true;
    document.getElementById('regenerate-btn').disabled = true;

    // Update the display to show whose turn it is
    updateCurrentPlayerName();
}
