import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [isAdding, setisAdding] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setisAdding(false);
  };

  const startAddingHandler = () => {
    setisAdding(true);
  };

  const cancelAddingHandler = () => {
    setisAdding(false);
  };

  return (
    <div className="new-expense">
      {!isAdding && (
        <button onClick={startAddingHandler}>Add New Expense</button>
      )}
      {isAdding && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={cancelAddingHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
