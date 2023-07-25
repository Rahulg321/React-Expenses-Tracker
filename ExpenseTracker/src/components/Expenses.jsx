import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "./Card";

export default function Expenses({ expenses }) {
  return (
    <Card className="expenses">
      <ExpenseItem expense={expenses[0]} />
      <ExpenseItem expense={expenses[1]} />
      <ExpenseItem expense={expenses[2]} />
    </Card>
  );
}
