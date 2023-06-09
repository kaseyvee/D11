import MenuItem from "./MenuItem";

interface IProps {
  menuItems: {
    category: {
      english: string;
      vietnamese: string;
    }
    name: string;
    description: string;
    happyHour: boolean;
    happyHourPrice?: number;
    price: number;
    takeOut: boolean;
    dietRestrictions: {
      dietaryType: String;
      image: string;
    }[];
    addOns?: {
      name?: string;
      description?: string;
      price: number;
    }[]
  }[]
}

const MenuSection: React.FC<IProps> = ({ menuItems }) => {

  const categoryEnglish = menuItems[0].category.english;
  const categoryVietnamese = menuItems[0].category.vietnamese;

  const menuList = menuItems.map(menuItem => {
    return <MenuItem key={menuItem.name + categoryEnglish} menuItem={menuItem} />
  })

  return (
    <section className="menu-section" id={categoryEnglish.toLowerCase()}>
      <div className="wrapper">
        <header className="menu-section_header">
          <h2>{categoryEnglish}</h2>
          <span>{categoryVietnamese}</span>
        </header>
        <ul className="menu-section_menu-items">
          {menuList}
        </ul>
      </div>
    </section>
  )
}

export default MenuSection;