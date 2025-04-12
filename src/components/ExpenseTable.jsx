import { useState } from 'react';

function ExpenseTable({ expenses, onDelete }) {
  const [sortField, setSortField] = useState(null);
  const [ascending, setAscending] = useState(true);

  const sortedExpenses = [...expenses].sort((a, b) => {
    if (!sortField) return 0;

    const fieldA = a[sortField].toLowerCase();
    const fieldB = b[sortField].toLowerCase();

    if (fieldA < fieldB) return ascending ? -1 : 1;
    if (fieldA > fieldB) return ascending ? 1 : -1;
    return 0;
  });

  const handleSort = (field) => {
    if (sortField === field) {
      setAscending(!ascending);
    } else {
      setSortField(field);
      setAscending(true);
    }
  };

  return (
    <table className="expense-table">
      <thead>
        <tr>
          <th onClick={() => handleSort('description')}>Description</th>
          <th onClick={() => handleSort('category')}>Category</th>
          <th>Amount</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {sortedExpenses.map((expense) => (
          <tr key={expense.id}>
            <td>{expense.description}</td>
            <td>{expense.category}</td>
            <td>${expense.amount.toFixed(2)}</td>
            <td>
              <button onClick={() => onDelete(expense.id)}>❌</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ExpenseTable;
