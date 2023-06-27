import BottleItem from './BottleItem';
import GlassItem from './GlassItem';
import TapItem from './TapItem';

interface IProps {
  drinkItems: {
    soldOut?: boolean;
    type: string;
    name: string;
    brewery?: string;
    description?: string;
    size?: number;
    priceByGlass: number;
    priceByPitcher?: number;
    happyHourPrice?: number;
    takeOut: boolean;
    happyHour: boolean;
    alcoholContent?: number;
  }[]
  happyHour?: boolean;
}

const DrinkSection: React.FC<IProps> = ({ drinkItems, happyHour }) => {

  const drinkType = drinkItems[0].type

  const drinkList = drinkItems.map(drinkItem => {
    if (drinkItem.type === "cocktail" || drinkItem.type === "non-alcoholic" || drinkItem.type === "shooter") {
      return <GlassItem key={drinkItem.name} happyHour={happyHour} drinkItem={drinkItem} />
    }
    if (drinkItem.type === "beer on tap") {
      return <TapItem key={drinkItem.name} happyHour={happyHour} drinkItem={drinkItem} />
    }
    if (drinkItem.type === "bottled beer" || drinkItem.type === "soju" || drinkItem.type === "sake") {
      return <BottleItem key={drinkItem.name} drinkItem={drinkItem} />
    }
  })

  return (
    <section className="drink-section" id={drinkType.toLowerCase()}>
      <div className="wrapper">
        <header className="drink-section_header">
          <h3>{drinkType}</h3>
          {drinkType === "beer on tap" && <span>16oz</span>}
          {drinkType === "shooter" && <span>round of 4 shots</span>}
        </header>
        <ul className="drink-section_drink-items">
          {drinkList}
        </ul>
      </div>
    </section>
  )
}

export default DrinkSection;