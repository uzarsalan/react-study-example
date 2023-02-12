import { connect } from "react-redux";
import {
  clearCart,
  decreaseItemQty,
  increaseItemQty,
} from "../../store/slices/cartSlice";

const Cart = ({ items, decreaseItemQty, increaseItemQty, clearCart }) => {
  return (
    <div>
      <h3>Корзина</h3>
      {items.map((item, index) => (
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
      <div>
        {items.reduce((sum, item) => {
          sum += item.food.price * item.qty;
          return sum;
        }, 0)}{" "}
        руб
      </div>
      <button onClick={() => clearCart()}>Очистить</button>
    </div>
  );
};

export default connect(
  (state) => ({
    items: state.cart,
  }),
  {
    increaseItemQty,
    decreaseItemQty,
    clearCart,
  }
)(Cart);
