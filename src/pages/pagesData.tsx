import ErrorPage from "./_error";
import HappyHourPage from "./_happy-hour";
import Homepage from "./_home";
import MenuPage from "./_menu";
import TakeOutPage from "./_take-out";

const pagesData = [
  {
    path: "",
    element: <Homepage />,
    title: "home",
  },
  {
    path: "/menu",
    element: <MenuPage />,
    title: "menu",
  },
  {
    path: "/happy-hour",
    element: <HappyHourPage />,
    title: "happy hour",
  },
  {
    path: "/take-out",
    element: <TakeOutPage />,
    title: "take-out",
  },
  {
    path: "*",
    element: <ErrorPage />,
    title: "error",
  }
];

export default pagesData;