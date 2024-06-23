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
    "Make a rule",
    "$p must sing a song. If they refuse, they take a drink",
    "Anyone who is wearing blue takes a drink",
    "The person to your right takes a drink",
    "$p and $p must arm wrestle. Loser takes a drink",
    "Anyone with blonde hair takes a drink",
    "$p must do a dance move. If they refuse, they take a drink",
    "Everyone with a birthday this month takes a drink",
    "The person with the longest hair drinks",
    "The person with the shortest hair drinks",
    "$p must tell an embarrassing story. If they refuse, they take a drink",
    "Anyone who has traveled outside the country in the past year takes a drink",
    "$p and $p must compliment each other. If they refuse, they take a drink",
    "Anyone who has a tattoo takes a drink",
    "The person with the most siblings takes a drink",
    "The person with the least siblings takes a drink",
    "$p must name three things they love about the person to their left. If they refuse, they take a drink",
    "Anyone with brown eyes takes a drink",
    "The person to your left must do 10 push-ups or take a drink",
    "$p must make a funny face. If no one laughs, they take a drink",
    "Everyone who has a pet takes a drink",
    "The person with the biggest feet drinks",
    "The person with the smallest feet drinks",
    "$p and $p must switch seats",
    "Anyone who has ever broken a bone takes a drink",
    "The person who most recently ate takes a drink",
    "$p must do an impression of someone famous. If no one can guess who it is, they take a drink",
    "Anyone who can speak more than one language takes a drink",
    "The person who is the youngest drinks",
    "The person who is the oldest drinks",
    "$p and $p must play rock, paper, scissors. Loser takes a drink",
    "Anyone who is wearing a watch takes a drink",
    "The person with the most colorful outfit drinks",
    "The person with the least colorful outfit drinks",
    "$p must tell a riddle. If no one can solve it, $p takes a drink",
    "Anyone who has ever dyed their hair takes a drink",
    "The person with the longest nails drinks",
    "The person with the shortest nails drinks",
    "$p and $p must share a fun fact about themselves",
    "Anyone who has a driver's license takes a drink",
    "The person who is sitting closest to the door drinks",
    "The person who is sitting farthest from the door drinks",
    "$p must make a toast. If they refuse, they take a drink",
    "Anyone who is wearing jewelry takes a drink",
    "The person with the highest number on their phone's battery drinks",
    "The person with the lowest number on their phone's battery drinks",
    "$p must say something nice about $p",
    "Anyone who has ever been in a play takes a drink",
    "The person who has the most recent text message drinks",
    "The person who has the oldest text message drinks",
    "$p and $p must swap a piece of clothing or take a drink",
    "$p must share their most embarrassing moment. If they refuse, they take a drink",

"Anyone with curly hair takes a drink",

"The person to your left must do a silly dance or take a drink",

"$p and $p must high-five or both take a drink",

"Anyone who has been to a concert in the past year takes a drink",

"$p must make an animal noise. If they refuse, they take a drink",

"Everyone who has a middle name takes a drink",

"The person with the most colorful socks drinks",

"The person with the plainest socks drinks",

"$p must give $p a compliment",

"Anyone who has a sibling takes a drink",

"The person who most recently took a shower takes a drink",

"The person who most recently brushed their teeth takes a drink",

"$p and $p must share a secret",

"Anyone who likes pineapple on pizza takes a drink",

"$p must tell a funny story",

"The person with the most followers on social media drinks",

"The person with the least followers on social media drinks",

"$p must do their best impression of the person to their right",

"Anyone who has ever been on a plane takes a drink",

"$p and $p must swap seats",

"The person who has the most recent selfie on their phone drinks",

"The person who has the oldest photo on their phone drinks",

"$p must say the alphabet backwards. If they fail, they take a drink",

"Anyone who can play a musical instrument takes a drink",

"The person who is the best dressed drinks",

"The person who is the worst dressed drinks",

"$p must tell a funny joke. If no one laughs, they take a drink",

"Anyone who has ever been in a car accident takes a drink",

"The person who has been awake the longest drinks",

"The person who has been awake the shortest drinks",

"$p must recite a poem. If they refuse, they take a drink",

"Anyone who has ever been in a fight takes a drink",

"The person with the most colorful phone case drinks",

"The person with the plainest phone case drinks",

"$p must say something nice about $p",

"Anyone who has ever had surgery takes a drink",

"The person who most recently cooked a meal drinks",

"The person who most recently ordered takeout drinks",

"$p must do a cartwheel or take a drink",

"Anyone who has ever fainted takes a drink",

"The person who has the most shoes drinks",

"The person who has the fewest shoes drinks",

"$p must share their favorite movie",

"Anyone who has ever cried during a movie takes a drink",

"The person who has the most apps on their phone drinks",

"The person who has the fewest apps on their phone drinks",

"$p must do their best celebrity impression",

"Anyone who has ever been to a wedding takes a drink",

"The person who most recently went to the gym drinks",

"The person who most recently skipped a workout drinks",

"$p must share their biggest fear",

"Anyone who has ever been skydiving takes a drink",

"The person with the most colorful hair drinks",

"The person with the least colorful hair drinks",

"$p must tell a ghost story",

"Anyone who has ever been in love takes a drink",

"The person who most recently said 'I love you' drinks",

"The person who most recently received an 'I love you' drinks",

"$p must do a magic trick or take a drink",

"Anyone who has ever met a celebrity takes a drink",

"The person who has the most unique talent drinks",

"The person who has the most common talent drinks",

"$p must share their dream vacation destination",

"Anyone who has ever been camping takes a drink",

"The person who has the most stamps in their passport drinks",

"The person who has never been out of the country drinks",

"$p must give $p a hug",

"Anyone who has ever run a marathon takes a drink",

"The person who has the most medals or trophies drinks",

"The person who has the least medals or trophies drinks",

"$p must do 10 jumping jacks or take a drink",

"Anyone who has ever won a contest takes a drink",

"The person who most recently lost a game drinks",

"The person who most recently won a game drinks",

"$p must say something they like about themselves",

"Anyone who has ever been on TV takes a drink",

"The person who has the most piercings drinks",

"The person who has the fewest piercings drinks",

"$p must do their best robot dance",

"Anyone who has ever been to a theme park takes a drink",

"The person who most recently bought something online drinks",

"The person who most recently bought something in a store drinks",

"$p must tell a story about their first crush",

"Anyone who has ever been scuba diving takes a drink",

"The person who has the most unusual hobby drinks",

"The person who has the most common hobby drinks",

"$p must sing the chorus of their favorite song",

"Anyone who has ever been to a sports game takes a drink",

"The person who has the most souvenirs drinks",

"The person who has the least souvenirs drinks",

"$p must share their favorite book",

"Anyone who has ever been on a boat takes a drink",

"The person who has the most hats drinks",

"The person who has the fewest hats drinks",

"$p must say something funny about $p",

"Anyone who has ever ridden a horse takes a drink",

"The person who most recently went to a party drinks",

"The person who most recently stayed home drinks",

"$p must act out a scene from a movie"
];

addPlayerButton.addEventListener('click', function() {
    const newInput = document.createElement('input');
    newInput.type = 'text';
    newInput.className = 'player-name';
    newInput.placeholder = 'Enter player name';
    newInput.required = true;
    playerInputs.appendChild(newInput);
    newInput.focus();
});

removePlayerButton.addEventListener('click', function() {
    const playerInputsCollection = playerInputs.getElementsByClassName('player-name');
    if (playerInputsCollection.length > 1) {
        playerInputsCollection[playerInputsCollection.length - 1].remove();
    }
});

playerForm.addEventListener('submit', function(event) {
    event.preventDefault();
    players = Array.from(document.querySelectorAll('.player-name')).map(input => input.value.trim());
    if (players.length < 2) {
        alert('Please enter at least 2 players.');
        return;
    }
    playerForm.classList.add('hidden');
    promptBox.classList.remove('hidden');
    showNextPrompt();
});

nextPromptButton.addEventListener('click', showNextPrompt);

addNewPromptButton.addEventListener('click', function() {
    const newInput = document.createElement('input');
    newInput.type = 'text';
    newInput.className = 'prompt-input';
    newInput.placeholder = 'Enter new prompt';
    promptInputs.appendChild(newInput);
    newInput.focus();
});

removePromptButton.addEventListener('click', function() {
    const promptInputsCollection = promptInputs.getElementsByClassName('prompt-input');
    if (promptInputsCollection.length > 1) {
        promptInputsCollection[promptInputsCollection.length - 1].remove();
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