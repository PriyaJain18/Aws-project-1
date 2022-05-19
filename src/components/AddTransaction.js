import React ,{ useContext, useState} from "react"

import { GlobalContext } from '../context/GlobalState'
 
let AddTransaction = () => {

    const [text,setText] = useState();
    const [amount,setAmount] = useState();

    const { AddTransaction } = useContext(GlobalContext)

    function SubmitForm(e) {
        e.preventDefault()
        let TransactionObj = {
            id: Math.floor(Math.random()*100000),
            text : text,
            amount: +amount//NOTE: AMOUNT WE ENTER SHOULD BE SUBMITTED AS A NUMBER NOT A TEXT-TYPE [rhs-> number we  in form , LHS-> keyname in object TransactionObj]
        }
        AddTransaction(TransactionObj)
    }
    return(<>
        <h3 className="topic">Add new Transaction </h3>

        <form onSubmit={SubmitForm}>
            <div className="form-control">
                <label htmlFor='text'>Text</label>
                <input type='text' id='text' placeholder="Enter text here" onChange={(event)=> setText(event.target.value)} value={text}/>
            </div>
            <div className="form-control"> 
            <label htmlFor='amount'>Amount</label></div>
            <input type='number' id='amount' placeholder="Enter amount here" onChange={(e) => setAmount(e.target.value)} value={amount}/> <br/>
            <small>Positive: income , Negative: expense</small> 
            <button className="sbn" type="submit">ADD</button>
        </form>
    </>)
}

export default AddTransaction;