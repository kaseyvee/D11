import { useState, useEffect } from "react";
import { client } from "../contentful";
import cleanUpDrinksData from "./cleanUpDrinksData";
import cleanUpMenuData from "./cleanUpMenuData";

export default function useFetchData() {
  const [state, setState] = useState({});

  useEffect(() => {
    client
      .getEntries()
      .then((res) => {
        const allEntries = res.items;

        const rawDietsData = allEntries.filter((item) => {
          return item.sys.contentType.sys.id === "diet";
        });
        const rawCategoriesData = allEntries.filter((item) => {
          return item.sys.contentType.sys.id === "category";
        });
        const rawMenuData = allEntries.filter((item) => {
          return item.sys.contentType.sys.id === "menu";
        });
        const rawDrinksData = allEntries.filter((item) => {
          return item.sys.contentType.sys.id === "drinks";
        });
        const generalInfo = allEntries.filter((item) => {
          return item.sys.contentType.sys.id === "generalInfo";
        })[0].fields;

        const diets = rawDietsData.map((diet: any) => {
          return {
            dietaryType: diet.fields.dietaryType,
            image: diet.fields.logo.fields.file.url,
          };
        });
        const categories = rawCategoriesData.map((category) => {
          return category.fields;
        });
        const menu = cleanUpMenuData(rawMenuData, categories);
        const drinks = cleanUpDrinksData(rawDrinksData);

        setState({
          diets,
          menu,
          drinks,
          generalInfo,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return state;
}
