import { useContext, useEffect } from "react";

import { MenuContext } from "../App";
import useScrollToTop from "../helpers/useScrollToTop";
import getMenuType from "../helpers/getMenuType";

import DrinkSection from "../components/menuPages/drinks/DrinkSection";
import MenuNav from "../components/menuPages/MenuNav";
import MenuSection from "../components/menuPages/food/MenuSection";
import PageHeader from "../components/menuPages/PageHeader";
import DietTable from "../components/menuPages/food/DietTable";

const TakeOutPage: React.FC = () => {
  useScrollToTop();

  const { menu, drinks }: any = useContext(MenuContext);

  const takeOutMenu = getMenuType(menu, "takeOut");
  const takeOutDrinksMenu = getMenuType(drinks, "takeOut");

  useEffect(() => {
    document.title = "Take-Out | District Eleven";
  }, []);

  return (
    <main className="take-out-page page">
      <PageHeader title="TAKE-OUT MENU" />
      <MenuNav />
      {Object.keys(takeOutMenu).length > 0 && (
        <div className="menu-page_sections">
          {takeOutMenu.adventurous.length > 0 && (
            <MenuSection menuItems={takeOutMenu.adventurous} />
          )}
          {takeOutMenu.authentic.length > 0 && (
            <MenuSection menuItems={takeOutMenu.authentic} />
          )}
          {takeOutMenu.desserts.length > 0 && (
            <MenuSection menuItems={takeOutMenu.desserts} />
          )}
          <DietTable />
        </div>
      )}
      {Object.keys(takeOutDrinksMenu).length && (
        <div className="menu-page_sections" id="drinks">
          <header className="menu-page_sections_drinks-header">
            <h2>Drinks</h2>
            <span>đồ uống</span>
          </header>
          {takeOutDrinksMenu.cocktails.length > 0 && (
            <DrinkSection drinkItems={takeOutDrinksMenu.cocktails} />
          )}
          {takeOutDrinksMenu.shooters.length > 0 && (
            <DrinkSection drinkItems={takeOutDrinksMenu.shooters} />
          )}
          {takeOutDrinksMenu.beerOnTap.length > 0 && (
            <DrinkSection drinkItems={takeOutDrinksMenu.beerOnTap} />
          )}
          {takeOutDrinksMenu.bottledBeer.length > 0 && (
            <DrinkSection drinkItems={takeOutDrinksMenu.bottledBeer} />
          )}
          {takeOutDrinksMenu.soju.length > 0 && (
            <DrinkSection drinkItems={takeOutDrinksMenu.soju} />
          )}
          {takeOutDrinksMenu.sake.length > 0 && (
            <DrinkSection drinkItems={takeOutDrinksMenu.sake} />
          )}
          {takeOutDrinksMenu.nonAlcoholic.length > 0 && (
            <DrinkSection drinkItems={takeOutDrinksMenu.nonAlcoholic} />
          )}
        </div>
      )}
    </main>
  );
};

export default TakeOutPage;
