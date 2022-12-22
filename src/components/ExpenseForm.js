import React, { useContext, useState } from "react";
import styled from "styled-components";
import ExpensesList from "./ExpensesList";
import { AccountingContext } from "../contexts/AccountingContext";
const FormComponent = styled.div`
  text-align: center;

  h1 {
    font-size: 34px;
    background: -webkit-linear-gradient(0deg, #2B61E5, #da2628 );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 800;
  }
  h3 {
    margin: 14px 0 8px;
    font-size: 20px;
  }
  .balance {
    font-size: 30px;
    color: green;
    font-weight: 500;
  }
  table {
    width: 100%;
    border-collapse: collapse;
    margin: 18px 0;
    border-top: 1px solid #ccc;

    tr {
      border-bottom: 1px solid #ccc;
      text-transform: capitalize;
      td {
        padding: 10px 3px;
      }
      &:nth-of-type(1) {
        td {
          padding: 22px 3px 10px;
        }
      }
    }
  }
  & :is(select, input) {
    width: 100%;
    display: block;
    margin-bottom: 18px;
    height: 42px;
    border: 1px solid #ccc;
    border-radius: 7px;
    padding: 8px;
    font-size: 17px;
  }
  select,
  input[type="date"] {
    cursor: pointer;
  }
  .trash img {
    width: 20px;
    cursor: pointer;
  }
  img {
    vertical-align: middle;
  }
  .submit-form {
    padding: 14px 35px;
    border-radius: 5px;
    border: 2px solid red;
    background-color: transparent;
    color: #3f3ffd;
    font-size: 18px;
    font-weight: 500;
    margin-top: 17px;
    cursor: pointer;
    &:hover {
      color: red;
    }
  }
`;
const init = {
  amount: 0,
  type: 'income',
  date: 'Date not Entered!',
  category: 'car',
  id: Math.floor(Math.random() * 1000)
};

const ExpenseForm = () => {
  const {setAccounts}  = useContext(AccountingContext);
  const [accountStatus, setAccountStatus] = useState(init);

  function handleSubmitExpense(e) {
    e.preventDefault();

    setAccounts(prev => {
      return [...prev, accountStatus]
    });
    setAccountStatus(init);
  }
  function updateStatus(e, type) {
    setAccountStatus(prev => {
      return {
        ...prev, 
        [type]: e.target.value
      }
    })
  }
  return (
    <FormComponent>
      <h1>Expense Tracker</h1>
      <h3>Balance</h3>
      <strong className="balance">$200</strong>
      <ExpensesList />
      <form onSubmit={handleSubmitExpense}>
        <select required onChange={(e)=> updateStatus(e, 'type')} value={accountStatus.type}>
          <option value="income">Income</option>
          <option value="outcome">Outcome</option>
        </select>
        <select required onChange={(e)=> updateStatus(e, 'category')} value={accountStatus.category}>
          <option value="shopping">Shopping</option>
          <option value="salary">Salary</option>
          <option value="car">Car</option>
        </select>
        <input type="number" min="0" placeholder="Amount" onChange={(e)=> updateStatus(e, 'amount')} value={accountStatus.amount} />
        <input type="date" onChange={(e)=> updateStatus(e, 'date')} />
        <button className="submit-form">Add New Item</button>
      </form>
    </FormComponent>
  );
};

export default ExpenseForm;
