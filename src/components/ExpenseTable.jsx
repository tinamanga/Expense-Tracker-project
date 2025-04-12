function ExpenseTable({ expenses,onSort,onDelete}) {
  return (
    <table>
      <thead>
        <tr>
          <th>
            <button >Expense</button>
          </th>
          <th>
            <button onClick={()=>onSort("description")} >Description ⬍</button>
          </th>
          <th>
          <button>Amount </button>
          </th>
          <th>
            <button onClick={()=>onSort("category")}>Category ⬍</button>
          </th>
          <th>
          <button >Action</button></th>
        </tr>
      </thead>
      <tbody>
        {expenses.map((expense,index) => (
          <tr key={expense.id}>
            <td>{expense.expenseName}</td>
            <td>{expense.description}</td>
            <td>${expense.amount}</td>
            <td>{expense.category}</td>
            <td> <button onClick={()=>onDelete(index)}>Delete </button></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ExpenseTable;
