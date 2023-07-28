import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = ({ onAddExpense }) => {
  const saveExpenseDataHandler = (expense) => {
    const addedExpense = {
      ...expense,
      id: Math.random(),
    };

    onAddExpense(addedExpense);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpense={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
