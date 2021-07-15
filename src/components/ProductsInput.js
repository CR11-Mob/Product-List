import "./ProductsInput.css";

export default function ProductsInput(props) {
  const {
    productList,
    setProductList,
    inputList,
    setInputList,
    error,
    setError,
  } = props;

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
    setProductList([...productList, ...inputList]);
    setInputList([{ name: "", price: "" }]);
  };

  const inputElements = () =>
    inputList.map((item, index) => (
      <div className="product-input">
        <h4>{`Product No.${index + 1}`}</h4>
        <input
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
          type="number"
          name={`price`}
          value={item.price}
          placeholder="Product Price"
          onChange={(e) => {
            e.target.value.length === 0 ? setError(true) : setError(false);
            handleInputChange(e, index);
          }}
        />

        <div className="input-btns">
          {inputList.length !== 1 && (
            <span
              onClick={() => handleRemoveField(index)}
              style={{ color: "red" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-x"
                viewBox="0 0 16 16"
              >
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
              </svg>
              remove
            </span>
          )}
          {!error && inputList.length - 1 === index && (
            <span onClick={handleAddField}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-plus"
                viewBox="0 0 16 16"
              >
                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
              </svg>
              Add
            </span>
          )}
        </div>
      </div>
    ));

  const addProductElement = () => (
    <>
      <div className="input-area"> {inputElements()}</div>

      <div className="add-btn-area">
        <span onClick={handleAddProduct}>ADD PRODUCT</span>
      </div>
    </>
  );

  return addProductElement();
}
