import { Link, Outlet } from "react-router-dom";

const CartWidgetComponent = ({ sum }) => {
  return (
    <header>
      В корзине {sum} руб
      <Link to="cart">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Смотреть корзину
        </button>
      </Link>
    </header>
  );
};

export default CartWidgetComponent;
