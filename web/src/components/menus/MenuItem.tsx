interface IProps {
  menuItem: {
    category: {
      english: string;
      vietnamese: string;
    };
    name: string;
    subHeading?: string;
    description: string;
    happyHour: boolean;
    happyHourPrice?: number;
    price: number;
    takeOut: boolean;
    dietRestrictions: {
      dietaryType: String;
      image: string;
    }[];
    addOns?: {
      name?: string;
      description?: string;
      price: number;
    }[];
  };
}

const MenuItem: React.FC<IProps> = ({ menuItem }) => {
  const itemVariations = menuItem.addOns?.map((variation) => {
    return (
      <div key={variation.name} className="menu-item_variation">
        <div className="menu-item_variation_words">
          <span>+</span>
          {variation.name && <h3>{variation.name}</h3>}
          {variation.description && <p>{variation.description}</p>}
        </div>

        <div className="menu-item_variation_price">
          <span>{variation.price}</span>
        </div>
      </div>
    );
  });

  const diets = menuItem.dietRestrictions?.map(diet => {
    return (
      <img src={diet.image} alt={`${diet.dietaryType}`} />
    )
  })

  return (
    <li className="menu-item">
      <div className="menu-item_main">
        <div className="menu-item_main_words">
          <h3>{menuItem.name}</h3>
          {menuItem.subHeading && <span>{menuItem.subHeading}</span>}
          {menuItem.dietRestrictions && <div className="menu-item_main_words_diets">
            {diets}
          </div>}
          <p>{menuItem.description}</p>
        </div>

        <div className="menu-item_main_price">
          <span>{menuItem.price}</span>
        </div>
      </div>
      {itemVariations}
    </li>
  );
};

export default MenuItem;
