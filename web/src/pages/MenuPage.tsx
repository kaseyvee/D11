import { useFetchMenu } from "../helpers/useFetchMenu";

import MenuSection from "../components/menus/MenuSection";
import PageHeader from "../components/menus/PageHeader";
import MenuNav from "../components/menus/MenuNav";

const MenuPage: React.FC = () => {
  const menu: any = useFetchMenu();

  return (
    <div className="menu-page">
      <PageHeader
        title="MENU"
      />
      <MenuNav />
      {Object.keys(menu).length && <div className="menu-page_sections">
        {menu.adventurous.length && <MenuSection menuItems={menu.adventurous} />}
        {menu.authentic.length && <MenuSection menuItems={menu.authentic} />}
        {menu.desserts.length && <MenuSection menuItems={menu.desserts} />}
      </div>}
    </div>
  );
}

export default MenuPage;