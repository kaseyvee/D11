import HeroButton from "../buttons/HeroButton";

interface IProps {
  title: string;
}

const PageHeader: React.FC<IProps> = (props: IProps) => {
  return (
    <div className="page-header">
      <h1 className="page-header_title">{props.title}</h1>
      <div className="page-header_buttons">
        {props.title !== "HAPPY HOUR MENU" && <HeroButton
          to="/happy-hour"
          color="white"
          children="HAPPY HOUR MENU"
          className="page-header-button"
          />}
        {props.title !== "TAKE-OUT MENU" && <HeroButton
          to="/take-out"
          color="white"
          children="TAKE-OUT MENU"
          className="page-header-button"
        />}
        {props.title !== "MENU" && <HeroButton
          to="/menu"
          color="white"
          children="DINNER MENU"
          className="page-header-button"
        />}
      </div>
      <ul className="page-header_menu-sections">
        <li>  
          <HeroButton
            href="#adventurous"
            color="white"
            children="ADVENTUROUS"
            className="page-header_menu-sections-button"
          />
        </li>
        <li>  
          <HeroButton
            href="#authentic"
            color="white"
            children="AUTHENTIC"
            className="page-header_menu-sections-button"
          />
        </li>
        <li>  
          <HeroButton
            href="#desserts"
            color="white"
            children="DESSERTS"
            className="page-header_menu-sections-button"
          />
        </li>
        <li>  
          <HeroButton
            href="#drinks"
            color="white"
            children="DRINKS"
            className="page-header_menu-sections-button"
          />
        </li>
      </ul>
    </div>
  );
}

export default PageHeader;