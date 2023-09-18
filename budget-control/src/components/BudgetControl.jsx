import {useState,useEffect} from 'react'

const BudgetControl = ({expenses ,budget}) => {

    const [available, setAvailable] = useState(0);
    const [spent, setSpent] = useState(0);

    useEffect(() => {
        const totalSpent =expenses.reduce ((total, expense) => expense.quantity + total, 0  );
        setSpent(totalSpent)
    },[expenses]);

    const formatQuantity = (quantity) => {
        return quantity.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD'
        })
    };
  return (
    <div className='contenedor-presupuesto contenedor sombra  dos-columnas'>
        <div>
            <p>Here Graphic</p>
        </div>

        <div className='contenido-presupuesto'>
            <p>
                <span>Budget: </span> {formatQuantity(budget)}
            </p>

            <p>
                <span>Available: </span> {formatQuantity(available)}
            </p>

            <p>
                <span>Spent: </span> {formatQuantity(spent)}
            </p>

        </div>
      
    </div>
  )
}

export default BudgetControl
