// Load prompts from prompts.js
let prompts = promptsData.prompts; // Load prompts from the prompts.js file

// Select elements from the DOM
const playerForm = document.getElementById('player-form');
const playerInputs = document.getElementById('player-inputs');
const addPlayerButton = document.getElementById('add-player');
const removePlayerButton = document.getElementById('remove-player');
const promptBox = document.getElementById('prompt-box');
const promptText = document.getElementById('prompt-text');
const nextPromptButton = document.getElementById('next-prompt');
const addPromptBox = document.getElementById('add-prompt-box');
const promptInputs = document.getElementById('prompt-inputs');
const addNewPromptButton = document.getElementById('add-new-prompt');
const removePromptButton = document.getElementById('remove-prompt');
const notificationSound = document.getElementById('notification-sound');

// Initialize array for players
let players = [];

// Event listener for adding player input field
addPlayerButton.addEventListener('click', function() {
    const newInput = document.createElement('input');
    newInput.type = 'text';
    newInput.className = 'player-name';
    newInput.placeholder = 'Enter player name';
    newInput.required = true;
    playerInputs.appendChild(newInput);
    newInput.focus();
});

// Event listener for removing player input field
removePlayerButton.addEventListener('click', function() {
    const playerInputsCollection = playerInputs.getElementsByClassName('player-name');
    if (playerInputsCollection.length > 1) {
        playerInputsCollection[playerInputsCollection.length - 1].remove();
    }
});

// Event listener for submitting player names and starting the game
playerForm.addEventListener('submit', function(event) {
    event.preventDefault();
    players = Array.from(document.querySelectorAll('.player-name')).map(input => input.value.trim());
    if (players.length < 2) {
        alert('Please enter at least 2 players.');
        return;
    }
    // Hide player form and buttons, show prompts
    playerForm.classList.add('hidden');
    promptBox.classList.remove('hidden');
    addPromptBox.classList.add('hidden'); // Hide prompt add/remove box after game starts
    promptInputs.classList.add('hidden'); // Hide new prompt text box after game starts
    showNextPrompt();
});

// Event listener for showing the next prompt
nextPromptButton.addEventListener('click', showNextPrompt);

// Event listener for adding a new prompt
addNewPromptButton.addEventListener('click', function() {
    const newInput = document.createElement('input');
    newInput.type = 'text';
    newInput.className = 'prompt-input';
    newInput.placeholder = 'Enter new prompt';
    promptInputs.appendChild(newInput);
    newInput.focus();
});

// Event listener for removing the last added prompt
removePromptButton.addEventListener('click', function() {
    const promptInputsCollection = promptInputs.getElementsByClassName('prompt-input');
    if (promptInputsCollection.length > 1) {
        promptInputsCollection[promptInputsCollection.length - 1].remove();
    }
});

// Function to show the next prompt
function showNextPrompt() {
    if (prompts.length === 0) {
        promptText.textContent = 'No prompts available.';
        return;
    }

    let randomPrompt = prompts[Math.floor(Math.random() * prompts.length)];
    const uniquePlayers = getUniquePlayers(2);

    randomPrompt = randomPrompt.replace('$p', uniquePlayers[0]);

    if (randomPrompt.includes('$p')) {
        randomPrompt = randomPrompt.replace('$p', uniquePlayers[1]);
    }

    promptText.textContent = randomPrompt;
    notificationSound.play();
}

// Function to get unique random players
function getUniquePlayers(count) {
    const shuffledPlayers = players.sort(() => 0.5 - Math.random());
    return shuffledPlayers.slice(0, count);
}