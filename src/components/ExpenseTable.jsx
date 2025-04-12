function ExpenseTable({ expenses, onDelete, onSort }) {
  return (
    <table>
      <thead>
        <tr>
          <th>
            <button onClick={() => onSort("description")}>Description ⬍</button>
          </th>
          <th>Amount</th>
          <th>
            <button onClick={() => onSort("category")}>Category ⬍</button>
          </th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {expenses.map((expense) => (
          <tr key={expense.id}>
            <td>{expense.description}</td>
            <td>${expense.amount.toFixed(2)}</td>
            <td>{expense.category}</td>
            <td>
              <button onClick={() => onDelete(expense.id)}>🗑️ Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ExpenseTable;
