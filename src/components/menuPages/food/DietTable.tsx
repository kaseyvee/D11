import Recommended from "../../../assets/diets/recommended.svg";
import Wait from "../../../assets/diets/wait.svg";
import Gluten from "../../../assets/diets/gluten.svg";
import Dairy from "../../../assets/diets/dairy.svg";
import Vegetarian from "../../../assets/diets/vegetarian.svg";
import Vegan from "../../../assets/diets/vegan.svg";

const DietTable: React.FC = () => {
  const diets = [
    {
      dietaryType: "Recommended",
      image: Recommended
    },
    {
      dietaryType: "Up to 20 minute wait",
      image: Wait
    },
    {
      dietaryType: "Gluten-free",
      image: Gluten
    },
    {
      dietaryType: "Dairy-free",
      image: Dairy
    },
    {
      dietaryType: "Vegetarian",
      image: Vegetarian
    },
    {
      dietaryType: "Vegan",
      image: Vegan
    },
  ]

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
