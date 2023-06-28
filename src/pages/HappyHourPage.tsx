import { useContext, useEffect } from "react";
import { MenuContext } from "../App";
import DrinkSection from "../components/menuPages/drinks/DrinkSection";
import MenuNav from "../components/menuPages/MenuNav";
import MenuSection from "../components/menuPages/food/MenuSection";
import PageHeader from "../components/menuPages/PageHeader";
import getMenuType from "../helpers/getMenuType";
import useScrollToTop from "../helpers/useScrollToTop";
import DietTable from "../components/menuPages/food/DietTable";

const HappyHourPage: React.FC = () => {
  useScrollToTop();

  const { menu, drinks }: any = useContext(MenuContext);

  const happyHourMenu = getMenuType(menu, "happyHour");
  const happyHourDrinksMenu = getMenuType(drinks, "happyHour");

  useEffect(() => {
    document.title = "Happy Hour | District Eleven";
  }, []);

  return (
    <main className="happy-hour-page page">
      <PageHeader title="HAPPY HOUR MENU" />
      <MenuNav />
      {Object.keys(happyHourMenu).length > 0 && (
        <div className="menu-page_sections">
          {happyHourMenu.adventurous.length > 0 && (
            <MenuSection
              happyHour={true}
              menuItems={happyHourMenu.adventurous}
            />
          )}
          {happyHourMenu.authentic.length > 0 && (
            <MenuSection happyHour={true} menuItems={happyHourMenu.authentic} />
          )}
          {happyHourMenu.desserts.length > 0 && (
            <MenuSection happyHour={true} menuItems={happyHourMenu.desserts} />
          )}
          <DietTable />
        </div>
      )}
      {Object.keys(happyHourDrinksMenu).length && (
        <div className="menu-page_sections" id="drinks">
          <header className="menu-page_sections_drinks-header">
            <h2>Drinks</h2>
            <span>đồ uống</span>
          </header>
          {happyHourDrinksMenu.cocktails.length > 0 && (
            <DrinkSection
              happyHour={true}
              drinkItems={happyHourDrinksMenu.cocktails}
            />
          )}
          {happyHourDrinksMenu.shooters.length > 0 && (
            <DrinkSection
              happyHour={true}
              drinkItems={happyHourDrinksMenu.shooters}
            />
          )}
          {happyHourDrinksMenu.beerOnTap.length > 0 && (
            <DrinkSection
              happyHour={true}
              drinkItems={happyHourDrinksMenu.beerOnTap}
            />
          )}
          {happyHourDrinksMenu.bottledBeer.length > 0 && (
            <DrinkSection
              happyHour={true}
              drinkItems={happyHourDrinksMenu.bottledBeer}
            />
          )}
          {happyHourDrinksMenu.soju.length > 0 && (
            <DrinkSection
              happyHour={true}
              drinkItems={happyHourDrinksMenu.soju}
            />
          )}
          {happyHourDrinksMenu.sake.length > 0 && (
            <DrinkSection
              happyHour={true}
              drinkItems={happyHourDrinksMenu.sake}
            />
          )}
          {happyHourDrinksMenu.nonAlcoholic.length > 0 && (
            <DrinkSection
              happyHour={true}
              drinkItems={happyHourDrinksMenu.nonAlcoholic}
            />
          )}
        </div>
      )}
    </main>
  );
};

export default HappyHourPage;
