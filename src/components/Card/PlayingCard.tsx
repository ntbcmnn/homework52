import React from 'react';

interface ICard {
    rank: string;
    suit: string;
}

const symbols: { [key: string]: string } = {
    diams: '♦',
    hearts: '♥',
    clubs: '♣',
    spades: '♠'
};

const PlayingCard: React.FC<ICard> = ({ rank, suit }) => {
    return (
        <span className={`card rank-${rank.toLowerCase()} ${suit}`}>
            <span className="rank">{rank}</span>
            <span className="suit">{symbols[suit]}</span>
        </span>
    );
};

export default PlayingCard;