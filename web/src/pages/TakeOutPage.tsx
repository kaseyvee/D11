import MenuSection from "../components/menus/MenuSection";
import PageHeader from "../components/menus/PageHeader";

const TakeOutPage: React.FC = () => {
  return (
    <main className="take-out-page">
      <PageHeader
        title="TAKE-OUT MENU"
      />
      <MenuSection />
    </main>
  );
}

export default TakeOutPage;