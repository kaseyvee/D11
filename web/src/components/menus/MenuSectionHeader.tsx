
const MenuSectionHeader: React.FC = () => {
  return (
    <div
      className="menu-section-header"
    >
      <div className="menu-section-header_background">
        <img
          src="aburi.JPG"
          alt="aburi crispy rice"
          className="menu-section-header_background_img"
        />
      </div>
      

      <div className="menu-section-header_main">
        <div className="menu-section-header_main_words">
          <h1>Adventurous</h1>
          <h2>/ədˈven(t)SH(ə)rəs/</h2>
          <h3>adjective</h3>
        </div>

        <h4 className="menu-section-header_main_definition">
          willing to take risks or to try out new methods, ideas, or experiences
        </h4>
      </div>

    </div>
  )
}

export default MenuSectionHeader;