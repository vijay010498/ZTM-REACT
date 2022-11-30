import './card-list.style.css';
import Card from "../card/card.component";

const CardList = ({monsters}) => {
    console.log('Redner-cars-list')
    return (
        <div className='card-list'>
            {monsters.map((monster) => {
                return <Card monster={monster}/>
            })}
        </div>
    )
}

export default CardList;
