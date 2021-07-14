import "./App.css";

import { useState } from "react";

function App() {
  let allGroceryProducts = [
    {
      name: "Butter",
      price: [100],
    },
    {
      name: "Cake",
      price: [50],
    },
    {
      name: "Biscuits",
      price: [25],
    },
    {
      name: "Breed",
      price: [20],
    },
    {
      name: "Chocolate",
      price: [100],
    },
    {
      name: "Potato Chips",
      price: [10],
    },
  ];

  const [productList, setProductList] = useState(allGroceryProducts);

  const [groceryItem, setGroceryItem] = useState([]);

  const [productName, setName] = useState(null);
  const [productPrice, setPrice] = useState(null);

  const [multipleProduct, setMultipleProduct] = useState({});

  const [itemName, setItemName] = useState("");
  const [itemPrice, setItemPrice] = useState(null);

  const [inputField, setInputField] = useState([{ name: "", Price: "" }]);

  console.log(inputField);
  console.log("render");

  const addProduct = () => {
    let newProduct = { name: productName, price: [productPrice] };
    let listCopy = productList.map((item) => {
      return item;
    });
    listCopy.push(newProduct);
    setProductList(listCopy);
    console.log(listCopy);
    setName("");
    setPrice("");
  };

  const addGroceryItem = () => {
    let newItem = { name: itemName, price: +itemPrice };
    let itemListCopy = groceryItem.map((item) => {
      return item;
    });
    itemListCopy.push(newItem);
    setGroceryItem(itemListCopy);
    console.log(itemListCopy);
  };

  const calculateTotal = () => {
    let total = 0;
    if (!groceryItem.length) {
      return "-";
    } else {
      groceryItem.map((item) => (total += item.price));
      return total;
    }
  };

  const groceryItemDropDown = () => (
    <>
      <label>
        Select Grocery:
        <select
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
          disabled={!productList.length}
        >
          {productList.map((item) => {
            return (
              <option key={item.name} value={item.name}>
                {item.name}
              </option>
            );
          })}
        </select>
      </label>
      <label>
        Price List:
        <select
          value={itemPrice}
          onChange={(e) => setItemPrice(e.target.value)}
          disabled={!productList.length}
        >
          {productList.map((item, index) => {
            return (
              <option key={index} value={item.price}>
                {item.price}
              </option>
            );
          })}
        </select>
      </label>
      <button onClick={addGroceryItem}>Add Grocery</button>
    </>
  );

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

  let addPriceField = () =>
    inputField.map((item, index) => (
      <>
        <h4>{`Product No.${index + 1}`}</h4>
        <input
          type="text"
          name={`productName${index}`}
          value={productName}
          placeholder="Product Name"
          onChange={handleInput}
        />

        <input
          type="number"
          name={`productPrice${index}`}
          value={productPrice}
          placeholder="Product Price"
          onChange={handleInput}
        />
      </>
    ));

  const handleInput = () => {};

  const productInput = () => (
    <>
      {addPriceField()}

      <button
        onClick={() => {
          let copy = [...inputField];
          copy.push({ name: "", price: "" });
          setInputField(copy);
        }}
      >
        Add More Product
      </button>

      <button onClick={addProduct}>Add Product</button>

      <button
        onClick={() => {
          let copy = [...inputField];
          copy.pop();
          setInputField(copy);
        }}
      >
        remove Product Field
      </button>
    </>
  );

  return (
    <div className="container">
      <div className="grocery-item">{groceryItemDropDown()}</div>
      <div className="grocery-list">{groceryList()}</div>
      <div className="grocery-input">{productInput()}</div>
    </div>
  );
}

export default App;
