import React,{useState} from 'react'
import './ExpenseForm.css';
function ExpenseForm(props) {

    const todayDate = new Date()
    const maxDate = `${todayDate.getFullYear()}-${String(todayDate.getMonth()+1).padStart(2,'0')}-${String(todayDate.getDate()).padStart(2,'0')}`
    
    const [enteredTitle,setenteredTitle]=useState('')
    const [enteredAmount,setenteredAmount]=useState('')
    const [enteredDate,setenteredDate]=useState(maxDate)

    const titlechangehandler = (event) =>
    {
        setenteredTitle(event.target.value);
    }
    const amountchangehandler = (event) =>
    {
        setenteredAmount(event.target.value);
    }
        
    const datechangehandler = (event) =>
    {
        setenteredDate(event.target.value);
    }
    const submithandler = (event) =>
    {
        event.preventDefault();
        const expensedata = {
            title:enteredTitle,
            amount:enteredAmount,
            date:new Date(enteredDate),
        }
        props.onsubmitform(expensedata);
        setenteredTitle('')
        setenteredAmount('')
        setenteredDate(maxDate)
    }
  return (
    <div>
        <form onSubmit={submithandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text' value={enteredTitle} onChange={titlechangehandler} data-testid="title"/>
                </div>
                <div className='new-expense__control'>
                    <label>Amount ($)</label>
                    <input type='number' min="0.01" step='0.01' value={enteredAmount} data-testid="amount" onChange={amountchangehandler} />
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' min='2000-01-01' max={maxDate} value={enteredDate} data-testid="date" onChange={datechangehandler}/>
                </div>
                <div className='new-expense__actions'> 
                    <button type='submit' data-testid="submit">Add Expense</button>
                </div>
            </div>
        </form>
    </div>
  )
}

export default ExpenseForm