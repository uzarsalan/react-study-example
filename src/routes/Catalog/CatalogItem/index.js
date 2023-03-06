import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const CatalogItem = () => {
  const catalog = useSelector((state) => state.catalog);
  const { id } = useParams();
  const catalogItem = catalog.items.find((item) => item.id == id);

  return (
    <div>
      <h1>{catalogItem.attributes.name}</h1>
      <img
        src={
          "http://localhost:1337" +
          catalogItem.attributes.image.data.attributes.url
        }
      />
    </div>
  );
};

export default CatalogItem;
