import React, { useEffect, useState } from 'react';
import ExpenseItems from './ExpenseItems';
import ExpenseFilter from './ExpenseFilter';
import './Expenses.css'
function Expenses({ expenses, filterData, setFilterData }) {
  const [filteredyear, setfilteredyear] = useState('-999')
  const [searchTitle, setSearchTitle] = useState('')

  useEffect(() => {
    if (filteredyear != "-999") {
      let data = expenses.filter(i => ((i.date.getFullYear() == filteredyear) && ((i.title.toLowerCase().includes(searchTitle.toLowerCase())))))
      setFilterData(data)
    }
    else {
      let data = expenses.filter(i => ((i.title.toLowerCase().includes(searchTitle.toLowerCase()))))
      setFilterData(data)
    }
  }, [filteredyear])

  const filterhandler = (selectedyear) => {
    setfilteredyear(selectedyear)
  }
  return <div className='expenses'>
    <ExpenseFilter selected={filteredyear} onSelectedyear={filterhandler} expenses={expenses} setFilterData={setFilterData} searchTitle={searchTitle} setSearchTitle={setSearchTitle} />
    <div>
      {filterData.map((expense) => (
        <ExpenseItems
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </div>

  </div>;
}

export default Expenses;