import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
const Transaction = ( {transaction} ) => {        // params : {tran} -> destructuring used
    
    const { deleteTransaction } = useContext(GlobalContext)
    const sign = transaction.amount < 0 ? null : '+'

    
    return(<> 
    {/* use {props.tran.text} or directly {tran.text} [for this one we mention {tran} instead of props in params] */}
        <li className={transaction.amount>0 ? "plus" : "minus"}> {transaction.text} <span> {sign} ${transaction.amount} </span> 
        <button className='delete-btn' onClick={()=> deleteTransaction(transaction.id)}> X </button> </li>
    </>)
}
export default Transaction