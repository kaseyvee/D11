import { useState, useEffect } from "react";
import { client } from "../contentful";
import getOrganizedMenu from "./getOrganizedMenu";

export const useFetchMenu = () => {
  const [state, setState] = useState({});

  useEffect(() => {
    client.getEntries({
      content_type: "menu",
    })
      .then((res) => {
        const filteredItems = res.items.map((item: any) => {
  
          let filteredDiets = [];
          let filteredAddOns = [];
    
    
          if (item.fields.dietRestrictions) {
            filteredDiets = item.fields.dietRestrictions?.map((diet: any) => {
              const output = {
                dietaryType: diet.fields.dietaryType,
                image: diet.fields.logo.fields.file.url
              }
    
              return output;
            })
          }
          
          if (item.fields.addOns) {
            filteredAddOns = item.fields.addOns?.map((addOn: any) => {
              const output = {
                name: addOn.fields.name || null,
                description: addOn.fields.description || null,
                price: addOn.fields.price
              }
    
              return output;
            })
          }
    
          const output = {
            ...item.fields,
            category: item.fields.category.fields,
            dietRestrictions: filteredDiets,
            addOns: filteredAddOns
          }
    
          return output;
        })
    
        const organizedMenu = getOrganizedMenu(filteredItems);
        setState(organizedMenu)
      })
    .catch((err) => {
      console.log(err)
    })
  }, [])

  return state;
}