import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import CartComponent from "../../components/CartComponent";
import { applyDiscount } from "../../store/slices/cartSlice";

let Cart = () => {
  let dispatch = useDispatch();

  return (
    <>
      <Link to="/">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Назад
        </button>
      </Link>
      <CartComponent />

      <button onClick={() => dispatch(applyDiscount(20))}>
        Применить скидку 20%
      </button>
    </>
  );
};

export default Cart;
