import { useState } from "react";
import Card from './Card'
import { createDeck } from "../utils/gameLogic";

const Deck = () => {
    const [deck, setDeck] = useState([])

    
    const shuffleDeck = () => {
        //logica para embaralhar o baralho
        for (let i = deck.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [deck[i], deck[j]] = [deck[j], deck[i]];
          }
    };

    return (
        <div className="deck">
            {deck.map((card, index) => (
                <Card key={index} suit={card.suit} value={card.value}/>
            ))}
        </div>
    )
}

export default Deck;