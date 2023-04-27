import React from 'react';
import { formatCurrency, formatDateToLocalString } from '../helpers';

const ExpenseItem = ({ expense }) => {
  return (
    <>
      <td>{expense.name}</td>
      <td>{formatCurrency(expense.amount)}</td>
      <td>{formatDateToLocalString(expense.createdAt)}</td>
    </>
  );
};

export default ExpenseItem;
