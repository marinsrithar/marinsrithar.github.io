document.addEventListener("DOMContentLoaded", () => {
    const playerForm = document.getElementById('player-form');
    const playerInputs = document.getElementById('player-inputs');
    const addPlayerButton = document.getElementById('add-player');
    const removePlayerButton = document.getElementById('remove-player');
    const gameSection = document.getElementById('game-section');
    const currentPlayerElement = document.getElementById('current-player');
    const truthButton = document.getElementById('truth-button');
    const dareButton = document.getElementById('dare-button');
    const promptElement = document.getElementById('prompt');
    const nextPlayerButton = document.getElementById('next-player');

    let players = [];
    let currentPlayerIndex = 0;

    const truths = [
        "What is your biggest fear?",
        "What is your most embarrassing moment?",
        "Have you ever lied to a friend?",
        "What is your biggest regret?",
    ];

    const dares = [
        "Do 10 push-ups.",
        "Sing a song.",
        "Dance for 1 minute.",
        "Do an impression of someone until another player can guess who you are."
    ];

    addPlayerButton.addEventListener('click', () => {
        const input = document.createElement('input');
        input.type = 'text';
        input.className = 'player-name';
        input.placeholder = 'Enter player name';
        playerInputs.appendChild(input);
    });

    removePlayerButton.addEventListener('click', () => {
        const inputs = document.querySelectorAll('.player-name');
        if (inputs.length > 1) {
            playerInputs.removeChild(inputs[inputs.length - 1]);
        }
    });

    playerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const inputs = document.querySelectorAll('.player-name');
        players = Array.from(inputs).map(input => input.value).filter(name => name.trim() !== '');
        if (players.length > 0) {
            playerForm.classList.add('hidden');
            gameSection.classList.remove('hidden');
            currentPlayerIndex = 0;
            setCurrentPlayer();
        }
    });

    truthButton.addEventListener('click', () => {
        promptElement.textContent = truths[Math.floor(Math.random() * truths.length)];
        showNextPlayerButton();
    });

    dareButton.addEventListener('click', () => {
        promptElement.textContent = dares[Math.floor(Math.random() * dares.length)];
        showNextPlayerButton();
    });

    nextPlayerButton.addEventListener('click', () => {
        currentPlayerIndex = (currentPlayerIndex + 1) % players.length;
        setCurrentPlayer();
        hideNextPlayerButton();
    });

    function setCurrentPlayer() {
        currentPlayerElement.textContent = `It's ${players[currentPlayerIndex]}'s turn!`;
        promptElement.textContent = '';
    }

    function showNextPlayerButton() {
        truthButton.classList.add('hidden');
        dareButton.classList.add('hidden');
        nextPlayerButton.classList.remove('hidden');
    }

    function hideNextPlayerButton() {
        truthButton.classList.remove('hidden');
        dareButton.classList.remove('hidden');
        nextPlayerButton.classList.add('hidden');
    }
});