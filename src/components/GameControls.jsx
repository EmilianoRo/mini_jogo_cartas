const GameControls = ({onTruco, onIncreaseBet}) => {
    return (
        <div className="game-controls">
          <button onClick={onTruco}>Truco</button>
          <button onClick={onIncreaseBet}>Aumentar Aposta</button>
        </div>
    )
}

export default GameControls;