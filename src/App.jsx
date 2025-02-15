import React, { useContext, useEffect } from 'react';
import { GameProvider, GameContext } from './context/GameContext';
import Deck from './components/Deck';
import Player from './components/Player';
import Table from './components/Table';
import GameControls from './components/GameControls';
import './App.css'

const App = () => {
  const { players, tableCards, distributeCards, playCard, truco, increaseBet } = useContext(GameContext);
  
  
  useEffect(() => {
    distributeCards()
  }, [])

  return (
    <div className="app">
      <Deck />
      <Table cards={tableCards} />
      <Player cards={players.cards} playCard={players} />
      <GameControls onTruco={truco} onIncreaseBet={increaseBet} />
    </div>
  );
};

export default App;
