import React from 'react'
import Expense from './Expense'

const listExpense = ({expenses}) => {
  return (
    <div className='listado-gastos contenedor'>
        <h2>{expenses.length ? 'Expenses' : 'There isnt expenses'}</h2>

        {expenses.map( expense => (
            <Expense 
                key={expense.id}
                expense = {expense}
            />
        ))}
    </div>
  )
}

export default listExpense
