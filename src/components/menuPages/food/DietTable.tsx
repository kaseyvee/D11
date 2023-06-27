import { useContext } from "react";
import { MenuContext } from "../../../App";

const DietTable: React.FC = () => {
  const { diets }: any = useContext(MenuContext);

  return (
    <ul className="diet-table" aria-label="dietary restriction icon legend">
      {diets.length > 0 &&
        diets.map((diet: { dietaryType: string; image: string }) => {
          return (
            <li key={diet.dietaryType + "diet list"}>
              <img src={diet.image} alt={diet.dietaryType + " icon"} />
              <p>{diet.dietaryType}</p>
            </li>
          );
        })}
    </ul>
  );
};

export default DietTable;
