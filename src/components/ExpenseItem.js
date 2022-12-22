import React, { useContext } from "react";
import { AccountingContext } from "../contexts/AccountingContext";

import trash from "../assets/trash.png";
import HeroPlus from "../assets/heroicons_plus.svg";
import HeroMinus from "../assets/heroicons_minus.svg";

const ExpenseItem = ({ item }) => {
  const { setAccounts } = useContext(AccountingContext);
  
  function handleRemoveExpense() {
    setAccounts((prev) => {
      const filteredExpenses = prev.filter((expense) => expense.id !== item.id);
      return filteredExpenses;
    });
  }

  return (
    <tr key={item.id}>
      <td>
        <img
          src={item.type === "income" ? HeroPlus : HeroMinus}
          alt="Plus Icon"
        />
      </td>
      <td>${item.amount}</td>
      <td>{item.category}</td>
      <td>{item.date}</td>
      <td className="trash" onClick={handleRemoveExpense}>
        <img src={trash} alt="A black trash" />
      </td>
    </tr>
  );
};

export default ExpenseItem;
