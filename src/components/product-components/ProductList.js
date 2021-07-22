import "./style/productList.css";

export default function ProductList(props) {
  const { products } = props;

  const calculateTotal = () => {
    let total = 0;
    if (!products.length) {
      return "-";
    } else {
      products.map((item) => (total += item.price));
      return total;
    }
  };

  return (
    <table id="grocery-table">
      <thead className="table-head">
        <tr>
          <th>SL No.</th>
          <th>Product Name</th>
          <th>Product Price</th>
        </tr>
      </thead>
      <tbody>
        {!products.length ? (
          <tr>
            <td style={{ textAlign: "center" }}>-</td>
            <td style={{ textAlign: "center" }}>-</td>
            <td style={{ textAlign: "center" }}>-</td>
          </tr>
        ) : (
          products.map((item, index) => (
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
}
