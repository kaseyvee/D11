export default function cleanUpMenuData(menu: any, categories: any) {
  const cleanMenuData = menu.map((item: any) => {
    let filteredDiets = [];
    let filteredAddOns = [];

    // get diet restrictions for item
    if (item.fields.dietRestrictions) {
      filteredDiets = item.fields.dietRestrictions?.map((diet: any) => {
        const output = {
          dietaryType: diet.fields.dietaryType,
          image: diet.fields.logo.fields.file.url,
        };

        return output;
      });
    }

    // get addons for item
    if (item.fields.addOns) {
      filteredAddOns = item.fields.addOns?.map((addOn: any) => {
        const output = {
          name: addOn.fields.name || null,
          description: addOn.fields.description || null,
          price: addOn.fields.price,
        };

        return output;
      });
    }

    // final item result
    const output = {
      ...item.fields,
      category: item.fields.category.fields,
      dietRestrictions: filteredDiets,
      addOns: filteredAddOns,
    };

    return output;
  });

  // organizes menu items by category
  const output: any = {};

  for (let category of categories) {
    let categoryVar = category.english.toLowerCase();

    output[categoryVar] = cleanMenuData.filter(
      (menuItem: any) => menuItem.category.english.toLowerCase() === categoryVar
    );
  }

  // order output alphabetically
  const orderedOutput: any = {};

  // Step 1: Retrieve the keys from the object and sort them alphabetically
  const keys = Object.keys(output).sort();

  // Step 2: Assign sorted key-value pairs to the new object
  keys.forEach((key) => {
    orderedOutput[key] = output[key];
  });

  return orderedOutput;
}
