import React, { useContext } from "react";
import { AccountingContext } from "../contexts/AccountingContext";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = () => {
    const { accounts } = useContext(AccountingContext);

  return (
    <table>
      <tbody>
        {accounts.map((item) => (
          <ExpenseItem key={item.id} item={item} />
        ))}
      </tbody>
    </table>
  );
};

export default ExpensesList;
