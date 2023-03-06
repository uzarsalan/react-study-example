import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../../store/slices/cartSlice";
import styles from "./FoodList.module.css";

const FoodList = ({ filteredItems }) => {
  const dispatch = useDispatch();

  const onSelect = (item) => {
    dispatch(addToCart(item));
  };

  return filteredItems.map((item, index) => (
    <div
      key={`card-${item.id}`}
      className={"bg-red-500 border-0 rounded-md " + styles.card}
      // onClick={() => onSelect(item)}
    >
      <Link to={`catalog/${item.id}`}>
        <h2>{item.attributes.name}</h2>
      </Link>
      <small>{item.attributes.category.data.attributes.name}</small>
      <div className={styles.content}>{item.attributes.price} руб</div>
      <button onClick={() => onSelect(item)}>Купить</button>
    </div>
  ));
};

export default FoodList;
