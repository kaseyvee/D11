import MenuItem from "./MenuItem";

const MenuSection: React.FC = () => {
  const category = {
    english: "adventurous",
    vietnamese: "phiêu lưu"
  }

  return (
    <section className="menu-section">
      <div className="wrapper">
        <header className="menu-section_header">
          <h2>{category.english}</h2>
          <span>{category.vietnamese}</span>
        </header>
        <ul className="menu-section_menu-items">
          <MenuItem />
        </ul>
      </div>
    </section>
  )
}

export default MenuSection;