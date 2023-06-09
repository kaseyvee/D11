const MenuItem: React.FC = () => {
  return (
    <li className="menu-item">
      <div className="menu-item_main">
        <div className="menu-item_main_words">
          <h3>Umami Bombs</h3>
          <p>
            marinated skinless cherry tomatoes, house dressing, scallion, onion,
            shiso, served with grilled herb butter bread
          </p>
        </div>

        <div className="menu-item_main_price">
          <span>6</span>
        </div>
      </div>

      <div className="menu-item_variation">
        <div className="menu-item_variation_words">
          <span>+</span>
          <h3>Umami Bombs</h3>
          <p>
            marinated skinless cherry tomatoes, house dressing, scallion, onion,
            shiso, served with grilled herb butter bread
          </p>
        </div>

        <div className="menu-item_variation_price">
          <span>6</span>
        </div>
      </div>
    </li>
  );
};

export default MenuItem;
