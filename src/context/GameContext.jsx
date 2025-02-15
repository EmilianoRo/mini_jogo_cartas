import { createContext, useState } from "react";
import {shuffleDeck, createDeck} from '../utils/gameLogic'

export const GameContext = createContext();

export const GameProvider = ({children}) => {
    const [players, setPlayers] = useState([
        {id: 1, name: "jogador 1", cards: []},
        {id: 2, name: "jogador 2", cards: []},
        {id: 3, name: "jogador 3", cards: []},
        {id: 4, name: "jogador 4", cards: []}
    ])
    const [tableCards, setTableCard] = useState([])

    const [currentTurn, setCurrentTurn] = useState(0)

    const distributeCards = () => {
        const deck = shuffleDeck(createDeck())
        const newPlayer = players.map((player) => ({
            ...player,
            cards: deck.splice(0, 3)
        }))
        setPlayers(newPlayer)
    }

    const playCard = (id, card) => {
        // logica para jogar uma carta 
        let teste; 
        if(players.filter(v => v.id === id)){
            teste = id
        }
        setTableCard([...tableCards, card])

        const newCard = players.map((player) => ({
            ...player, cards: player.cards.filter(v => v !== card)
        }))
        setPlayers(newCard)
    }

    const truco = () => {
        // logica para trucar
    }

    const increaseBet = () => {
        // logica para aumentar aposta
    }

    return (
        <GameContext.Provider value={{ players, tableCards, distributeCards, currentTurn, playCard, truco, increaseBet }}>
            {children}
        </GameContext.Provider>
    )
}

