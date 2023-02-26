import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const CatalogItem = () => {
  const catalog = useSelector((state) => state.catalog);
  const { id } = useParams();
  const catalogItem = catalog.items.find((item) => item.id == id);

  return (
    <div>
      <h1>{catalogItem.name}</h1>
      <img src={catalogItem.image} />
    </div>
  );
};

export default CatalogItem;
