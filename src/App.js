import logo from "./logo.svg";
import "./App.css";
import FoodList from "./components/FoodList";
import { Link, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

function App() {
  const sum = useSelector((state) => state.cart.sum);
  return (
    <div className="App">
      <header>
        В корзине {sum} руб
        <Link to="cart">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Смотреть корзину
          </button>
        </Link>
      </header>
      <div className="container mx-auto">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
