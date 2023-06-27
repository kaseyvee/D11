export default function getOrganizedMenu(menu: any) {
  const categories = ["adventurous", "authentic", "desserts"];
  const output: any = {};

  for (let category of categories) {
    output[category] = menu.filter((menuItem: any) => menuItem.category.english.toLowerCase() === category);
  }

  return output;
}