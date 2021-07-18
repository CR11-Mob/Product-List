import { useEffect } from "react";
import "./ProductsInput.css";

export default function ProductsInput(props) {
  const {
    inputList,
    setInputList,
    error,
    setError,
    category,
    subCategory,
    subCategoryState,
    setSubCategoryState,
    productType,
    productTypeState,
    setProductTypeState,
    addProductState,
    setAddProductState,
  } = props;

  const handleCategoryChange = (e) => {
    let value = e.target.value;
    console.log(value);

    setSubCategoryState(subCategory[value]);
  };
  useEffect(() => {
    console.log("inppppuuutt", inputList);
  }, [props.inputList]);

  const handleSubCategory = (e, index) => {
    let value = e.target.value;
    console.log("Sub category", value);
    let name = e.target.name;

    const inputListCopy = [...inputList];
    inputListCopy[index][name] = value;
    setInputList(inputListCopy);

    // console.log("--- ", productType[value]);
    setProductTypeState(productType[value]);
  };

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
    setError(true);
    setInputList([...inputList, { name: "", price: "" }]);
  };

  const handleAddProduct = () => {
    let inputsCopy = [...inputList];
    let addProductStateCopy = { ...addProductState };

    for (let i = 0; i < inputList.length; i++) {
      console.log("lllliiiisssttt", inputList[i]["sub-categories"]);
      console.log("all producst", addProductStateCopy);
      const sub = inputsCopy[i]["sub-categories"];
      delete inputsCopy[i]["sub-categories"];

      addProductStateCopy[sub].push(inputsCopy[i]);
    }
    console.log({ addProductStateCopy });
    setAddProductState(addProductStateCopy);
    // setProductTypeState([...productTypeState, ...inputList]);
    // let productsObjCopy = { ...addProductState };
    // console.log(productsObjCopy[productTypeState]);
    setInputList([{ name: "", price: "" }]);
    console.log(productTypeState);
  };

  useEffect(() => {
    console.log(productTypeState);
    console.log(productType);
  }, [productTypeState, productType]);

  const inputElements = (item, index) => (
    <>
      <input
        key={`name${index}`}
        type="text"
        name={`name`}
        value={item.name}
        placeholder="Product Name"
        onChange={(e) => {
          e.target.value.length < 3 ? setError(true) : setError(false);
          handleInputChange(e, index);
        }}
      />

      <input
        key={`price${index}`}
        type="number"
        name={`price`}
        value={item.price}
        placeholder="Product Price"
        onChange={(e) => {
          e.target.value.length === 0 ? setError(true) : setError(false);
          handleInputChange(e, index);
        }}
      />
    </>
  );

  const removeBtnElements = (index) =>
    inputList.length !== 1 && (
      <span onClick={() => handleRemoveField(index)} style={{ color: "red" }}>
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
    );

  const addBtnElements = (index) =>
    !error &&
    inputList.length - 1 === index && (
      <span onClick={handleAddField}>
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
        Add
      </span>
    );

  const addProductElement = () => (
    <>
      <div className="input-area">
        {" "}
        {inputList.map((item, index) => (
          <div className="product-input">
            <h4>{`Product No.${index + 1}`}</h4>
            {
              <>
                <label>Category</label>

                <select name={`categories`} onChange={handleCategoryChange}>
                  {category.map((item) => {
                    return (
                      <option key={item} name={item} value={item}>
                        {item}
                      </option>
                    );
                  })}
                </select>

                <select
                  name={`sub-categories`}
                  onChange={(e) => handleSubCategory(e, index)}
                >
                  {subCategoryState.map((item) => {
                    return (
                      <option key={item} name={item} value={item}>
                        {item}
                      </option>
                    );
                  })}
                </select>
              </>
            }

            {inputElements(item, index)}

            <div className="input-btns">
              {removeBtnElements(index)}
              {addBtnElements(index)}
            </div>
          </div>
        ))}
      </div>

      <div className="add-btn-area">
        <span onClick={handleAddProduct}>ADD PRODUCT</span>
      </div>
    </>
  );

  return addProductElement();
}
