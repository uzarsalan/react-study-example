import React from "react";
import { useSelector } from "react-redux";

const CatalogProvider = ({ children }) => {
  const catalog = useSelector((state) => state.catalog);
  let filteredItems = catalog.items.filter(
    (item) =>
      (item.attributes.category &&
        item.attributes.category.data.attributes &&
        item.attributes.category.data.attributes.name ==
          catalog.categoryName) ||
      !catalog.categoryName
  );

  return React.cloneElement(children, {
    filteredItems,
  });
};

export default CatalogProvider;
