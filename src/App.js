import Expenses from "./components/Expenses";
import React, { useState } from 'react';
import NewExpense from "./components/NewExpense/NewExpense";

const Dummy = [
  {
    id: 'e1',
    title: 'A Novel',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];
function App() {
  const [expenses, setexpenses] = useState(Dummy)
  const [filterData, setFilterData] = useState(Dummy)

  const addexpensehandler = (expense) => {
    setexpenses((prevexpense) => {
      return [expense, ...prevexpense];
    })
    setFilterData((prevexpense) => {
      return [expense, ...prevexpense];
    })
  }

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>$~Expense Tracker~$</h2>
      <NewExpense onaddexpense={addexpensehandler} />
      <Expenses expenses={expenses} filterData={filterData} setFilterData={setFilterData} />
    </div>
  );
}

export default App;
