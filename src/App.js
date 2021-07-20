import "./App.css";

import ProductEntry from "./components/product-components/ProductEntry";
import SelectProduct from "./components/product-components/SelectProduct";

import { useEffect, useState } from "react";

import { category, subCategory, productType } from "./productArray";

function App() {
  const [productTypeState, setProductTypeState] = useState(productType);

  useEffect(() => {
    console.log("App", productTypeState);
  }, [productTypeState]);

  return (
    <div className="container">
      <div className="select-product-section">
        <SelectProduct
          productTypeState={productTypeState}
          setProductTypeState={setProductTypeState}
        />
      </div>

      <div className="product-list-section"></div>

      <div className="product-entry-section">
        <ProductEntry
          productTypeState={productTypeState}
          setProductTypeState={setProductTypeState}
        />
      </div>
    </div>
  );
}

export default App;
