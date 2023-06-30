import ErrorPage from "./_error";
import Homepage from "./_home";
import MenuPage from "./_menu";

const pagesData = [
  {
    path: "",
    element: <Homepage />,
    title: "home",
  },
  {
    path: "/menu",
    element: <MenuPage menuType="allDay" />,
    title: "menu",
  },
  {
    path: "/happy-hour",
    element: <MenuPage menuType="happyHour" />,
    title: "happy hour",
  },
  {
    path: "/take-out",
    element: <MenuPage menuType="takeOut" />,
    title: "take-out",
  },
  {
    path: "*",
    element: <ErrorPage />,
    title: "error",
  },
];

export default pagesData;
