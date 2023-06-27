import { useContext } from "react";
import { MenuContext } from "../App";
import DrinkSection from "../components/menus/drinks/DrinkSection";
import MenuNav from "../components/menus/MenuNav";
import MenuSection from "../components/menus/MenuSection";
import PageHeader from "../components/menus/PageHeader";
import getMenuType from "../helpers/getMenuType";

const TakeOutPage: React.FC = () => {
  const { menu }: any = useContext(MenuContext);
  const { drinks }: any = useContext(MenuContext);

  const happyHourMenu = getMenuType(menu, "takeOut");
  const happyHourDrinksMenu = getMenuType(drinks, "takeOut");

  return (
    <main className="take-out-page">
      <PageHeader
        title="TAKE-OUT MENU"
      />
      <MenuNav />
      {Object.keys(happyHourMenu).length > 0 && <div className="menu-page_sections">
        {happyHourMenu.adventurous.length > 0 && <MenuSection menuItems={happyHourMenu.adventurous} />}
        {happyHourMenu.authentic.length > 0 && <MenuSection menuItems={happyHourMenu.authentic} />}
        {happyHourMenu.desserts.length > 0 && <MenuSection menuItems={happyHourMenu.desserts} />}
      </div>}
      {Object.keys(happyHourDrinksMenu).length && <div className="menu-page_sections" id="drinks">
        <header className="menu-page_sections_drinks-header">
          <h2>Drinks</h2>
          <span>đồ uống</span>
        </header>
        {happyHourDrinksMenu.cocktails.length > 0 && <DrinkSection drinkItems={happyHourDrinksMenu.cocktails} />}
        {happyHourDrinksMenu.shooters.length > 0 && <DrinkSection drinkItems={happyHourDrinksMenu.shooters} />}
        {happyHourDrinksMenu.beerOnTap.length > 0 && <DrinkSection drinkItems={happyHourDrinksMenu.beerOnTap} />}
        {happyHourDrinksMenu.bottledBeer.length > 0 && <DrinkSection drinkItems={happyHourDrinksMenu.bottledBeer} />}
        {happyHourDrinksMenu.soju.length > 0 && <DrinkSection drinkItems={happyHourDrinksMenu.soju} />}
        {happyHourDrinksMenu.sake.length > 0 && <DrinkSection drinkItems={happyHourDrinksMenu.sake} />}
        {happyHourDrinksMenu.nonAlcoholic.length > 0 && <DrinkSection drinkItems={happyHourDrinksMenu.nonAlcoholic} />}
      </div>}
    </main>
  );
}

export default TakeOutPage;