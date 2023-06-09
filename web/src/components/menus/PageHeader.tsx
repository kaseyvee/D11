import HeroButton from "../buttons/HeroButton";

// template to take buttons, menu sections, and title props

interface IProps {
  title: string;
}

const PageHeader: React.FC<IProps> = (props: IProps) => {
  return (
    <div className="page-header">
      <h1 className="page-header_title">{props.title}</h1>
      <div className="page-header_buttons">
        <HeroButton
          to="/happy-hour"
          color="white"
          children="HAPPY HOUR MENU"
          className="page-header-button"
          />
        <HeroButton
          to="/take-out"
          color="white"
          children="TAKE-OUT MENU"
          className="page-header-button"
        />
      </div>
      <ul className="page-header_menu-sections">
        <li>  
          <HeroButton
            href="/#adventurous"
            color="white"
            children="ADVENTUROUS"
            className="page-header_menu-sections-button"
          />
        </li>
        <li>  
          <HeroButton
            href="/#authentic"
            color="white"
            children="AUTHENTIC"
            className="page-header_menu-sections-button"
          />
        </li>
        <li>  
          <HeroButton
            href="/#desserts"
            color="white"
            children="DESSERTS"
            className="page-header_menu-sections-button"
          />
        </li>
        <li>  
          <HeroButton
            href="/#drinks"
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