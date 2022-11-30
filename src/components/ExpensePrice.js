import "./ExpensePrice.css";

function ExpensePrice(props) {
  const price = props.price;
  const title = props.title;
  // const month = props.date.toLocaleString("en-US", { month: "long" });
  // const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  // const year = props.date.getFullYear();

  return (
    <div className="expense-price">
      <div className="expense-price__month"> {title} </div>
      <div className="expense-price__day"> {price} </div>
    </div>
  );
}

export default ExpensePrice;
