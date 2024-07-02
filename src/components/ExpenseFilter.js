import React, { useEffect, useState } from 'react';
import './ExpenseFilter.css';

const ExpenseFilter = (props) => {


  const { searchTitle, setSearchTitle } = props

  const [yearArray, setYearArray] = useState([])

  useEffect(() => {
    let empArray = new Set()
    props.expenses.forEach(i => {
      empArray.add(i.date.getFullYear())
    })
    setYearArray([...empArray])
  }, [props.expenses])

  const dropdownhandler = (event) => {
    props.onSelectedyear(event.target.value)
  }

  const onChangeSearchTitle = (e) => {
    setSearchTitle(e.target.value)
    let data = props.expenses.filter(i => ((i.title.toLowerCase().includes(e.target.value.toLowerCase())) && (props.selected == "-999" ? true : i.date.getFullYear() == props.selected)))
    props.setFilterData(data)
  }
  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by Title</label>
        <input value={searchTitle} placeholder='Search...' onChange={onChangeSearchTitle} data-testid="searchInput" style={{ padding : "0.3rem"}} />
      </div>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select value={props.selected} onChange={dropdownhandler} data-testid="yearSelect">
          <option value='-999'>All</option>
          {yearArray.map(i => (
            <option value={i}>{i}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default ExpenseFilter;