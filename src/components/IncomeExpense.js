import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
export const IncomeExpense = () => {

    const  {transactions} = useContext(GlobalContext);

    //M1: 
    const plus = transactions.map(transaction =>  transaction.amount>0 ? transaction.amount : null)
    const income = plus.reduce((total , item ) =>  total += item , 0 ).toFixed(2)

    //M2: 
    const All = transactions.map(transaction => transaction.amount)
    const expenses = All.filter(item => item<0).reduce((total , item ) => total += item , 0 ).toFixed(2)


    return (<>

        <div className='inc-exp-container'>
         {/* Income-Expense */}
            
            <br/>
            <div className='inc'>
                <h4> Income</h4>
                <p id="money-plus" className='money plus'> $+{income} </p>
            </div>
            <div className='exp'>
                <h4> Expenses</h4>
                <p id="money-minus" className='money minus'> ${expenses} </p>
            </div>
        </div>

    </>)
}
