const playerForm = document.getElementById('player-form');
const playerNamesInput = document.getElementById('player-names');
const promptBox = document.getElementById('prompt-box');
const promptText = document.getElementById('prompt-text');
const nextPromptButton = document.getElementById('next-prompt');
const addPromptBox = document.getElementById('add-prompt-box');
const newPromptInput = document.getElementById('new-prompt');
const addPromptButton = document.getElementById('add-prompt');
const notificationSound = document.getElementById('notification-sound');

let players = [];
let prompts = [
    "Take a drink",
    "$p takes a drink",
    "The person to your left takes a drink",
    "Tell a joke. If no one laughs, take a drink",
    "Anyone wearing red takes a drink",
    "Choose two people to take a drink",
    "Everyone with glasses takes a drink",
    "The tallest person drinks",
    "The shortest person drinks",
    "$p and $p have to drink",
    "Make a rule"
];

playerForm.addEventListener('submit', function(event) {
    event.preventDefault();
    players = playerNamesInput.value.split(',').map(name => name.trim());
    playerForm.classList.add('hidden');
    promptBox.classList.remove('hidden');
    showNextPrompt();
});

nextPromptButton.addEventListener('click', showNextPrompt);

addPromptButton.addEventListener('click', function() {
    const newPrompt = newPromptInput.value.trim();
    if (newPrompt) {
        prompts.push(newPrompt);
        newPromptInput.value = '';
        alert('Prompt added!');
    }
});

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

function getUniquePlayers(count) {
    const shuffledPlayers = players.sort(() => 0.5 - Math.random());
    return shuffledPlayers.slice(0, count);
}
