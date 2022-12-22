import React from "react";
import styled from "styled-components";
import trash from "../assets/trash.png";
import HeroPlus from "../assets/heroicons_plus.svg";
import HeroMinus from "../assets/heroicons_minus.svg";
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

const ExpenseForm = () => {
  return (
    <FormComponent>
      <h1>Expense Tracker</h1>
      <h3>Balance</h3>
      <strong className="balance">$200</strong>
      <table>
        <tbody>
          <tr>
            <td>
              <img src={HeroPlus} alt="Plus Icon" />
            </td>
            <td>$500</td>
            <td>salary</td>
            <td>2022-12-22</td>
            <td className="trash">
              <img src={trash} alt="A black trash" />
            </td>
          </tr>
          <tr>
            <td>
              <img src={HeroMinus} alt="Minus Icon" />
            </td>
            <td>$70</td>
            <td>Shopping</td>
            <td>2022-12-22</td>
            <td className="trash">
              <img src={trash} alt="A black trash" />
            </td>
          </tr>
        </tbody>
      </table>
      <form>
        <select required>
          <option value="income">Income</option>
          <option value="outcome">Outcome</option>
        </select>
        <select required>
          <option value="null" disabled>
            Category
          </option>
          <option value="shopping">Shopping</option>
          <option value="salary">Salary</option>
          <option value="car">Car</option>
        </select>
        <input type="number" min="0" placeholder="Amount" />
        <input type="date" />
        <button type="button" className="submit-form">Add New Item</button>
      </form>
    </FormComponent>
  );
};

export default ExpenseForm;
