import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
import { useState } from "react";

const NewExpense = ({ onAddExpense }) => {
  const [showNewExpenseForm, setShowNewExpenseForm] = useState(false);

  const saveExpenseDataHandler = (expense) => {
    const addedExpense = {
      ...expense,
      id: Math.random(),
    };

    onAddExpense(addedExpense);
  };

  const addExpenseFormHandler = () => {
    setShowNewExpenseForm((prevState) => {
      return setShowNewExpenseForm(!prevState);
    });
  };

  if (!showNewExpenseForm) {
    return (
      <div className="new-expense">
        <button className="" onClick={addExpenseFormHandler}>
          Add Expense
        </button>
      </div>
    );
  }

  return (
    <div className="new-expense">
      <ExpenseForm
        onCancelExpense={addExpenseFormHandler}
        onSaveExpense={saveExpenseDataHandler}
      />
    </div>
  );
};

export default NewExpense;
