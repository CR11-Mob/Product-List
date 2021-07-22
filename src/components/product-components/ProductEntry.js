import { useState } from "react";
import "./style/ProductEntry.css";
import { category, subCategory } from "../../productArray";

export default function ProductEntry(props) {
  const { productTypeState, setProductTypeState } = props;

  const defaultValue = {
    category: "grocery",
    subCategory: "fruits & vegetables",
    name: "",
    price: "",
  };

  const [inputList, setInputList] = useState([
    {
      category: "grocery",
      subCategory: "fruits & vegetables",
      name: "",
      price: "",
    },
  ]);

  const handleCategoryChange = (e, index) => {
    console.log(e.target.value);
    let inputListCopy = [...inputList];
    inputListCopy[index].category = e.target.value;
    inputListCopy[index].subCategory = subCategory[e.target.value][0];
    setInputList(inputListCopy);
  };

  const handleSubCategoryChange = (e, index) => {
    console.log(e.target.value);
    let value = e.target.value;
    let inputListCopy = [...inputList];
    inputListCopy[index].subCategory = value;
    setInputList(inputListCopy);
  };

  const handleInputChange = (e, index) => {
    let name = e.target.name;
    let value = e.target.value;

    const inputListCopy = [...inputList];
    inputListCopy[index][name] = value;
    setInputList(inputListCopy);
  };

  const handleRemoveBtn = (index) => {
    let inputListCopy = [...inputList];
    let spliceItem = inputListCopy.splice(index, 1);
    console.log("splice item:", spliceItem);
    setInputList(inputListCopy);
  };

  const handleAddProduct = () => {
    let inputsCopy = [...inputList];
    let productTypeCopy = { ...productTypeState };

    for (let i = 0; i < inputList.length; i++) {
      if (inputList[i].name !== "" && inputList[i].price !== "") {
        // console.log("list Sub-category:", inputList[i]["subCategory"]);
        // console.log("all products", productTypeCopy);
        const sub = inputsCopy[i]["subCategory"];
        // console.log("---", sub);

        productTypeCopy[sub].push({
          name: inputsCopy[i].name,
          price: +inputsCopy[i].price,
        });
      } else {
        return;
      }
    }
    // console.log({ productTypeCopy });
    setProductTypeState(productTypeCopy);

    setInputList([defaultValue]);
  };

  return (
    <>
      <div className="input-area">
        {inputList.map((item, index) => (
          <div className="product-input">
            <h4>{`Product No.${index + 1}`}</h4>

            <div className="input-fields">
              <select
                key={`category${index}`}
                name={`category`}
                value={item.category}
                onChange={(e) => {
                  handleCategoryChange(e, index);
                }}
              >
                {category.map((singleCategory) => (
                  <option name={singleCategory} value={singleCategory}>
                    {singleCategory}
                  </option>
                ))}
              </select>

              <select
                key={`subCategory${index}`}
                name={`subCategory`}
                value={item.subCategory}
                onChange={(e) => {
                  handleSubCategoryChange(e, index);
                }}
              >
                {subCategory[item.category].map((singleSubCategory) => (
                  <option name={singleSubCategory} value={singleSubCategory}>
                    {singleSubCategory}
                  </option>
                ))}
              </select>

              <input
                key={`name${index}`}
                name={`name`}
                type="text"
                value={item.name}
                placeholder="Product Name"
                onChange={(e) => {
                  handleInputChange(e, index);
                }}
              />
              <input
                key={`price${index}`}
                name={`price`}
                type="number"
                value={item.price}
                placeholder="Product Price"
                onChange={(e) => {
                  handleInputChange(e, index);
                }}
              />
            </div>

            <div className="add-remove-btn">
              {inputList.length !== 1 && (
                <span
                  onClick={() => handleRemoveBtn(index)}
                  style={{ color: "red" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-x"
                    viewBox="0 0 16 16"
                  >
                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                  </svg>
                  remove
                </span>
              )}

              {inputList.length - 1 === index && (
                <span
                  onClick={() => setInputList([...inputList, defaultValue])}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-plus"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                  </svg>
                  add
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="add-products-btn">
        <span onClick={handleAddProduct}>ADD PRODUCTS</span>
      </div>
    </>
  );
}
