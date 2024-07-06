import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light px-3">
        <Link to='/' className="navbar-brand">Finance Tracker</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
            <li className="nav-item active">
                <Link to='/' className="nav-link" >Home</Link>
            </li>
            <li className="nav-item">
                <Link to='/add-transaction' className="nav-link" >Add Transaction</Link>
            </li>
            <li className="nav-item">
                <Link to='/summary' className="nav-link" >Summary</Link>
            </li>
            <li className="nav-item">
                <Link to='/category-chart' className="nav-link" >Expense Chart (category wise)</Link>
            </li>
            </ul>
        </div>
</nav>
  )
}

export default Header