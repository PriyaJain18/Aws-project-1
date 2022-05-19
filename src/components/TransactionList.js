import React, { useContext } from "react"
import { GlobalContext } from '../context/GlobalState'
import Transaction from './Transaction'

let TransactionList = () => {

    const context = useContext(GlobalContext)
    console.log(GlobalContext)
    const transactions = context.transactions

    return (<>
        <h3 className="topic">
            Transaction List
        </h3>
        <ul id='tlist' className='list'>
            {
                transactions.map(transaction => {
 // INSTEAD OF USING THIS DIRECTLY :
 //<li className="money"> {tran.text} <span> {tran.amount} </span> <button className='delete-btn'> X </button> </li>  //we made it a diff component : 

                    return <Transaction key={transaction.id} transaction={transaction}/>   //transaction = prop name in <Transaction/> 's param
                })
            }

        </ul>
    
    </>)
}
export default TransactionList;