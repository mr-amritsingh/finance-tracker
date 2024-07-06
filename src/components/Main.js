import React, {useEffect} from 'react'
import axios from 'axios'
import AddExpenseOrIncome from './AddExpenseOrIncome'
import {Link} from 'react-router-dom'
import { useSelector } from 'react-redux'

function Main() {

    const data = useSelector((state) => state.transactions.allTransaction)

    
  return (
    <div className='mt-4'>
        <h2>Transaction List</h2>
          <table className="table mt-3">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Amount</th>
                <th scope="col">Type</th>
                </tr>
            </thead>
            <tbody>
            {data && data.map((d,i)=> {
                return <tr>
                <th scope="row">{i+1}</th>
                <td>{d.amount}</td>
                <td>{d.type}</td>
                </tr>
            })}
            </tbody>
            </table>
            {/* <AddExpenseOrIncome/> */}
    </div>
  )
}

export default Main