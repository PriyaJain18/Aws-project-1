import './App.css';
import React from 'react';
import Header from './components/Header';
import Balance from './components/Balance';
import { IncomeExpense } from './components/IncomeExpense';
import TransactionList from './components/TransactionList';
import AddTransaction from './components/AddTransaction';
import { GlobalProvider } from './context/GlobalState';
import BarChart from './components/BarChart';
let App = () => {
  return (<>
    <GlobalProvider>
      <Header />
      <div className='container'>
        <Balance />
        <IncomeExpense />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>

      {/* CHART.JS NOT WORKING : */}
      {/* <div><canvas width="1500" height="700"><BarChart /></canvas></div> */}
  
  </>)
}

export default App;

//for -> htmlFor in label of forms 