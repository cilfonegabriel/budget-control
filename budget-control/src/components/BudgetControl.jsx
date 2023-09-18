import {useState,useEffect} from 'react'

const BudgetControl = ({expenses ,budget}) => {

    const [available, setAvailable] = useState(0)
    const [gastado, setGastado] = useState(0);

    useEffect(() => {
        const totalGastado = expenses.reduce((total, gasto) => gasto.amount + total, 0);

        const totalAvailable = budget - totalGastado;

        setAvailable(totalAvailable)

        setGastado(totalGastado)
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
                <span>Spent: </span> {formatQuantity(gastado)}
            </p>

        </div>
      
    </div>
  )
}

export default BudgetControl
