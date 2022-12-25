import React, {createContext, useState} from 'react';
import { v4 as uuid } from 'uuid';

const init = [
    {
        type: 'income',
        amount: 30.24,
        id: uuid().slice(0, 7),
        category: 'shopping',
        date: '2020-12-10'
    },
    {
        type: 'income',
        amount: 73.8,
        id: uuid().slice(0, 7),
        category: 'car',
        date: '2020-05-04'
    },
    {
        type: 'expense',
        amount: 45.2,
        id: uuid().slice(0, 7),
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