import { useEffect, useState } from "react";
import MenuSection from "../components/menus/MenuSection";
import PageHeader from "../components/menus/PageHeader";
import { getMenu } from "../helpers/getMenu";
import getOrganizedMenu from "../helpers/getOrganizedMenu";

const MenuPage: React.FC = () => {
  const [menuItems, setMenuItems] = useState<any>([]);

  useEffect(() => {
    getMenu()
      .then((res) => setMenuItems(getOrganizedMenu(res)))
  }, [])

  console.log(menuItems)

  return (
    <div className="menu-page">
      <PageHeader
        title="MENU"
      />
      <MenuSection />
    </div>
  );
}

export default MenuPage;