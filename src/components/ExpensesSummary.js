import React from 'react';
import numeral from 'numeral';
import { connect } from 'react-redux';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';

export const ExpensesSummary = ({ expenseCount, expensesTotal }) => {
  const expenseWord = expenseCount > 1 ? 'expenses' : 'expense';
  const formattedExpensestotal = numeral(expensesTotal / 100).format('$0,0.00');
  return (
    <div>
      <h1>
        {expenseCount > 0 && `Viewing ${expenseCount} ${expenseWord} totalling ${formattedExpensestotal}`}
      </h1>
    </div>
  );
};

const mapStateToProps = (state) => {
  const visibleExpenses = selectExpenses(state.expenses, state.filters);

  return {
    expenseCount: visibleExpenses.length,
    expensesTotal: selectExpensesTotal(visibleExpenses)
  };
};

export default connect(mapStateToProps)(ExpensesSummary);