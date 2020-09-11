import selectExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('should return 0 if no expenses', () => {
  const sum = selectExpensesTotal([]);
  expect(sum).toBe(0);
});

test('should correctly add up single expenses', () => {
  const sum = selectExpensesTotal([expenses[0]]);
  expect(sum).toBe(expenses[0].amount);
});

test('should correctly add up multiple expenses', () => {
  const sum = selectExpensesTotal(expenses);
  expect(sum).toBe(expenses[0].amount + expenses[1].amount + expenses[2].amount);
});