import { useState } from 'react'
import Header from './components/Header'
import IconoNuevoGasto from './img/nuevo-gasto.svg'

function App() {

  const [budget, setBudget] = useState(0);
  const [isValidBudget,setIsValidBudget] = useState(false);
  const [modal, setModal] = useState(false);

  const handleNewSpent = () => {
    setModal(true);
  }

  return (
    <div>
      <Header
        budget={budget}
        setBudget={setBudget}
        isValidBudget={isValidBudget}
        setIsValidBudget={setIsValidBudget}
      />

      {isValidBudget && (
        <div className='nuevo-gasto'>
          <img
            src = {IconoNuevoGasto}
            alt='Icono Nuevo Gasto'
            onClick={handleNewSpent}
          />
        </div>
      )}

      {modal && <p>Desde modal</p>}

    </div>
  )
}

export default App
