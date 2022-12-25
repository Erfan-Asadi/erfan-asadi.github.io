import React, {useContext} from 'react';
import Styled from 'styled-components';
import PieChart from './PieChart';
import { AccountingContext } from '../contexts/AccountingContext';

const Table = Styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    h2 {
      font-size: 28px;
      margin-bottom: 7px;
      text-transform: capitalize;
      font-weight: 500;
      color: ${props => props.theme};
    }
    strong {
      font-size: 32px;
      margin: 10px 0;
      font-weight: 400;
      color: ${props => props.theme};
      &.income  {
        color: #22C55E;
      }
    }
    &::after{
      background: ${props => props.theme} !important;
    }
`;
const ExpenseTable = ({theme, type}) => {
  const {accounts}  = useContext(AccountingContext);
  const arrayOfExpenses = accounts.filter(account => account.type === type);
  const sumOfAmounts = arrayOfExpenses.reduce((acc, curr) => acc + curr.amount, 0);
  return (
    <Table theme={theme}>
        <h2>{type}</h2>
        <strong className={type === 'income' && `income`}>${sumOfAmounts.toFixed(2)}</strong>
        <PieChart />
    </Table>
  )
}

export default ExpenseTable