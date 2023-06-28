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
  };
}

const BottleItem: React.FC<IProps> = ({ drinkItem }) => {
  return (
    <li className={`bottle-item ${drinkItem.soldOut && `sold-out`}`}>
      <div className="bottle-item_main">
        <div className="bottle-item_main_words">
          <span className="bottle-item_main_words_name">{drinkItem.name}</span>
          <span> {drinkItem.size}ml</span>
          {drinkItem.alcoholContent && (
            <span className="bottle-item_main_words_alcohol-content">
              {" "}
              {drinkItem.alcoholContent}%
            </span>
          )}
        </div>

        <div className="bottle-item_main_price">
          <span>{drinkItem.priceByGlass}</span>
        </div>
      </div>
    </li>
  );
};

export default BottleItem;
