import { useState, useEffect } from "react";
import { client } from "../contentful";

export const useFetchDrinksMenu = () => {
  const [state, setState] = useState({});

  useEffect(() => {
    client.getEntries({
      content_type: "drinks",
    })
      .then((res) => {
        const filteredDrinks = res.items.map(drink => {
          return drink.fields;
        })

        const categories = ["cocktail", "shooter", "beer on tap", "soju", "sake", "bottled beer", "non-alcoholic"];

        const output: any = {};

        for (let category of categories) {
          output[category] = filteredDrinks.filter((drinkItem: any) => drinkItem.type.toLowerCase() === category);
        }
        
        setState(output);
      })
    .catch((err) => {
      console.log(err)
    })
  }, [])

  return state;
}