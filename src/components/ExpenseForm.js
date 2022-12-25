import React, { useContext, useState } from "react";
import { v4 as uuid } from 'uuid';
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
    font-size: 26px;
    color: #444;
  }
  .balance {
    font-size: 30px;
    color: green;
    font-weight: 500;
    &.red {
      color: #da2628;
    }
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
  date: 'Not Entered!',
  category: 'car',
  id: 0
};
const ExpenseForm = () => {
  const {setAccounts, accounts}  = useContext(AccountingContext);
  const [accountStatus, setAccountStatus] = useState(init);

  const sumOfIncomes = accounts.filter(account => account.type === 'income').reduce((acc, curr) => acc + curr.amount,0);
  const sumOfExpenses = accounts.filter(account => account.type === 'expense').reduce((acc, curr) => acc + curr.amount,0);

  const balance = Math.floor(sumOfIncomes - sumOfExpenses );
  
  function handleSubmitExpense(e) {
    e.preventDefault();

    setAccounts(prev => {
      return [...prev, {...accountStatus, id: uuid()}]
    }); 
    setAccountStatus(init);
  }
  function updateStatus(e, type) {
    const value = isNaN(e.target.value) ? e.target.value : +e.target.value;

    setAccountStatus(prev => {
      return {
        ...prev, 
        [type]: value
      }
    })
  }
  return (
    <FormComponent>
      <h1>Expense Tracker</h1>
      <h3>Balance</h3>
      <strong className={`balance ${balance < 0 && 'red'}`}>${balance}</strong>
      <ExpensesList />
      <form onSubmit={handleSubmitExpense}>
        <select required onChange={(e)=> updateStatus(e, 'type')} value={accountStatus.type}>
          <option value="income">Income</option>
          <option value="expense">Expense</option>
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
