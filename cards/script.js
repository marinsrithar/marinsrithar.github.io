document.addEventListener('DOMContentLoaded', () => {
    const deck = document.querySelector('.deck');
    const cardContainer = document.querySelector('.card-container');
    const card = document.querySelector('.card');
    const cardValueDiv = document.querySelector('.card-value');

    const suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
    const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'];

    // Create the stacked deck of cards
    for (let i = 0; i < 52; i++) {
        const cardBack = document.createElement('div');
        cardBack.classList.add('card-back');
        cardBack.style.setProperty('--i', i);
        deck.appendChild(cardBack);
    }

    function drawCard() {
        // Generate a random card
        const suit = suits[Math.floor(Math.random() * suits.length)];
        const value = values[Math.floor(Math.random() * values.length)];
        const cardValue = `${value} of ${suit}`;

        // Show the card and its value
        card.style.display = 'block';
        cardValueDiv.textContent = cardValue;

        // Remove the card from the deck after the animation
        card.addEventListener('animationend', () => {
            card.style.animation = 'none';  // Reset animation
            void card.offsetWidth;  // Trigger reflow
            card.style.animation = '';  // Re-enable animation
        });
    }

    deck.addEventListener('click', drawCard);

    card.addEventListener('click', () => {
        card.style.display = 'none';
        cardValueDiv.textContent = '';
    });
});
