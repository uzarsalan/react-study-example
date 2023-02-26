import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ErrorComp from "../../components/ErrorComp";
import FoodList from "../../components/FoodList";
import { fetchCatalog } from "../../store/slices/catalogSlice";

const Catalog = () => {
  let { loading, items } = useSelector((state) => state.catalog);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCatalog());
  }, []);

  if (loading == "fulfilled")
    return (
      <div className="grid gap-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        <FoodList items={items} />
      </div>
    );
  else if (loading == "rejected") return <ErrorComp />;
  else if (loading == "pending") return <h1>Загрузка...</h1>;
};

export default Catalog;
