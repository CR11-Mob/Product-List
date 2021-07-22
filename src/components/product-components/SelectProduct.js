import "./style/SelectProduct.css";

import { useState, useEffect } from "react";

import { category, subCategory } from "../../productArray";

export default function SelectProduct(props) {
  const { productTypeState, setProducts, products } = props;

  const [categoryState, setCategoryState] = useState("grocery");

  const [subCategoryState, setSubCategoryState] = useState(
    "fruits & vegetables"
  );

  const [productItemState, setProductItemState] = useState(0);

  useEffect(() => {
    // console.log(productTypeState[subCategoryState][0].name);
    // console.log(subCategoryState);
    // console.log("+++", subCategory[categoryState][0]);
    // console.log("product:", products);
    setSubCategoryState(subCategory[categoryState][0]);
  }, [categoryState]);

  return (
    <>
      <div className="heading">
        <h4>Select Product</h4>
      </div>
      <div className="product-dropdown">
        <select
          key={`category`}
          name={`category`}
          value={categoryState}
          onChange={(e) => {
            setCategoryState(e.target.value);
          }}
        >
          {category.map((singleCategory) => (
            <option
              key={singleCategory}
              name={singleCategory}
              value={singleCategory}
            >
              {singleCategory}
            </option>
          ))}
        </select>

        <select
          key={`subCategory`}
          name={`subCategory`}
          value={subCategoryState}
          onChange={(e) => {
            setSubCategoryState(e.target.value);
          }}
        >
          {subCategory[categoryState].map((singleSubCategory) => (
            <option
              key={singleSubCategory}
              name={singleSubCategory}
              value={singleSubCategory}
            >
              {singleSubCategory}
            </option>
          ))}
        </select>

        <select
          key={`item`}
          name={`item`}
          value={
            productTypeState[subCategoryState].name &&
            productTypeState[subCategoryState].price
          }
          onChange={(e) => {
            console.log(e.target.value);
            setProductItemState(e.target.value);
            console.log(subCategoryState, e.target.value);
            // setProducts([
            //   ...products,
            //   productTypeState[subCategoryState][e.target.value],
            // ]);
          }}
        >
          {productTypeState[subCategoryState].map((item, index) => (
            <option key={item.name} name={item.name} value={index}>
              {item.name}
              &nbsp; &nbsp;&nbsp; {`Rs.${item.price}`}
            </option>
          ))}
        </select>
      </div>

      <div className="add-to-list">
        <button
          onClick={() => {
            console.log("****", subCategoryState, productItemState);
            console.log(productTypeState[subCategoryState][productItemState]);
            let productsCopy = [...products];
            productsCopy.push(
              productTypeState[subCategoryState][productItemState]
            );
            setProducts(productsCopy);
            setProductItemState(0);
          }}
        >
          Add To List
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="20"
            fill="currentColor"
            className="bi bi-arrow-right-short"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
            />
          </svg>
        </button>
      </div>
    </>
  );
}
