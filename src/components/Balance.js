import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';

const Balance = () => {

  const { transactions } = useContext(GlobalContext)
  let bal = 0
  const amounts = transactions.map(transaction => transaction.amount) //mapping amounts of all transactions to an array = 'amounts'
  // const total = amounts.reduce((balance , item ) => { balance += item }, 0 ).toFixed(2)
  for(let i=0;i<amounts.length;i++){
    bal += amounts[i]
  }
  let finalBal = bal.toFixed(2) 

  return (<>
  <div className='balcont'>

    <h2>Your Balance</h2>
    <h1 id="balance"> ${finalBal} </h1>
  </div>
  </>)
}

export default Balance
