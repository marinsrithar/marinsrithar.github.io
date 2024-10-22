$(document).ready(function () {
    const cardDeck = [
        { name: "2 of Hearts", rule: "You" },
        { name: "3 of Hearts", rule: "Me" },
        { name: "4 of Hearts", rule: "Floor" },
        { name: "5 of Hearts", rule: "Guys" },
        { name: "6 of Hearts", rule: "Chicks" },
        { name: "7 of Hearts", rule: "Heaven" },
        { name: "8 of Hearts", rule: "Mate" },
        { name: "9 of Hearts", rule: "Bust a Rhyme" },
        { name: "10 of Hearts", rule: "Categories" },
        { name: "Jack of Hearts", rule: "Never Have I Ever" },
        { name: "Queen of Hearts", rule: "Question Master" },
        { name: "King of Hearts", rule: "Make a Rule" },
        { name: "Ace of Hearts", rule: "Waterfall" },
        
        { name: "2 of Diamonds", rule: "You" },
        { name: "3 of Diamonds", rule: "Me" },
        { name: "4 of Diamonds", rule: "Floor" },
        { name: "5 of Diamonds", rule: "Guys" },
        { name: "6 of Diamonds", rule: "Chicks" },
        { name: "7 of Diamonds", rule: "Heaven" },
        { name: "8 of Diamonds", rule: "Mate" },
        { name: "9 of Diamonds", rule: "Bust a Rhyme" },
        { name: "10 of Diamonds", rule: "Categories" },
        { name: "Jack of Diamonds", rule: "Never Have I Ever" },
        { name: "Queen of Diamonds", rule: "Question Master" },
        { name: "King of Diamonds", rule: "Make a Rule" },
        { name: "Ace of Diamonds", rule: "Waterfall" },

        { name: "2 of Clubs", rule: "You" },
        { name: "3 of Clubs", rule: "Me" },
        { name: "4 of Clubs", rule: "Floor" },
        { name: "5 of Clubs", rule: "Guys" },
        { name: "6 of Clubs", rule: "Chicks" },
        { name: "7 of Clubs", rule: "Heaven" },
        { name: "8 of Clubs", rule: "Mate" },
        { name: "9 of Clubs", rule: "Bust a Rhyme" },
        { name: "10 of Clubs", rule: "Categories" },
        { name: "Jack of Clubs", rule: "Never Have I Ever" },
        { name: "Queen of Clubs", rule: "Question Master" },
        { name: "King of Clubs", rule: "Make a Rule" },
        { name: "Ace of Clubs", rule: "Waterfall" },

        { name: "2 of Spades", rule: "You" },
        { name: "3 of Spades", rule: "Me" },
        { name: "4 of Spades", rule: "Floor" },
        { name: "5 of Spades", rule: "Guys" },
        { name: "6 of Spades", rule: "Chicks" },
        { name: "7 of Spades", rule: "Heaven" },
        { name: "8 of Spades", rule: "Mate" },
        { name: "9 of Spades", rule: "Bust a Rhyme" },
        { name: "10 of Spades", rule: "Categories" },
        { name: "Jack of Spades", rule: "Never Have I Ever" },
        { name: "Queen of Spades", rule: "Question Master" },
        { name: "King of Spades", rule: "Make a Rule" },
        { name: "Ace of Spades", rule: "Waterfall" },
    ];

    let drawnCards = [];
    let players = [];
    let currentPlayerIndex = 0;
    let cardDrawn = false; // Track if a card has been drawn

    function updatePlayerList() {
        $('#playerList').empty();
        players.forEach(player => {
            $('#playerList').append(`<li class="list-group-item player-name">${player} <button class="btn btn-danger btn-sm float-right remove-player">Remove</button></li>`);
        });
    }

    function drawCard() {
        if (cardDeck.length === 0) {
            endGame();
            return;
        }
    
        const randomIndex = Math.floor(Math.random() * cardDeck.length);
        const drawnCard = cardDeck.splice(randomIndex, 1)[0]; // Remove card from deck
        drawnCards.push(drawnCard);
    
        $('#cardImage').attr('src', `assets/cards/${drawnCard.name.replace(/ /g, '_').toLowerCase()}.png`);
        $('#cardRule').text(`Rule: ${drawnCard.rule}`);
    
        // Show card display when a card is drawn
        $('#cardDisplay').removeClass('d-none');
    
        // Animate the card drawing
        $('#cardImage').addClass('animate__fadeIn');
        setTimeout(() => {
            $('#cardImage').removeClass('animate__fadeIn');
        }, 1000);
    
        // Update state to indicate that a card has been drawn
        cardDrawn = true;
        $('#drawCard').prop('disabled', true); // Disable the Draw Card button
        $('#nextTurn').prop('disabled', false); // Enable the Next Player button
    }

    function endGame() {
        $('#game').addClass('d-none');
        $('#endGame').removeClass('d-none');
    }

    $('#addPlayer').click(function () {
        const playerName = $('#playerName').val().trim();
        if (playerName && !players.includes(playerName)) {
            players.push(playerName);
            $('#playerName').val('');
            updatePlayerList();
        }
    });

    $(document).on('click', '.remove-player', function () {
        const playerToRemove = $(this).parent().text().trim().slice(0, -6);
        players = players.filter(player => player !== playerToRemove);
        updatePlayerList();
    });

    $('#startGame').click(function () {
        if (players.length === 0) {
            alert("Add players before starting the game!");
            return;
        }
        
        $('#lobby').addClass('d-none');
        $('#game').removeClass('d-none');
        currentPlayerIndex = 0;
        $('#currentTurn').text(`It's ${players[currentPlayerIndex]}'s turn!`);
        drawCard();
    });

    $('#drawCard').click(function () {
        drawCard();
    });

    $('#nextTurn').click(function () {
        if (!cardDrawn) return; // Ensure a card has been drawn before proceeding
        currentPlayerIndex = (currentPlayerIndex + 1) % players.length;
        $('#currentTurn').text(`It's ${players[currentPlayerIndex]}'s turn!`);
        cardDrawn = false; // Reset card drawn state
        $('#drawCard').prop('disabled', false); // Enable the Draw Card button for the next player
        $('#nextTurn').prop('disabled', true); // Disable the Next Player button
        $('#cardImage').attr('src', ''); // Clear the card image
        $('#cardRule').text(''); // Clear the rule text
        $('#cardDisplay').addClass('d-none'); // Hide the card display
    });
    
    $('#restartGame').click(function () {
        location.reload(); // Reload the page to restart the game
    });
});
