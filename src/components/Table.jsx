import Card from './Card'
const Table = ({cards}) => {
    return (
        <div className="table">
          {cards.map((card, index) => (
            <Card key={index} suit={card.suit} value={card.value} />
          ))}
        </div>
    )
}

export default Table;