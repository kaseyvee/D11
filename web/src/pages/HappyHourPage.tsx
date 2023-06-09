import MenuSection from "../components/menus/MenuSection";
import PageHeader from "../components/menus/PageHeader";

const HappyHourPage: React.FC = () => {
  return (
    <div className="happy-hour-page">
      <PageHeader
        title="HAPPY HOUR MENU"
      />
      <MenuSection />
    </div>
  );
}

export default HappyHourPage;