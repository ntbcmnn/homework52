import {useState} from 'react';
import './App.css';
import PlayingCard from './components/Card/PlayingCard.tsx';
import Card from './lib/Card.ts';
import CardDeck from './lib/CardDeck.ts';
import PokerHand from './lib/PokerHand.ts';

const App = () => {
    const [cards, setCards] = useState<{ rank: string, suit: string }[]>([]);
    const [deck, setDeck] = useState<CardDeck>(new CardDeck());
    const hand: PokerHand = new PokerHand(cards);

    const dealCards = (): void => {
        if (deck.cards.length === 0) {
            dealNewDeck();
        } else {
            const drawCards: Card[] = deck.getCards(5);
            setCards(drawCards);
        }
    };

    const dealNewDeck = (): void => {
        const newDeck: CardDeck = new CardDeck();
        setDeck(newDeck);

        const drawCards: Card[] = deck.getCards(5);
        setCards(drawCards);
    };

    return (
        <>
            {
                cards.length === 0 ? (
                    <div className="container">
                        <button type={'button'} onClick={dealCards}>Deal cards</button>
                    </div>
                ) : (
                    <div className="container">
                        <button type={'button'} onClick={dealCards}>Deal cards again</button>
                        <div className="playingCards faceImages">
                            {cards.map((card, index) => (
                                <PlayingCard key={index} rank={card.rank} suit={card.suit}/>
                            ))}
                        </div>
                        <h4>
                            {hand.getOutcome()}
                        </h4>
                    </div>
                )
            }
        </>
    );
};

export default App;