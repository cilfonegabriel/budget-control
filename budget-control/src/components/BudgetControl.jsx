import {useState,useEffect} from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const BudgetControl = ({expenses ,budget}) => {

    const [percetage, setPercentage] = useState(0)
    const [available, setAvailable] = useState(0)
    const [gastado, setGastado] = useState(0);



    useEffect(() => {
        const totalGastado = expenses.reduce((total, gasto) => gasto.amount + total, 0);

        const totalAvailable = budget - totalGastado;

        const newPercentage = (((budget -totalAvailable) / budget) * 100).toFixed(2);


        setAvailable(totalAvailable)

        setGastado(totalGastado)

        setTimeout(() => {
            setPercentage(newPercentage)
        },1700)
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
            <CircularProgressbar 
                styles={buildStyles({
                    pathColor: percetage > 100 ? '#DC2626' : '#3B82F6',
                    trailColor: '#F5F5F5',
                    textColor: percetage > 100 ? '#DC2626' : '#3B82F6',
                })}
                value={percetage}
                text={`${percetage}% Spent`}
            />
        </div>

        <div className='contenido-presupuesto'>
            <p>
                <span>Budget: </span> {formatQuantity(budget)}
            </p>

            <p className={`${available < 0 ? 'negativo' : ''}`}>
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
