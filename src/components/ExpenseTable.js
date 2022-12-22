import React from 'react';
import Styled from 'styled-components';
import PieChart from './PieChart';


const Table = Styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    h2 {
      font-size: 28px;
      margin-bottom: 7px;
      text-transform: capitalize;
      color: ${props => props.theme};
    }
    &::after{
      background: ${props => props.theme} !important;
    }
`;
const ExpenseTable = ({theme, type}) => {
  return (
    <Table theme={theme}>
        <h2>{type}</h2>
        <strong>$500</strong>
        <PieChart />
    </Table>
  )
}

export default ExpenseTable