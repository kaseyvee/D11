interface IProps {
  drinkItem: {
    soldOut?: boolean;
    type: string;
    name: string;
    description?: string;
    priceByGlass: number;
    happyHourPrice?: number;
    takeOut: boolean;
    happyHour: boolean;
    alcoholContent?: number;
  }
}

const GlassItem: React.FC<IProps> = ({ drinkItem }) => {
  return (
    <li className={`menu-item ${drinkItem.soldOut && `sold-out`}`}>
      <div className="menu-item_main">
        <div className="menu-item_main_words">
          <h3>{drinkItem.name}</h3>
          <p>{drinkItem.description}</p>
        </div>

        <div className="menu-item_main_price">
          <span>{drinkItem.priceByGlass}</span>
        </div>
      </div>
    </li>
  )
}

export default GlassItem;