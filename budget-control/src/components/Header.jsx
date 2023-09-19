import React from 'react'
import NewBudget from './NewBudget'
import BudgetControl from './BudgetControl'

const Header = ({
    setExpenses,
    expenses,
    budget,
    setBudget,
    isValidBudget,
    setIsValidBudget
}) => {
  return (
    <header>
        <h1>Expense Planner</h1>

        {isValidBudget ? (
            <BudgetControl 
                expenses={expenses}
                setExpenses = {setExpenses}
                budget={budget}
                setBudget = {setBudget}
                setIsValidBudget = {setIsValidBudget}
            />
        ) : (
            <NewBudget
                budget={budget}
                setBudget={setBudget}
                isValidBudget={isValidBudget}
                setIsValidBudget={setIsValidBudget}
            />  
        )}
    </header>
  )
}

export default Header
