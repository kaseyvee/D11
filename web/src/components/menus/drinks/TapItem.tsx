interface IProps {
  drinkItem: {
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
  }
}

const TapItem: React.FC<IProps> = ({ drinkItem }) => {
  return (
    <li className={`tap-item ${drinkItem.soldOut && `sold-out`}`}>
      <div className="tap-item_main">
        <div className="tap-item_main_words">
          <span className="tap-item_main_words_brewery">{drinkItem.brewery}</span>
          <span> {drinkItem.name}</span>
          <span className="tap-item_main_words_alcohol-content"> {drinkItem.alcoholContent}%</span>
        </div>

        <div className="tap-item_main_price">
          <span>{drinkItem.priceByGlass}/{drinkItem.priceByPitcher}</span>
        </div>
      </div>
    </li>
  )
}

export default TapItem;