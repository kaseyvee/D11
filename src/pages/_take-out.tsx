import React, { useContext, useEffect } from "react";

import { DataContext } from "../App";
import useScrollToTop from "../helpers/useScrollToTop";
import getMenuType from "../helpers/getMenuType";

import DrinkSection from "../components/menuPages/drinks/DrinkSection";
import MenuNav from "../components/menuPages/MenuNav";
import MenuSection from "../components/menuPages/food/MenuSection";
import PageHeader from "../components/menuPages/PageHeader";
import DietTable from "../components/menuPages/food/DietTable";

const TakeOutPage: React.FC = () => {
  useScrollToTop();
  
  useEffect(() => {
    document.title = "Take-Out | District Eleven";
  }, []);

  const { data }: any = useContext(DataContext);
  const menu = data.menu;
  const drinks = data.drinks;

  const takeOutMenu = Object.entries(getMenuType(menu, "takeOut")).map(
    ([key, value]: [string, any]) => {
      if (value.length !== 0) {
        return <MenuSection key={key} menuItems={value} />;
      }
    }
  );

  const takeOutDrinksMenu = Object.entries(getMenuType(drinks, "takeOut")).map(
    ([key, value]: [string, any]) => {
      if (value.length !== 0) {
        return <DrinkSection key={key} drinkItems={value} />;
      }
    }
  );

  return (
    <main className="take-out-page page">
      <PageHeader title="TAKE-OUT MENU" />
      <MenuNav />

      {Object.keys(takeOutMenu).length > 0 &&
        Object.keys(takeOutDrinksMenu).length > 0 && (
          <>
            <div className="menu-page_sections">
              {takeOutMenu}
              <DietTable />
            </div>

            <div className="menu-page_sections" id="drinks">
              <header className="menu-page_sections_drinks-header">
                <h2>Drinks</h2>
                <span>đồ uống</span>
              </header>
              {takeOutDrinksMenu}
            </div>
          </>
        )}
    </main>
  );
};

export default TakeOutPage;
