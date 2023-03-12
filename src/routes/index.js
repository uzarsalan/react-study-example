import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import About from "./About";
import Cart from "./Cart";
import Catalog from "./Catalog";
import CatalogItem from "./Catalog/CatalogItem";
import CheckoutPage from "./CheckoutPage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Catalog /> },
      {
        path: "/catalog/:id",
        element: <CatalogItem />,
      },
    ],
  },
  {
    path: "about",
    element: <About />,
  },
  {
    path: "cart",
    element: <Cart />,
  },
  {
    path: "checkout",
    element: <CheckoutPage />,
  },
]);

export default router;
