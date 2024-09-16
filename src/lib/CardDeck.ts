import Card from './Card.ts';

class CardDeck {
    public cards: Card[];

    constructor() {
        this.cards = [];

        const ranks: string[] = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        const suits: string[] = ['diams', 'hearts', 'clubs', 'spades'];

        ranks.map(rank => {
            suits.map(suit => {
                return this.cards.push(new Card(rank, suit));
            });
        });
    }

    getCard(): Card | null {
        if (this.cards.length === 0) return null;

        const randomCard: number = Math.floor(Math.random() * this.cards.length);

        return this.cards.splice(randomCard, 1)[0];
    }

    getCards(amount: number): Card[] {
        const cardsAmount: Card[] = [];

        for (let i = 0; i < amount; i++) {
            const card: Card | null = this.getCard();

            if (card) {
                cardsAmount.push(card);
            } else break;
        }
        return cardsAmount;
    }
}

export default CardDeck;