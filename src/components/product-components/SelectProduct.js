import "./style/SelectProduct.css";

import { useState, useEffect } from "react";

import { category, subCategory } from "../../productArray";

export default function SelectProduct(props) {
  const { productTypeState, setProductTypeState } = props;

  const [categoryState, setCategoryState] = useState("grocery");

  const [subCategoryState, setSubCategoryState] = useState(
    "fruits & vegetables"
  );

  useEffect(() => {
    // console.log(productTypeState[subCategoryState][0].name);
    // console.log(subCategoryState);
    // console.log("+++", subCategory[categoryState][0]);
    setSubCategoryState(subCategory[categoryState][0]);
  }, [categoryState]);

  return (
    <>
      <div>
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
          value={productTypeState[subCategoryState][0].name}
        >
          {productTypeState[subCategoryState].map((item) => (
            <option key={item.name} name={item.name} value={item.name}>
              {item.name}
            </option>
          ))}
        </select>
      </div>
    </>
  );
}
