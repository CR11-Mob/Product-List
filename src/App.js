import "./App.css";

import { useEffect, useState } from "react";

import ProductsInput from "./components/ProductsInput";

function App() {
  const category = ["grocery", "lifestyle"];

  const subCategory = {
    grocery: ["fruits & vegetables", "snacks"],
    lifestyle: ["men", "women"],
  };

  const productType = {
    "fruits & vegetables": [
      { name: "apple", price: 100 },
      { name: "potato", price: 30 },
    ],
    snacks: [
      { name: "chocolate", price: 100 },
      { name: "chips", price: 10 },
    ],
    men: [
      { name: "t-shirt", price: 100 },
      { name: "pant", price: 30 },
    ],
    women: [
      { name: "top", price: 100 },
      { name: "jeans", price: 30 },
    ],
  };

  const [subCategoryState, setSubCategoryState] = useState(subCategory.grocery);

  const [productTypeState, setProductTypeState] = useState(
    productType["fruits & vegetables"]
  );

  const [addProductState, setAddProductState] = useState([]);

  const [inputList, setInputList] = useState([{ name: "", price: "" }]);

  const [groceryItem, setGroceryItem] = useState([]);

  const [error, setError] = useState(true);

  console.log("render");

  const calculateTotal = () => {
    let total = 0;
    if (!groceryItem.length) {
      return "-";
    } else {
      groceryItem.map((item) => (total += item.price));
      return total;
    }
  };

  // const groceryItemDropDown = () => (
  //   <>
  //     <label>
  //       Select Grocery:
  //       <select
  //         value={itemName}
  //         onChange={(e) => setItemName(e.target.value)}
  //         disabled={!productList.length}
  //       >
  //         {productList.map((item) => {
  //           return (
  //             <option key={item.name} value={item.name}>
  //               {item.name}
  //             </option>
  //           );
  //         })}
  //       </select>
  //     </label>
  //     <label>
  //       Price List:
  //       <select
  //         value={itemPrice}
  //         onChange={(e) => setItemPrice(e.target.value)}
  //         disabled={!productList.length}
  //       >
  //         {productList.map((item, index) => {
  //           return (
  //             <option key={index} value={item.price}>
  //               {item.price}
  //             </option>
  //           );
  //         })}
  //       </select>
  //     </label>
  //     <button onClick={addGroceryItem}>Add Grocery</button>
  //   </>
  // );

  const groceryList = () => (
    <table id="grocery-table">
      <thead className="table-head">
        <tr>
          <th>SL No.</th>
          <th>Product Name</th>
          <th>Product Price</th>
        </tr>
      </thead>
      <tbody>
        {!groceryItem.length ? (
          <tr>
            <td style={{ textAlign: "center" }}>-</td>
            <td style={{ textAlign: "center" }}>-</td>
            <td style={{ textAlign: "center" }}>-</td>
          </tr>
        ) : (
          groceryItem.map((item, index) => (
            <tr id={`row-${index}`}>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td>{item.price}</td>
            </tr>
          ))
        )}
      </tbody>
      <tfoot>
        <tr>
          <td></td>
          <td style={{ textAlign: "right" }}>Total</td>
          <td>{calculateTotal()}</td>
        </tr>
      </tfoot>
    </table>
  );

  return (
    <div className="container">
      <div className="grocery-item"></div>

      <div className="grocery-list">{groceryList()}</div>

      <div className="input-section">
        <ProductsInput
          inputList={inputList}
          setInputList={setInputList}
          error={error}
          setError={setError}
          category={category}
          subCategory={subCategory}
          subCategoryState={subCategoryState}
          setSubCategoryState={setSubCategoryState}
          productType={productType}
          productTypeState={productTypeState}
          setProductTypeState={setProductTypeState}
          addProductState={addProductState}
          setAddProductState={setAddProductState}
        />
      </div>
    </div>
  );
}

export default App;
