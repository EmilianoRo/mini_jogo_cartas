const Card = ({suit, value, onClick}) => {
    return (
        <div 
            className={`card ${suit}`} 
            onClick={onClick}
            data-suit={suit}
            data-value={value}
            >
            {value}
        </div>
    )
}

export default Card;