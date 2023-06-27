import MenuSection from "../components/menus/MenuSection";
import PageHeader from "../components/menus/PageHeader";

const HappyHourPage: React.FC = () => {
  return (
    <main className="happy-hour-page">
      <PageHeader
        title="HAPPY HOUR MENU"
      />
      <MenuSection />
    </main>
  );
}

export default HappyHourPage;