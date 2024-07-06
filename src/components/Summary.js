import React, {useState, useEffect} from 'react'
import { useSelector } from 'react-redux'

function Summary() {

    const transactions = useSelector((state) => state.transactions.allTransaction)
    const [totalIncome, setTotalIncome] = useState(0)
    const [totalAmount, setTotalAmount] = useState(0)
    const [totalExpense, setTotalExpense] = useState(0)



    useEffect(() => {
        setTotalAmount(transactions.reduce(
            (accumulator, obj) => accumulator + Number(obj.amount),
            0,
          ))
    
          setTotalExpense(transactions.filter(d=> d.type=='expense').reduce(
            (accumulator, obj) => accumulator + Number(obj.amount),
            0,
          ))
    
          setTotalIncome(transactions.filter(d=> d.type=='income').reduce(
            (accumulator, obj) => accumulator + Number(obj.amount),
            0,
          ))
    }, [transactions])
    

  return (
    <div className='mt-5'>
        <h2>Transaction Summary</h2>
    
    <div className='d-flex flex-wrap'>
        
        <div class="card text-center m-3">
            <div class="card-header">
                Total Transactions
            </div>
            <div class="card-body">
                <h2 class="card-title">{totalAmount}</h2>
            </div>
        </div>
        <div class="card text-center m-3">
            <div class="card-header">
                Total Income
            </div>
            <div class="card-body">
                <h2 class="card-title">{totalIncome}</h2>
            </div>
        </div>
        <div class="card text-center m-3">
            <div class="card-header">
                Total Expense
            </div>
            <div class="card-body">
                <h2 class="card-title">{totalExpense}</h2>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Summary