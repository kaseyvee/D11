import React, { useContext, useEffect } from "react";

import { MenuContext } from "../App";
import useScrollToTop from "../helpers/useScrollToTop";

import MenuSection from "../components/menuPages/food/MenuSection";
import PageHeader from "../components/menuPages/PageHeader";
import MenuNav from "../components/menuPages/MenuNav";
import DrinkSection from "../components/menuPages/drinks/DrinkSection";
import DietTable from "../components/menuPages/food/DietTable";

const MenuPage: React.FC = () => {
  useScrollToTop();
  
  useEffect(() => {
    document.title = "Menu | District Eleven";
  }, []);

  const { menu, drinks }: any = useContext(MenuContext);

  const allDayMenu = Object.entries(menu).map(([key, value]: [string, any]) => {
    if (value.length !== 0) {
      return <MenuSection key={key} menuItems={value} />;
    }
  });

  const allDayDrinksMenu = Object.entries(drinks).map(
    ([key, value]: [string, any]) => {
      if (value.length !== 0) {
        return <DrinkSection key={key} drinkItems={value} />;
      }
    }
  );

  return (
    <main className="menu-page page">
      <PageHeader title="ALL DAY MENU" />
      <MenuNav />

      {Object.keys(menu).length > 0 && (
        <div className="menu-page_sections">
          {allDayMenu}
          <DietTable />
        </div>
      )}

      {Object.keys(drinks).length > 0 && (
        <div className="menu-page_sections" id="drinks">
          <header className="menu-page_sections_drinks-header">
            <h2>Drinks</h2>
            <span>đồ uống</span>
          </header>
          {allDayDrinksMenu}
        </div>
      )}
    </main>
  );
};

export default MenuPage;
