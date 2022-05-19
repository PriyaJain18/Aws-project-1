import React, { createContext, useReducer} from "react";

//initial state:  [should be provided to /available to each of the components [childrens] like Transaction list etc]

let initialState = {
    transactions: [
        { id: 1, text: 'Books', amount: -20.30 },
        { id: 2, text: 'pocketmoney', amount: +30 },
        { id: 3, text: 'sunglasses', amount: -50 },
        { id: 4, text: 'salary', amount: +180.58 }
    ]
}
export const GlobalContext = createContext(initialState)

//AppReducer (initial dispatch):
function AppReducer(state, action) {
    switch (action.type) {
        case 'DELETE_TRANSACTION':
            return {
                ...state,
                transactions: state.transactions.filter(transaction => transaction.id !== action.payload)  //action.payload ='id' we wanna delete
            }
        case 'ADD_TRANSACTION':
            return {
                ...state, //New transaction :transaction.id ]
                transactions: [action.payload, ...state.transactions] //transactions (Arr)= [ new transaction obj , (old) transaction-objects ]
            }
        default:
            return state
    }
}


//Provider component : 
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)    //AppReducer : initial dispath function = reducer 

    //ACTIONS:  
    //delete transaction: 

    function deleteTransaction(id) {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        });
    }
    //add transaction: 
    function AddTransaction(transaction) {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        })
    }

    return (<GlobalContext.Provider value={{ transactions: state.transactions, deleteTransaction, AddTransaction}}>
        {children}
    </GlobalContext.Provider>)

}


