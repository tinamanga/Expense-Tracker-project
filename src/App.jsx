import { useState } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseTable from "./components/ExpenseTable";
import SearchBar from "./components/SearchBar";

function App() {
  const [expenses, setExpenses] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleAddExpense = (newExpense) => {
    setExpenses([...expenses, newExpense]);
  };

  // The search function (predicate function)
  const filteredExpenses = expenses.filter((expense) => {
    return (
      expense.expenseName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      expense.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  // Sorting by description or category
  const sortBy = (columnName) => {
    const sortedData = [...expenses].sort((a, b) => {
      // Handling sorting for both description and category
      return a[columnName]
        .toLowerCase()
        .localeCompare(b[columnName].toLowerCase());
    });
    setExpenses(sortedData);
  };

  const handleDelete = (indexToDelete) => {
    const updatedData = expenses.filter((_, index) => index !== indexToDelete);
    setExpenses(updatedData);
  };

  return (
    <>
      <div className="App">
        <h1>Expense Tracker</h1>
        <p>
          Start taking control of your finances and life. Record, categorize, and
          analyze your spending.
        </p>
        <div className="main-layout">
          <div className="left-column"></div>
          <div className="middle-column">
            <ExpenseForm onAddExpense={handleAddExpense} />
          </div>
          <div className="right-column">
            <SearchBar searchTerm={searchTerm} onSearch={setSearchTerm} />
            <ExpenseTable
              expenses={filteredExpenses}
              onSort={sortBy}
              onDelete={handleDelete}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
