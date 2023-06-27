export default function getOrganizedDrinksMenu(drinks: any) {
  const categories = ["cocktail", "shooter", "beer on tap", "soju", "sake", "bottled beer", "non-alcoholic"];
  const output: any = {};

  for (let category of categories) {
    output[category] = drinks.filter((drinkItem: any) => drinkItem.type.toLowerCase() === category);
  }

  const alphabetizedTaps = output["beer on tap"].sort((a: any, b: any) => {
    const nameA = a.brewery.toLowerCase();
    const nameB = b.brewery.toLowerCase();

    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }

    return 0;
  })

  const filteredDrinks = {
    cocktails: output.cocktail,
    shooters: output.shooter,
    beerOnTap: alphabetizedTaps,
    soju: output.soju,
    sake: output.sake,
    bottledBeer: output["bottled beer"],
    nonAlcoholic: output["non-alcoholic"]
  }

  return filteredDrinks;
}