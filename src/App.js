import logo from "./logo.svg";
import "./App.css";
import FoodList from "./components/FoodList";
import { Link, Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import CartWidgetComponent from "./components/CartWidgetComponent";
import CartProvider from "./components/CartProvider";

function App() {
  const sum = useSelector((state) => state.cart.sum);

  return (
    <div className="App">
      <CartProvider>
        <CartWidgetComponent></CartWidgetComponent>
      </CartProvider>
      <div className="container mx-auto">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
