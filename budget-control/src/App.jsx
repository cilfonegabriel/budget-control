import { useEffect,useState } from 'react'
import Header from './components/Header'
import ListExpense from './components/listExpense';
import Modal from './components/Modal';
import { generateId } from './helpers';
import IconoNuevoGasto from './img/nuevo-gasto.svg'
import Expense from './components/Expense';

function App() {

  const[expenses, setExpenses] = useState([]);

  const [budget, setBudget] = useState(
    Number(localStorage.getItem('budget')) ?? 0
  );
  const [isValidBudget,setIsValidBudget] = useState(false);

  const [modal, setModal] = useState(false);
  const [animateModal, setAnimateModal] = useState(false);

  const [editExpenses, setEditExpenses] = useState({})

  useEffect(() => {
    if(Object.keys(editExpenses).length > 0) {
      setModal(true);
  
      setTimeout(() => {
        setAnimateModal(true);
      }, 500);  }
  },[editExpenses])

  useEffect (() => {
    localStorage.setItem('budget', budget ?? 0);
  },[budget])

  useEffect (() => {
    const budgetLS = Number(localStorage.getItem('budget')) ?? 0;

    if(budgetLS > 0) {
      setIsValidBudget(true)
    }
  },[])


  const handleNewSpent = () => {
    setModal(true);
    setEditExpenses({})

    setTimeout(() => {
      setAnimateModal(true);
    }, 500);
  }

  const saveExpense = expense => {
    if(expense.id) {
      const updatedExpenses =expenses.map(expenseState => expenseState === expense.id ? expense : expenseState)
      setExpenses(updatedExpenses)
      setEditExpenses({})
    } else {
      expense.id = generateId()
      expense.date = Date.now()
      setExpenses([...expenses, expense])
    }
    setAnimateModal(false)

    setTimeout(() => {
        setModal(false)
    }, 750);
  }

  const deleteExpense = id => {
    const updatedExpenses = expenses.filter(expense => expense.id !== id)
    setExpenses(updatedExpenses)
  }

  return (
    <div className={modal ? 'fijar' : ''}>
      <Header
        expenses={expenses}
        budget={budget}
        setBudget={setBudget}
        isValidBudget={isValidBudget}
        setIsValidBudget={setIsValidBudget}
      />

      {isValidBudget && (
        <>
        <main>
          <ListExpense
            expenses = {expenses}
            setEditExpenses={setEditExpenses}
            deleteExpense={deleteExpense}
          />
        </main>
        <div className='nuevo-gasto'>
          <img
            src = {IconoNuevoGasto}
            alt='Icono Nuevo Gasto'
            onClick={handleNewSpent}
          />
        </div>
        </>

      )}

      {modal && <Modal 
                  setModal={setModal} 
                  animateModal={animateModal}
                  setAnimateModal={setAnimateModal}
                  saveExpense={saveExpense}
                  editExpenses = {editExpenses}
                  setEditExpenses = {setEditExpenses}
                />}

    </div>
  )
}

export default App
