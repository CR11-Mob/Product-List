import "./App.css";

import ProductEntry from "./components/product-components/ProductEntry";
import SelectProduct from "./components/product-components/SelectProduct";
import ProductList from "./components/product-components/ProductList";

import { useEffect, useState } from "react";

import { productType } from "./productArray";

function App() {
  const [productTypeState, setProductTypeState] = useState(productType);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    console.log("App", productTypeState);
  }, [productTypeState]);

  return (
    <div className="container">
      <div className="select-product-section">
        <SelectProduct
          productTypeState={productTypeState}
          setProductTypeState={setProductTypeState}
          products={products}
          setProducts={setProducts}
        />
      </div>

      <div className="product-list-section">
        <ProductList
          productTypeState={productTypeState}
          setProductTypeState={setProductTypeState}
          products={products}
        />
      </div>

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
