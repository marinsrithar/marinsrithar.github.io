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
        "What's the last lie you told?",
        "What's the most trouble you've been in?",
        "What's the most childish thing you still do?",
        "Who is your secret crush?",
        "What would you do if you were the opposite gender for a day?",
        "What's your worst habit?",
        "What's the worst thing you've ever done?",
        "Have you ever cheated on a test?",
        "What's the biggest secret you've kept from your parents?",
        "Have you ever stolen anything?",
        "What's the most disgusting thing you've done?",
        "Who do you have a crush on?",
        "What's your biggest pet peeve?",
        "What's your guilty pleasure?",
        "What's the last thing you searched for on your phone?",
        "What's the last lie you told?",
        "What's the worst date you've been on?",
        "Have you ever broken the law?",
        "What's the most embarrassing thing in your room?",
        "What's a secret you've never told anyone?",
        "What's your biggest insecurity?",
        "What's the most expensive thing you've stolen?",
        "Have you ever been arrested?",
        "What's the meanest thing you've ever said?",
        "What's the most childish thing you still do?",
        "What's the biggest mistake you've ever made?",
        "What's the worst gift you've ever received?",
        "What's your worst habit?",
        "What's the most embarrassing thing you've ever done?",
        "Have you ever cheated in a relationship?",
        "What's the worst thing you've ever said to anyone?",
        "Have you ever peed in a pool?",
        "What's your biggest regret?",
        "What's the scariest thing that's ever happened to you?",
        "What's the worst thing you've ever done?",
        "Have you ever ghosted someone?",
        "What's the craziest thing you've ever done?",
        "What's the most embarrassing thing you've ever worn?",
        "What's the most awkward romantic encounter you've had?",
        "Have you ever been caught in a lie?",
        "What's your most embarrassing moment in public?",
        "What's the last text you sent?",
        "What's the most embarrassing picture of you?",
        "What's your biggest fear?",
        "Have you ever lied to get out of a bad date?",
        "What's the most embarrassing thing in your web browser history?",
        "What's the worst thing you've ever done to someone?",
        "What's your biggest turn-off?",
        "What's the weirdest thing you've ever done in public?",
        "Have you ever been caught cheating on a test?",
        "What's the most childish thing you still do?",
        "What's the worst thing you've ever eaten?",
        "What's the most embarrassing nickname you've had?",
        "What's the most embarrassing song on your playlist?",
        "What's the weirdest thing you've ever eaten?",
        "Have you ever stolen something?",
        "What's the worst thing you've ever done at work?",
        "What's the most embarrassing thing you've done for money?",
        "Have you ever lied on your resume?",
        "What's the most embarrassing thing you've done while drunk?",
        "What's the most awkward date you've been on?",
        "What's the worst thing you've done to a friend?",
        "What's the most embarrassing thing you've done in front of a crush?",
        "What's the most embarrassing story your parents tell about you?",
        "What's the weirdest thing you've ever done in front of a mirror?",
        "What's the most embarrassing thing you've done in school?",
        "What's the weirdest dream you've had?",
        "What's the most embarrassing thing you've done on a date?",
        "What's the worst thing you've ever said to a teacher?",
        "What's the most embarrassing thing you've done while driving?",
        "What's the most awkward thing that's happened to you in public?",
        "What's the most embarrassing thing that's happened to you in a movie theater?",
        "What's the worst thing you've ever done at a party?",
        "What's the most embarrassing thing you've done while on a date?",
        "What's the most embarrassing thing that's happened to you at work?",
        "What's the most awkward text you've sent to the wrong person?",
        "What's the most embarrassing thing you've done in front of your parents?",
        "What's the worst thing you've ever done in a relationship?",
        "What's the most embarrassing thing you've done while on vacation?",
        "What's the most awkward thing you've done in a meeting?",
        "What's the most embarrassing thing that's happened to you at a wedding?",
        "What's the worst thing you've done to your sibling?",
        "What's the most embarrassing thing you've done in a restaurant?",
        "What's the most embarrassing thing you've done while exercising?",
        "What's the most embarrassing thing you've done at a concert?",
        "What's the most awkward moment you've had with a stranger?",
        "What's the most embarrassing thing you've done while shopping?",
        "What's the most embarrassing thing you've done in a public restroom?",
        "What's the most embarrassing thing you've done on social media?",
        "What's the most embarrassing thing you've done in front of a celebrity?",
        "What's the worst thing you've done in a public place?",
    ];

    const dares = [
        "Do 10 push-ups.",
        "Sing a song.",
        "Dance for 1 minute.",
        "Do an impression of someone until another player can guess who you are.",
        "Let another player redo your hairstyle.",
        "Talk in an accent for the next 3 rounds.",
        "Let another player tickle you for 30 seconds.",
        "Read the last text message you received out loud.",
        "Post an embarrassing photo on social media.",
        "Let the person to your left draw on your face with a pen.",
        "Wear socks on your hands for the next 10 minutes.",
        "Speak in a fake accent for the next 3 rounds.",
        "Do your best chicken dance outside on the lawn.",
        "Hold your breath for 10 seconds.",
        "Let another player redo your hairstyle.",
        "Imitate a celebrity of the group’s choosing.",
        "Let someone write a word on your forehead in permanent marker.",
        "Talk in an accent until your next turn.",
        "Let another player redo your hairstyle.",
        "Do your best impression of a baby being born.",
        "Let someone paint your nails however they want.",
        "Imitate a celebrity until someone can guess who you are.",
        "Do 20 sit-ups.",
        "Let the group give you a new hairstyle.",
        "Let someone tickle you for 30 seconds.",
        "Eat a spoonful of mustard.",
        "Do your best chicken dance outside on the lawn.",
        "Do your best impression of a baby being born.",
        "Do 20 jumping jacks.",
        "Speak in an accent until your next turn.",
        "Let another player draw a mustache on your face with a marker.",
        "Eat a raw onion slice.",
        "Do an impression of your favorite celebrity.",
        "Let another player tickle you for 30 seconds.",
        "Talk in an accent for the next 3 rounds.",
        "Post an embarrassing photo on social media.",
        "Let someone draw on your face with a pen.",
        "Wear socks on your hands for the next 10 minutes.",
               "Let another player brush your teeth.",
        "Attempt to juggle 3 items (they don’t have to be balls).",
        "Do your best impression of a stand-up comedy routine.",
        "Do an impression of another player until someone can guess who you are.",
        "Wear a funny hat for the next 3 rounds.",
        "Do your best robot dance outside on the lawn.",
        "Let someone write a word on your forehead in permanent marker.",
        "Let another player tickle you for 30 seconds.",
        "Do 20 sit-ups.",
        "Let the group give you a new hairstyle.",
        "Imitate a celebrity until someone can guess who you are.",
        "Do 20 push-ups.",
        "Hold your breath for 10 seconds.",
        "Do your best impression of a baby being born.",
        "Let someone else tickle you for a minute.",
        "Try to lick your elbow.",
        "Sing the chorus of your favorite song.",
        "Do your best chicken dance outside on the lawn.",
        "Attempt to do a magic trick.",
        "Do your best dance move.",
        "Imitate a celebrity of the group’s choosing.",
        "Let someone tickle you for 30 seconds.",
        "Do your best robot dance.",
        "Wear your shoes on your hands for the next 10 minutes.",
        "Talk in an accent for the next 3 rounds.",
        "Do an impression of your favorite cartoon character.",
        "Eat a spoonful of hot sauce.",
        "Let another player draw a unibrow on you with a marker.",
        "Do your best impression of a stand-up comedian.",
        "Do 20 jumping jacks.",
        "Do your best dance move.",
        "Try to lick your nose.",
        "Eat a spoonful of peanut butter.",
        "Wear socks on your hands for the next 10 minutes.",
        "Do an impression of someone until another player can guess who you are.",
        "Let the person to your right draw on your face with a pen.",
        "Attempt to juggle 3 items (they don’t have to be balls).",
        "Post an embarrassing photo on social media.",
        "Do your best robot dance.",
        "Do 10 push-ups.",
        "Let someone write a word on your forehead in permanent marker.",
        "Do 20 sit-ups.",
        "Do an impression of your favorite movie character.",
        "Do your best chicken dance outside on the lawn.",
        "Do your best dance move.",
        "Let another player draw a mustache on your face with a marker.",
        "Do your best impression of a stand-up comedian.",
        "Let someone tickle you for 30 seconds.",
        "Eat a spoonful of mayonnaise.",
        "Let another player brush your teeth.",
        "Wear socks on your hands for the next 10 minutes.",
        "Do your best robot dance.",
        "Do your best impression of a stand-up comedian.",
        "Imitate a celebrity of the group’s choosing.",
        "Do your best dance move.",
        "Talk in an accent until your next turn.",
        "Do an impression of someone until another player can guess who you are.",
        "Wear a funny hat for the next 3 rounds.",
        "Eat a raw onion slice.",
        "Do your best impression of a stand-up comedy routine.",
        "Do 20 sit-ups.",
        "Attempt to do a magic trick.",
        "Do your best robot dance outside on the lawn.",
        "Imitate a celebrity until someone can guess who you are.",
        "Do your best impression of a baby being born.",
        "Do 20 jumping jacks.",
        "Let someone paint your nails however they want.",
        "Talk in an accent for the next 3 rounds.",
        "Do your best chicken dance outside on the lawn.",
        "Let another player tickle you for 30 seconds.",
        "Sing the chorus of your favorite song.",
        "Wear your shoes on your hands for the next 10 minutes.",
        "Do your best impression of a cartoon character."
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