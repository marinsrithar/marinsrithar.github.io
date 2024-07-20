let players = [];
let currentPlayerIndex = 0;
let currentQuestion = "";
let currentAnswerer = "";

function addPlayer() {
    const playerName = document.getElementById('player-name').value;
    if (playerName) {
        players.push(playerName);
        document.getElementById('player-name').value = '';
        updatePlayerList();
    }
}

function updatePlayerList() {
    const playerList = document.getElementById('player-list');
    playerList.innerHTML = '';
    players.forEach(player => {
        const li = document.createElement('li');
        li.textContent = player;
        playerList.appendChild(li);
    });
}

function startGame() {
    if (players.length < 2) {
        alert('Need at least 2 players to start the game');
        return;
    }
    document.getElementById('home-screen').classList.remove('active');
    document.getElementById('home-screen').classList.add('hidden');
    document.getElementById('game-screen').classList.remove('hidden');
    document.getElementById('game-screen').classList.add('active');
    showNextTurn();
}

function showNextTurn() {
    const currentPlayer = players[currentPlayerIndex];
    document.getElementById('current-player').textContent = `${currentPlayer}'s turn to ask a question`;
    document.getElementById('question-phase').classList.remove('hidden');
    document.getElementById('answer-phase').classList.add('hidden');
    document.getElementById('reveal-phase').classList.add('hidden');
}

function whisperQuestion() {
    currentQuestion = document.getElementById('question').value;
    currentAnswerer = document.getElementById('answerer').value;
    if (!currentQuestion || !currentAnswerer || !players.includes(currentAnswerer)) {
        alert('Please provide a valid question and answerer');
        return;
    }
    document.getElementById('question-phase').classList.add('hidden');
    document.getElementById('answer-phase').classList.remove('hidden');
    document.getElementById('answerer-name').textContent = `${currentAnswerer}, it's your turn to answer`;
}

function answerQuestion() {
    const answer = document.getElementById('answer').value;
    if (!answer) {
        alert('Please provide an answer');
        return;
    }
    document.getElementById('answer-phase').classList.add('hidden');
    document.getElementById('reveal-phase').classList.remove('hidden');
    document.getElementById('revealed-answer').textContent = `Answer: ${answer}`;
}

function revealQuestion() {
    alert(`The question was: ${currentQuestion}`);
}

function nextTurn() {
    currentPlayerIndex = (currentPlayerIndex + 1) % players.length;
    document.getElementById('question').value = '';
    document.getElementById('answer').value = '';
    showNextTurn();
}
