import "./ExpenseForm.css";
import { useState } from "react";

const ExpenseForm = ({ onSaveExpense }) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };
  const amountChangeHandler = (event) => {
    setAmount(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setDate(event.target.value);
  };

  // const inputChangeHandler = (identifier, value) => {
  //   if (identifier === "title") {
  //     setTitle(value);
  //   } else if (identifier === "number") {
  //     setDate(value);
  //   } else {
  //     setNumber(value);
  //   }
  // };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title,
      amount,
      date: new Date(date),
    };

    onSaveExpense(expenseData);

    setDate("");
    setAmount("");
    setTitle("");
  };

  return (
    <form action="" onSubmit={onSubmitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="">Title</label>
          <input type="text" onChange={titleChangeHandler} value={title} />
        </div>
        <div className="new-expense__control">
          <label htmlFor="">Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={amount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="">Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2023-12-31"
            value={date}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Submit</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
