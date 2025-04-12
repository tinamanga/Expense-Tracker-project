
import { useState } from "react";
import { initialExpenses } from "./data/dummyData";
import ExpenseTable from "./components/ExpenseTable";
import ExpenseForm from "./components/ExpenseForm";

function App() {

    const [expenses, setExpenses] = useState(initialExpenses);
    return (
      <div className="App">
        <h1>Expense Tracker 💰</h1>
        <ExpenseTable expenses={filteredExpenses} />
        <SearchBar searchTerm={searchTerm} onSearch={setSearchTerm} />
        <ExpenseForm onAddExpense={(e) => setExpenses([...expenses, e])} />
      </div>
    );
  }
  
  export default App;
  