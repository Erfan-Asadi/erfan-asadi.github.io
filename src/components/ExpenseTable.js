import React, { useContext } from "react";
import Styled from "styled-components";
import PieChart from "./PieChart";
import { AccountingContext } from "../contexts/AccountingContext";

function getPercentage(partialValue, totalValue) {
  return +((100 * partialValue) / totalValue).toFixed(2);
}

const Table = Styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    h2 {
      font-size: 28px;
      margin-bottom: 7px;
      text-transform: capitalize;
      font-weight: 500;
      color: ${(props) => props.theme};
    }
    strong {
      font-size: 32px;
      margin: 10px 0;
      font-weight: 400;
      color: ${(props) => props.theme};
      &.income  {
        color: #22C55E;
      }
    }
    &::after{
      background: ${(props) => props.theme} !important;
    }
`;
const ExpenseTable = ({ theme, type }) => {
  const { accounts } = useContext(AccountingContext);
  const arrayOfExpenses = accounts.filter((account) => account.type === type);
  const sumOfExpensesAmounts = arrayOfExpenses.reduce(
    (acc, curr) => acc + curr.amount,
    0
  );

  const changedToPercentageAmounts = arrayOfExpenses
    .map((account) => {
      //Getting the percentage of each amount from the total amount
      const percent = getPercentage(account.amount, sumOfExpensesAmounts);
      return percent;

      // and sort them
    })
    .sort((a, b) => a - b);

  return (
    <Table theme={theme}>
      <h2>{type}</h2>
      <strong className={type === "income" ? `income` : ""}>
        ${sumOfExpensesAmounts.toFixed(2)}
      </strong>
      <PieChart percentages={changedToPercentageAmounts} type={type} />
    </Table>
  );
};

export default ExpenseTable;
