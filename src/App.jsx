import { useState } from "react";
import { initialExpenses } from "./data/dummyData";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseTable from "./components/ExpenseTable";
import SearchBar from "./components/SearchBar";

function App() {
  const [expenses, setExpenses] = useState(initialExpenses);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortKey, setSortKey] = useState("");

  // 🧠 Add and update
  const handleAddExpense = (newExpense) => {
    const expenseWithId = {
      ...newExpense,
      id: Date.now(),
      amount: parseFloat(newExpense.amount),
    };
    setExpenses([...expenses, expenseWithId]);
  };
  

  // 🧠 Delete
  const handleDelete = (id) => {
    const updated = expenses.filter((e) => e.id !== id);
    setExpenses(updated);
  };

  // 🧠 Sort
  const handleSort = (key) => {
    setSortKey((prev) => (prev === key ? "" : key));
  };

  // 🧠 Filter + Sort
  const filteredExpenses = expenses
    .filter((exp) =>
      [exp.description, exp.category]
        .join(" ")
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (sortKey === "description" || sortKey === "category") {
        return a[sortKey].localeCompare(b[sortKey]);
      }
      return 0;
    });

  return (
    <div className="App">
      <h1>Expense Tracker 💸</h1>
      <div className="main-layout">
      <div className="left-column">
        <SearchBar searchTerm={searchTerm} onSearch={setSearchTerm} /><br /><br />
          <ExpenseForm onAddExpense={handleAddExpense} />
        </div>
        <div className="right-column">
          
          <ExpenseTable
            expenses={filteredExpenses}
            onDelete={handleDelete}
            onSort={handleSort}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
