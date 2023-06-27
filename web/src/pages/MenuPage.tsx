import { useFetchMenu } from "../helpers/useFetchMenu";
import { useFetchDrinksMenu } from "../helpers/useFetchDrinksMenu";

import MenuSection from "../components/menus/MenuSection";
import PageHeader from "../components/menus/PageHeader";
import MenuNav from "../components/menus/MenuNav";
import DrinkSection from "../components/menus/drinks/DrinkSection";

const MenuPage: React.FC = () => {
  const menu: any = useFetchMenu();
  const drinks: any = useFetchDrinksMenu();
  console.log(drinks)

  return (
    <main className="menu-page">
      <PageHeader
        title="MENU"
      />
      <MenuNav />
      {Object.keys(menu).length && <div className="menu-page_sections">
        {menu.adventurous.length && <MenuSection menuItems={menu.adventurous} />}
        {menu.authentic.length && <MenuSection menuItems={menu.authentic} />}
        {menu.desserts.length && <MenuSection menuItems={menu.desserts} />}
      </div>}
      {Object.keys(drinks).length && <div className="menu-page_sections">
        {drinks.cocktail.length && <DrinkSection drinkItems={drinks.cocktail} />}
        {drinks.cocktail.length && <DrinkSection drinkItems={drinks.cocktail} />}
      </div>}
    </main>
  );
}

export default MenuPage;