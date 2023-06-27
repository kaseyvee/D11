import HeroButton from "../buttons/HeroButton";

interface IProps {
  title: string;
}

const PageHeader: React.FC<IProps> = (props: IProps) => {
  return (
    <div className="page-header">
      <h2 className="page-header_title">{props.title}</h2>
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
    </div>
  );
}

export default PageHeader;