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
}

const DrinkSection: React.FC<IProps> = ({ drinkItems }) => {

  function capitalizeFirstLetter(word: string) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }
  const drinkType = capitalizeFirstLetter(drinkItems[0].type)

  const drinkList = drinkItems.map(drinkItem => {
    if (drinkItem.type === "cocktail" || drinkItem.type === "non-alcoholic") {
      return <GlassItem key={drinkItem.name} drinkItem={drinkItem} />
    }
    if (drinkItem.type === "beer on tap") {
      return <TapItem key={drinkItem.name} drinkItem={drinkItem} />
    }
  })

  return (
    <section className="menu-section" id={drinkType.toLowerCase()}>
      <div className="wrapper">
        <header className="menu-section_header">
          <h3>{drinkType}</h3>
        </header>
        <ul className="menu-section_menu-items">
          {drinkList}
        </ul>
      </div>
    </section>
  )
}

export default DrinkSection;