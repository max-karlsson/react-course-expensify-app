

export default (expenses) => {
  const sum = expenses.map((expense) => parseInt(expense.amount))
  .reduce((result, amount) => (result + amount), 0);
  return sum;
};