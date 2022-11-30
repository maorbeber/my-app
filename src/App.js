import "./App.css";
import ExpenseItem from "./components/ExpenseItem";
import myImages from "./images/images.js";

function App() {
  const expense = [
    { title: "juice", price: 30 },
    { title: "milk", price: 20 },
    { title: "water", price: 10 },
    { title: "beer", price: 50 },
  ];
  const size = "64px";

  return (
    <div>
      <h2>This is our grocery list</h2>
      <ExpenseItem
        title={expense[0].title}
        image=<img src={myImages[0]} alt="juice" width={size}></img>
        price={expense[0].price}
      />
      <ExpenseItem
        title={expense[1].title}
        image=<img src={myImages[1]} alt="milk" width={size}></img>
        price={expense[1].price}
      />
      <ExpenseItem
        title={expense[2].title}
        image=<img src={myImages[2]} alt="water" width={size}></img>
        price={expense[2].price}
      />
      <ExpenseItem
        title={expense[3].title}
        image=<img src={myImages[3]} alt="beer" width={size}></img>
        price={expense[3].price}
      />
    </div>
  );
}

export default App;
