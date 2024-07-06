import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { addSingleTransaction } from './transactionSlice';
import { useDispatch } from 'react-redux'

function AddExpenseOrIncome() {
    const navigate = useNavigate();
    const expenseCategories = ['movie', 'food', 'medical', 'travel', 'education']

    const dispatch = useDispatch()
    const [type, setType] = useState(null)
    const [expenseCategory, setExpenseCategory] = useState(null)
    const [amount, setAmount] = useState('')

    function addExpense(){
        let body = {
            "type": type,
            "amount": amount,
        }
        if(type=='expense'){
            body.category = expenseCategory
        }
        axios.post('https://mock-server-2-ph3a.onrender.com/data', body)
      .then(res=> {
        dispatch(addSingleTransaction(res.data))
        setAmount('')
        setExpenseCategory(null)
        setType(null)
        alert(`${type} added successfully!!`)
      })
    .catch(err=> console.log(err))
    }
    
  return (
    <div className='mt-5'>
        <h2>Add Expense or Income</h2>
        <div className='mt-3'>
            <p className='mb-0'>Select Type</p>
            <select value={type} onChange={(e)=> setType(e.target.value)} className="form-select">
                <option selected>Select Type</option>
                <option value='expense'>Expense</option>
                <option value="income">Income</option>
            </select>
           </div>
           {type=='expense' && <div className='mt-2'> 
            <p className='mb-0'>Select Category</p>
            <select value={expenseCategory} onChange={(e)=> setExpenseCategory(e.target.value)} className="form-select">
                <option selected>Select Expense Category</option>
                {expenseCategories.map(d=> <option value={d}>{d}</option>)}
            </select>
            </div>}
            <div className='mt-2'>
            <p className='mb-0'>Enter Amount</p>
                <input type="text" class="form-control" placeholder="Amount" value={amount} onChange={(e)=> setAmount(e.target.value)}/>
            </div>
            <div className='mt-3'>
                <button className='btn btn-primary' onClick={addExpense}>Add {type}</button>
                <button className='btn btn-secondary m-3' onClick={()=> navigate(-1)}>Cancel</button>
            </div>
    </div>
  )
}

export default AddExpenseOrIncome