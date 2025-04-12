
import { useState } from "react";
import { initialExpenses } from "./data/dummyData";
import ExpenseTable from "./components/ExpenseTable";

function App() {

    const [expenses, setExpenses] = useState(initialExpenses);
    return (
      <div className="App">
        <h1>Expense Tracker 💰</h1>
        <ExpenseTable expenses={expenses} />
      </div>
    );
  }
  
  export default App;
  