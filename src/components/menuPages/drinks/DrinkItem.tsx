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
  menuType: string;
}

const DrinkItem: React.FC<IProps> = ({ drinkItem, menuType }) => {
  const componentMapping: any = {
    cocktail: "glass",
    "non-alcoholic": "glass",
    shooter: "glass",
    "beer on tap": "tap",
    "bottled beer": "bottle",
    soju: "bottle",
    sake: "bottle",
  };

  const componentType = componentMapping[drinkItem.type];

  const renderSharedContent = () => {
    if (componentType === "tap") {
      return (
        <>
          <span className="tap-item_main_words_brewery">
            {drinkItem.brewery}
          </span>
          <span> {drinkItem.name}</span>
          <span className="tap-item_main_words_alcohol-content">
            {" "}
            {drinkItem.alcoholContent}%
          </span>
        </>
      );
    } else if (componentType === "glass") {
      return (
        <>
          <header>{drinkItem.name}</header>
          {drinkItem.alcoholContent && (
            <span>{drinkItem.alcoholContent}oz</span>
          )}
          <p>{drinkItem.description}</p>
        </>
      );
    } else if (componentType === "bottle") {
      return (
        <>
          <span className="bottle-item_main_words_name">{drinkItem.name}</span>
          <span> {drinkItem.size}ml</span>
          {drinkItem.alcoholContent && (
            <span className="bottle-item_main_words_alcohol-content">
              {" "}
              {drinkItem.alcoholContent}%
            </span>
          )}
        </>
      );
    }
    return null;
  };

  const renderPrice = () => {
    if (menuType === "happyHour") {
      return <span>{drinkItem.happyHourPrice}</span>;
    } else {
      if (componentType === "tap") {
        return (
          <span>
            {drinkItem.priceByGlass}/{drinkItem.priceByPitcher}
          </span>
        );
      } else if (componentType === "glass" || componentType === "bottle") {
        return <span>{drinkItem.priceByGlass}</span>;
      }
    }
    return null;
  };

  return (
    <li className={`menu-item ${drinkItem.soldOut && "sold-out"}`}>
      <div className="menu-item_main">
        <div className="menu-item_main_words">{renderSharedContent()}</div>
        <div className="menu-item_main_price">{renderPrice()}</div>
      </div>
    </li>
  );
};

export default DrinkItem;
