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
  
//The search function(predictate function)
const filteredExpenses=expenses.filter((expense)=>{
return expense.expenseName.toLowerCase().includes(searchTerm.toLowerCase()) ||  expense.description.toLowerCase().includes(searchTerm.toLowerCase());
});

  return (
    <div className="App">
      <h1>Expense Tracker 💸</h1>
      <p>Start taking control of your finances and life,Record,Categorize and analyze your spending</p>
      <div className="main-layout">
        <br />
      <div className="left-column">
        </div>
      <div className="middle-column">
       <ExpenseForm onAddExpense={handleAddExpense} />
        </div>
        <div className="right-column">
        <SearchBar searchTerm={searchTerm} onSearch={setSearchTerm} /><br /><br />
          <ExpenseTable
            expenses={filteredExpenses}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
