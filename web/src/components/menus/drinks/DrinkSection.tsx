import GlassItem from './GlassItem';

interface IProps {
  drinkItems: {
    soldOut: boolean;
    type: string;
    name: string;
    brewery: string;
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
    return <GlassItem key={drinkItem.name + drinkType} drinkItem={drinkItem} />
  })

  return (
    <section className="menu-section" id={drinkType.toLowerCase()}>
      <div className="wrapper">
        <header className="menu-section_header">
          <h2>{drinkType}</h2>
        </header>
        <ul className="menu-section_menu-items">
          {drinkList}
        </ul>
      </div>
    </section>
  )
}

export default DrinkSection;