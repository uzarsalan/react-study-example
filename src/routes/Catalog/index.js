import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CatalogProvider from "../../components/CatalogProvider";
import CategorySelector from "../../components/CategorySelector";
import ErrorComp from "../../components/ErrorComp";
import FoodList from "../../components/FoodList";
import { fetchCatalog } from "../../store/slices/catalogSlice";

const Catalog = () => {
  let { loading } = useSelector((state) => state.catalog);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCatalog());
  }, []);

  if (loading == "fulfilled")
    return (
      <>
        <CategorySelector />
        <div className="grid gap-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          <CatalogProvider>
            <FoodList />
          </CatalogProvider>
        </div>
      </>
    );
  else if (loading == "rejected") return <ErrorComp />;
  else if (loading == "pending") return <h1>Загрузка...</h1>;
};

export default Catalog;
