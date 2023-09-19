import React from 'react'
import Expense from './Expense'

const listExpense = ({
    expenses,
    setEditExpenses, 
    deleteExpense,
    expensesFilters,
    filter
}) => {
  return (
    <div className='listado-gastos contenedor'>
        {filter ? (
          <>
            <h2>{expensesFilters.length ? 'Expenses' : 'There isnt expenses'}</h2>

              {expensesFilters.map( expense => (
                <Expense 
                    key={expense.id}
                    expense = {expense}
                    setEditExpenses = {setEditExpenses}
                    deleteExpense = {deleteExpense}
                />
            ))}
            </>
          ) : (
            <>
              <h2>{expenses.length ? 'Expenses' : 'There isnt expenses'}</h2>

                {expenses.map( expense => (
                  <Expense 
                      key={expense.id}
                      expense = {expense}
                      setEditExpenses = {setEditExpenses}
                      deleteExpense = {deleteExpense}
                  />
                ))}
            </>
          )
        }
    </div>
  )
}

export default listExpense
