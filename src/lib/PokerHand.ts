import Card from './Card.ts';

class PokerHand {
    constructor(public hand: Card[]) {
        this.hand = hand;
    }

    getOutcome(): string {
        let combination: string;

        const ranks: string[] = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        const suits: string[] = ['diams', 'hearts', 'clubs', 'spades'];

        const ranksCount: number[] = new Array(ranks.length).fill(0);
        const suitsCount: number[] = new Array(suits.length).fill(0);

        const flush: boolean = suitsCount.some(count => count === 5);
        let threeOfAKind: boolean = false;
        let pair: number = 0;

        this.hand.map(card => {
            const rankIndex: number = ranks.indexOf(card.rank);
            const suitIndex: number = suits.indexOf(card.suit);

            ranksCount[rankIndex]++;
            suitsCount[suitIndex]++;
        });

        for (const count of ranksCount) {
            if (count === 3) {
                threeOfAKind = true;
            } else if (count === 2) {
                pair++;
            }
        }

        if (flush) {
            combination = 'Flush';
        } else if (threeOfAKind) {
            combination = 'Three of a Kind';
        } else if (pair === 2) {
            combination = 'Two Pairs';
        } else if (pair === 1) {
            combination = 'One Pair';
        } else combination = 'High card';

        return combination;
    }
}

export default PokerHand;