import React from "react";
import MenuSectionHeader from "../components/menus/MenuSectionHeader";
import PageHeader from "../components/menus/PageHeader";
const MenuPage: React.FC = () => {
  return (
    <div className="menu-page">
      <PageHeader
        title="MENU"
      />
      <MenuSectionHeader />
    </div>
  );
}

export default MenuPage;