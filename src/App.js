import "./App.css";

import { useState } from "react";

function App() {
  let allGroceryProducts = [
    {
      name: "Butter",
      price: 100,
    },
    {
      name: "Cake",
      price: 50,
    },
    {
      name: "Biscuits",
      price: 25,
    },
    {
      name: "Breed",
      price: 20,
    },
    {
      name: "Chocolate",
      price: 100,
    },
    {
      name: "Potato Chips",
      price: 10,
    },
  ];

  const [productList, setProductList] = useState(allGroceryProducts);

  const [groceryItem, setGroceryItem] = useState([]);

  const [itemName, setItemName] = useState("");
  const [itemPrice, setItemPrice] = useState(null);

  const [inputList, setInputList] = useState([{ name: "", price: null }]);

  // console.log(inputField);
  console.log("render");

  const handleInputChange = (e, index) => {
    let name = e.target.name;
    let value = e.target.value;

    const inputListCopy = [...inputList];
    inputListCopy[index][name] = value;
    setInputList(inputListCopy);
  };

  const handleRemoveField = (index) => {
    const inputListCopy = [...inputList];
    inputListCopy.splice(index, 1);
    setInputList(inputListCopy);
  };

  const handleAddField = () => {
    setInputList([...inputList, { name: "", price: "" }]);
  };

  const handleAddProduct = () => {
    setProductList([...productList, ...inputList]);
    setInputList([{ name: "", price: "" }]);
  };

  const productInput = () =>
    inputList.map((item, index) => (
      <div className="product-input">
        <h4>{`Product No.${index + 1}`}</h4>
        <input
          type="text"
          name={`name`}
          value={item.name}
          placeholder="Product Name"
          onChange={(e) => handleInputChange(e, index)}
        />

        <input
          type="number"
          name={`price`}
          value={item.price}
          placeholder="Product Price"
          onChange={(e) => handleInputChange(e, index)}
        />

        <div className="input-btns">
          {inputList.length !== 1 && (
            <button onClick={() => handleRemoveField(index)}>
              remove Product Field
            </button>
          )}
          {inputList.length - 1 === index && (
            <button onClick={handleAddField}>Add More Product</button>
          )}
        </div>
      </div>
    ));

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

  return (
    <div className="container">
      <div className="grocery-item">{groceryItemDropDown()}</div>
      <div className="grocery-list">{groceryList()}</div>
      <div className="grocery-input">
        {productInput()}
        <button onClick={handleAddProduct}>Add Product</button>
      </div>
    </div>
  );
}

export default App;
