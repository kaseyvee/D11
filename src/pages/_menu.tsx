import { useContext, useEffect } from "react";

import { DataContext } from "../App";
import useScrollToTop from "../helpers/useScrollToTop";
import getMenuType from "../helpers/getMenuType";

import PageHeader from "../components/menuPages/PageHeader";
import MenuNav from "../components/menuPages/MenuNav";
import MenuSection from "../components/menuPages/food/MenuSection";
import DietTable from "../components/menuPages/food/DietTable";
import DrinkSection from "../components/menuPages/drinks/DrinkSection";

interface MenuPageProps {
  menuType: string;
}

const MenuPage: React.FC<MenuPageProps> = ({ menuType }) => {
  useScrollToTop();

  const menuTypes: any = {
    allDay: {
      title: "All Day",
      type: "allDay",
    },
    happyHour: {
      title: "Happy Hour",
      type: "happyHour",
    },
    takeOut: {
      title: "Take-Out",
      type: "takeOut",
    },
  };

  document.title = `${menuTypes[menuType].title} Menu | District Eleven`;

  const { data }: any = useContext(DataContext);
  const menu = getMenuType(data.menu, menuType);
  const drinks = getMenuType(data.drinks, menuType);

  const allDayMenu = Object.entries(menu).map(([key, value]: [string, any]) => {
    if (value.length !== 0) {
      return <MenuSection key={key} menuType={menuType} menuItems={value} />;
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
      <PageHeader menuType={menuType} title={`${menuTypes[menuType].title.toUpperCase()} MENU`} />
      <MenuNav />

      <div className="menu-page_sections">
        {allDayMenu}
        <DietTable />
      </div>

      <div className="menu-page_sections" id="drinks">
        <header className="menu-page_sections_drinks-header">
          <h2>Drinks</h2>
          <span>đồ uống</span>
        </header>
        {allDayDrinksMenu}
      </div>
    </main>
  );
};

export default MenuPage;
