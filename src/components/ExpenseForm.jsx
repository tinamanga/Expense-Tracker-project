import { useState } from "react";

function ExpenseForm({ onAddExpense }) {
  const [form, setForm] = useState({
    description: "",
    amount: "",
    category: ""
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newExpense = {
      id: Date.now(),
      ...form,
      amount: parseFloat(form.amount)
    };
    onAddExpense(newExpense);
    setForm({ description: "", amount: "", category: "" });
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="description"
        placeholder="Description"
        value={form.description}
        onChange={handleChange}
        required
      />
      <input
        name="amount"
        type="number"
        placeholder="Amount"
        value={form.amount}
        onChange={handleChange}
        required
      />
      <input
        name="category"
        placeholder="Category"
        value={form.category}
        onChange={handleChange}
        required
      />
      <button type="submit">Add Expense</button>
    </form>
  );
}

export default ExpenseForm;
