import React from 'react';
import './ExpenseItems.css';
import ExpenseDate from './ExpenseDate';

function ExpenseItems(props) {

    return (
        <div className='expense-item'>
            <ExpenseDate date={props.date}/>
            <div className='expense-item__description'><h2>{props.title}</h2></div>
            
            <div className='expense-item__price'>{props.amount}$</div>
        </div>
    )
}

export default ExpenseItems;
