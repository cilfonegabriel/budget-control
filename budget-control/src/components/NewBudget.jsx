import { useState } from 'react'
import Message from './Message'

const NewBudget = ({budget, setBudget}) => {

    const [message, setMessage] = useState('')

    const handleBudget = (e) => {
        e.preventDefault();

        if(!Number(budget) || Number(budget) < 0) {
            setMessage("No is a validate budget")
        } else {
            console.log("Yes! is a number")
        }
    }
  return (
    <div className='contenedor-presupuesto contenedor sombra'>

        <form onSubmit={handleBudget} className='formulario'>
            <div className='campo'>
                <label>Define Budget</label>
                <input
                    className='nuevo-presupuesto'
                    type='text'
                    placeholder='Add your budget'
                    value={budget}
                    onChange={ e => setBudget(e.target.value)}
                />
            </div>
            <input type="submit" value="Add" />

            {message && <Message type="error">{message}</Message>}
        </form>
    </div>
  )
}

export default NewBudget
