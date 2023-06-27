import HeroButton from "../HeroButton";

const MenuNav: React.FC = () => {

  return (
    <ul className="menu-nav">
      <li>
        <HeroButton
          href="#adventurous"
          color="white"
          children="ADVENTUROUS"
          className="menu-nav-button"
        />
      </li>
      <li>  
        <HeroButton
          href="#authentic"
          color="white"
          children="AUTHENTIC"
          className="menu-nav-button"
        />
      </li>
      <li>  
        <HeroButton
          href="#desserts"
          color="white"
          children="DESSERTS"
          className="menu-nav-button"
        />
      </li>
      <li>  
        <HeroButton
          href="#drinks"
          color="white"
          children="DRINKS"
          className="menu-nav-button"
        />
      </li>
    </ul>
  )
}

export default MenuNav;