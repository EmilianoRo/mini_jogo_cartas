import Card from './Card'
import { GameContext } from '../context/GameContext';
import { useContext } from 'react';


const Player = () => {
    const {players, playCard} = useContext(GameContext);
    
    return (
        <div className='player'>
            {players.map((player) => (
               player.cards.map((card, index) => (
                <div key={index} style={{color: card.suit === '♥' || card.suit === '♦' ? 'red' : '#000'}}>
                    <Card  
                    suit={card.suit} 
                    value={card.value} 
                    onClick={() => playCard(player.id, card)}
                    />
                </div>
               ))
            ))}
        </div>
    )
}

export default Player;
