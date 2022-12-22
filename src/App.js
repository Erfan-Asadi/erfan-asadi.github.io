import React from 'react'
import ExpenseForm from './components/ExpenseForm'
import ExpenseTable from './components/ExpenseTable'
import Styled from 'styled-components';
import AccountingContextProvider from './contexts/AccountingContext';

const AppComponent = Styled.main`
    display: flex;
    align-items: flex-start;
    padding: 15px;
    gap: 15px;
    
    
    & > * {
      background: #f8f8f8;
      border-radius: 6px;
      box-shadow: 0 1px 3px #999;
      padding: 20px;
      flex-grow: 1;
      position: relative;
      overflow: hidden;

      &::after {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        height: 10px;
        width: 100%;
        background-image: linear-gradient(to right, #2B61E5, #DA2628);
      }
    }

`;

const App = () => {



  return (
    <AccountingContextProvider>
      <AppComponent>
        <ExpenseTable theme="#2B61E5" type="income"/>
        <ExpenseForm />
        <ExpenseTable theme="#da2628" type="expense" />
      </AppComponent>
    </AccountingContextProvider>
  )
}

export default App