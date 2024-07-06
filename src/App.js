import React, {useEffect} from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';
import Main from './components/Main';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddExpenseOrIncome from './components/AddExpenseOrIncome';
import Summary from './components/Summary';
import ExpenseCategoryChart from './components/ExpenseCategoryChart';
import Header from './components/Header';
import { useDispatch } from 'react-redux'
import { addAllTransaction } from './components/transactionSlice';

function App() {

  const dispatch = useDispatch()

    useEffect(() => {
      axios.get('https://mock-server-2-ph3a.onrender.com/data')
      .then(res=> {
        dispatch(addAllTransaction(res.data))
      })
    .catch(err=> console.log(err))
    }, [])

  return (<div>
    <BrowserRouter>
    <Header/>
      <div className='container'>
        <Routes>
          <Route  path="/" element={<Main/>}/>
          <Route  path="/add-transaction" element={<AddExpenseOrIncome/>} />
          <Route  path="/summary" element={<Summary/>} />
          <Route  path="/category-chart" element={<ExpenseCategoryChart/>} />
        </Routes>
      </div>
    </BrowserRouter>
  </div>
  
  );
}

export default App;
