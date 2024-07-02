import React from 'react'
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
function NewExpense(props) {
  const submitformhandler = (enteredexpensedata) => {
    if (enteredexpensedata.title === "" || enteredexpensedata.amount === "") {
      alert("Please Enter the Title and Amount")
      return;
    }
    const expensedata = {
      ...enteredexpensedata,
      id: Math.random().toString()
    }
    props.onaddexpense(expensedata)
  }
  return (
    <div className='new-expense'>
      <ExpenseForm onsubmitform={submitformhandler} />
    </div>
  )
}

export default NewExpense   