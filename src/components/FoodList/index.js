import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../../store/slices/cartSlice";
import styles from "./FoodList.module.css";

const FoodList = ({ items }) => {
  const dispatch = useDispatch();

  const onSelect = (item) => {
    dispatch(addToCart(item));
  };

  return items.map((item, index) => (
    <div
      key={`card-${index}`}
      className={"bg-red-500 border-0 rounded-md " + styles.card}
      // onClick={() => onSelect(item)}
    >
      <Link to={`catalog/${item.id}`}>
        <h2>{item.name}</h2>
      </Link>
      <div className={styles.content}>{item.price} руб</div>
      <button onClick={() => onSelect(item)}>Купить</button>
    </div>
  ));
};

export default FoodList;
