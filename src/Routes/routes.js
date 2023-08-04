import Cart from "../Components/Cart";
import Favorite from "../Components/Favorites";
import { useRoutes } from "react-router-dom";
import Home from "../Components/Home";

export const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/favorites",
    element: <Favorite />,
  },
  {
    path: "*",
    element: <>Not found</>,
  },
];

const Router = () => {
  return <>{useRoutes(routes)}</>;
};

export default Router;
