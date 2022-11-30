import "./ExpenseItem.css";
import ExpensePrice from "./ExpensePrice";

function ExpenseItem(props) {
  return (
    <div className="expense-item">
      <ExpensePrice price={props.price} title={props.title} />
      <div className="expense-item__image">{props.image}</div>
    </div>
  );
}

export default ExpenseItem;
