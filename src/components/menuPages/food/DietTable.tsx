import { useContext } from "react";
import { DataContext } from "../../../App";

const DietTable: React.FC = () => {
  const { data }: any = useContext(DataContext);
  const diets = data.diets;

  return (
    <ul className="diet-table" aria-label="dietary restriction icon legend">
      {diets.length > 0 &&
        diets.map((diet: { dietaryType: string; image: string }) => {
          return (
            <li key={diet.dietaryType + "diet list"}>
              <img src={diet.image} alt={diet.dietaryType + " icon"} width={20} height={20} />
              <p>{diet.dietaryType}</p>
            </li>
          );
        })}
    </ul>
  );
};

export default DietTable;
