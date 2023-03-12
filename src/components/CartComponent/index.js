import { connect, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  clearCart,
  decreaseItemQty,
  increaseItemQty,
} from "../../store/slices/cartSlice";

const Cart = ({ cart, sum, sumWithDisc }) => {
  const dispatch = useDispatch();
  const Sum = (
    <>
      <div>Итого: {sum} руб</div>
      <div>Скидка {cart.discount}%</div>
      <div>С учетом скидки: {sumWithDisc} руб</div>
    </>
  );
  return (
    <div>
      <h3>Корзина</h3>
      {cart.items.map((item, index) => (
        <div key={item.food.id}>
          {item.food.attributes.name}
          <button
            className="border p-2"
            onClick={() => dispatch(decreaseItemQty(item.food.id))}
          >
            -
          </button>
          <span className="p-2">{item.qty}</span>
          <button
            className="border p-2"
            onClick={() => dispatch(increaseItemQty(item.food.id))}
          >
            +
          </button>
        </div>
      ))}

      {Sum}

      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => clearCart()}
      >
        Очистить
      </button>

      <p>
        <Link to="/checkout">
          <button className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Оформить заказ
          </button>
        </Link>
      </p>
    </div>
  );
};

export default Cart;
