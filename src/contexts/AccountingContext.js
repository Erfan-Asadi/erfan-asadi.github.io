import React, {createContext, useState} from 'react';

const init = [
    {
        type: 'income',
        amount: 3.24,
        id: 1,
        category: 'shopping',
        date: '2020-12-10'
    },
    {
        type: 'income',
        amount: 403.8,
        id: 2,
        category: 'car',
        date: '2020-05-04'
    },
    {
        type: 'expense',
        amount: 45.2,
        id: 3,
        category: 'sport',
        date: '2023-12-10'
    }
]
export const AccountingContext = createContext(null);

const AccountingContextProvider = (props) => {
    const [accounts, setAccounts] = useState(init);
    return (
    <AccountingContext.Provider value={{accounts, setAccounts}}>
        {props.children}
    </AccountingContext.Provider>
  )
}

export default AccountingContextProvider