import { client } from "../contentful";

export async function getMenu() {
  const res = await client.getEntries({
    content_type: "menu",
  });

  try {
    const filteredItems = res.items.map((item: any) => {

      let filteredDiets = [];


      if (item.fields.dietRestrictions) {
        filteredDiets = item.fields.dietRestrictions?.map((diet: any) => {
          const output = {
            dietaryType: diet.fields.dietaryType,
            image: diet.fields.logo.fields.file.url
          }

          return output;
        })
      }

      const output = {
        ...item.fields,
        category: item.fields.category.fields,
        dietRestrictions: filteredDiets
      }

      return output;
    })

    return filteredItems;
  
  } catch(error) {
    console.log(error);
  }
}