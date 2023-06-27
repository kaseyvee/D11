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
      {Object.keys(menu).length > 0 && <div className="menu-page_sections">
        {menu.adventurous.length > 0 && <MenuSection menuItems={menu.adventurous} />}
        {menu.authentic.length > 0 && <MenuSection menuItems={menu.authentic} />}
        {menu.desserts.length > 0 && <MenuSection menuItems={menu.desserts} />}
      </div>}
      {Object.keys(drinks).length && <div className="menu-page_sections">
        <header className="menu-section_header">
          <h2>Drinks</h2>
          <span>đồ uống</span>
        </header>
        {drinks.cocktails.length > 0 && <DrinkSection drinkItems={drinks.cocktails} />}
        {drinks.beerOnTap.length > 0 && <DrinkSection drinkItems={drinks.beerOnTap} />}
        {drinks.nonAlcoholic.length > 0 && <DrinkSection drinkItems={drinks.nonAlcoholic} />}
      </div>}
    </main>
  );
}

export default MenuPage;