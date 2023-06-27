import { useState, useEffect } from "react";
import { client } from "../contentful";

export const useFetchDiets = () => {
  const [state, setState] = useState({});

  useEffect(() => {
    client
      .getEntries({
        content_type: "diet",
      })
      .then((res) => {
        const diets = res.items.map((diet: any) => {
          return {
            dietaryType: diet.fields.dietaryType,
            image: diet.fields.logo.fields.file.url,
          };
        });

        setState(diets);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return state;
};
