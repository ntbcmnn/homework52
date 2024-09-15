import './App.css';
import PlayingCard from './components/Card/PlayingCard.tsx';

const ranks: string[] = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
const suits: string[] = ['diams', 'hearts', 'clubs', 'spades'];

const App = () => (
    <>
        <div className="container">
            {
                ranks.map((rank) => (
                    suits.map(suit => {
                        return <PlayingCard key={`${rank}-${suit}`} rank={rank} suit={suit}/>;
                    })
                ))
            }
        </div>
    </>
);

export default App;
