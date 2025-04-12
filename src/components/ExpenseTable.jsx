function ExpenseTable({ expenses }) {
  return (
    <table>
      <thead>
        <tr>
          <th>
            <button >Expense⬍</button>
          </th>
          <th>
            <button >Description ⬍</button>
          </th>
          <th>
          <button>Amount ⬍</button>
          </th>
          <th>
            <button>Category ⬍</button>
          </th>
        </tr>
      </thead>
      <tbody>
        {expenses.map((expense) => (
          <tr key={expense.id}>
            <td>{expense.expenseName}</td>
            <td>{expense.description}</td>
            <td>${expense.amount}</td>
            <td>{expense.category}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ExpenseTable;
