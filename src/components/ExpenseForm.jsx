import React, { useState } from "react";

function ExpenseForm({ onAddExpense }) {
const[expenseName,setExpenseName]=useState("")
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (expenseName && description && amount && category && date) {
    onAddExpense({ expenseName,description, amount, category, date });
    
      setExpenseName("");
      setDescription("");
      setAmount("");
      setCategory("");
      setDate("");
    } else {
      alert("Please fill out all fields");
    }
  };

  return (
    <>
    <div className="card">
      
      <form onSubmit={handleSubmit} className="expense-form">
      <h2>Add Expense</h2>
      <h4>Enter your expense details below</h4>
        <input
          type="text"
          placeholder="Enter expense  name"
          value={expenseName}
          onChange={(e) => setExpenseName(e.target.value)}
          className="form-input"
        />
        <input
          type="text"
          placeholder="Enter expense description "
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="form-input"
        />
        <input
          type="number"
          placeholder="Enter amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="form-input"
        />
        <input
          type="text"
          placeholder="Enter expense category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="form-input"
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="form-input"
        />
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
      </div>
    </>
  );
}

export default ExpenseForm;
