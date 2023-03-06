import { useDispatch } from "react-redux";
import { setCategoryName } from "../../store/slices/catalogSlice";

const CategorySelector = () => {
  const dispatch = useDispatch();

  function filterFood(categoryName) {
    dispatch(setCategoryName(categoryName));
  }
  return (
    <>
      <button className="border p-2 m-2" onClick={() => filterFood(null)}>
        Все категории
      </button>
      <button className="border p-2 m-2" onClick={() => filterFood("Супы")}>
        Супы
      </button>
      <button className="border p-2 m-2" onClick={() => filterFood("Салаты")}>
        Салаты
      </button>
    </>
  );
};

export default CategorySelector;
