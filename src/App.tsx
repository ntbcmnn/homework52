import './App.css';
import PlayingCard from './components/Card/PlayingCard.tsx';
import Card from './lib/Card.ts';
import CardDeck from './lib/CardDeck.ts';
import {useState} from 'react';

const App = () => {
    const [cards, setCards] = useState<{ rank: string, suit: string }[]>([]);

    const dealCards = (): void => {
        const deck: CardDeck = new CardDeck();
        const drawCards: Card[] = deck.getCards(5);
        setCards(drawCards);
    };

    return (
        <>
            {cards.length === 0 ? (
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
                </div>
            )
            }
        </>
    );
};

export default App;