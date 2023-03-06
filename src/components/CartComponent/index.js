import { connect } from "react-redux";
import {
  clearCart,
  decreaseItemQty,
  increaseItemQty,
} from "../../store/slices/cartSlice";

const Cart = ({ cart, sum, sumWithDisc }) => {
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
        <div key={item.food.name}>
          {item.food.name}
          <button
            className="border p-2"
            onClick={() => decreaseItemQty(item.food.name)}
          >
            -
          </button>
          <span className="p-2">{item.qty}</span>
          <button
            className="border p-2"
            onClick={() => increaseItemQty(item.food.name)}
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
    </div>
  );
};

export default Cart;
