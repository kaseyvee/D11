import { useState, useEffect } from "react";
import { client } from "../contentful";
import getOrganizedDrinksMenu from "./getOrganizedDrinksMenu";

export const useFetchDrinksMenu = () => {
  const [state, setState] = useState({});

  useEffect(() => {
    client
      .getEntries({
        content_type: "drinks",
      })
      .then((res) => {
        const drinks = res.items.map((drink) => {
          return drink.fields;
        });

        const filteredDrinks = getOrganizedDrinksMenu(drinks);
        // console.log(filteredDrinks/)

        setState(filteredDrinks);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return state;
};
