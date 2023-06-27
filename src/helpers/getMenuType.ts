export default function getMenuType(menu: any, type: string) {
  let output: any = {};

  for (let category in menu) {
    output[category] = menu[category].filter((menuItem: any) => {
      return menuItem[type] === true;
    });
  }
  return output;
}
