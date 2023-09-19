import { useEffect ,useState } from 'react';
import CloseBtn from '../img/cerrar.svg';
import Message from './Message'

const Modal = ({
  setModal, 
  animateModal, 
  setAnimateModal, 
  saveExpense, 
  editExpenses
}) => {

  const [message, setMessage] = useState('')

  const [name, setName] = useState('')
  const [amount, setAmount] = useState('')
  const [category, setCategory] = useState('')

  useEffect(() => {
    if(Object.keys(editExpenses).length > 0) {
      setName(editExpenses.name)
      setAmount(editExpenses.amount)
      setCategory(editExpenses.category)
    }
  },[]);

  const hideModal = () => {
      setAnimateModal(false)

      setTimeout(() => {
          setModal(false)
      }, 750);
  };

  const handleSubmit = e => {
    e.preventDefault();

    if([name, amount, category].includes('')){
      setMessage('All fields are required')

      setTimeout(() => {
        setMessage('')
      }, 3000);

      return;
    }

    saveExpense({name, amount, category})
  }

  return (
    <div className="modal">
      <div className="cerrar-modal">
        <img
            src= {CloseBtn}
            alt='close modal'
            onClick={hideModal}
        />
      </div>

      <form
        onSubmit={handleSubmit}
        className={`formulario ${animateModal ? "animar" : 'cerrar'}`}
      >
        <legend>New expense</legend>
        {message && <Message type='error'>{message}</Message>}

        <div className='campo'>
          <label htmlFor="nombre">Name Expense</label>
          
          <input 
            id='name'
            type="text" 
            placeholder='Add the name of the expense'
            value={name}
            onChange={e => setName(e.target.value)}
          />

        </div>

        <div className='campo'>
          <label htmlFor="cantidad">Amount</label>
          
          <input 
            id='amount'
            type="number" 
            placeholder='Add the amount of the expense: ej.300'
            value={amount}
            onChange={e => setAmount (Number(e.target.value))}
          />
          
        </div>

        <div className='campo'>
          <label htmlFor="categoria">Category</label>

          <select
            id="category"
            value={category}
            onChange={e => setCategory(e.target.value)}
          >
            <option value="">-- Select --</option>
            <option value="saving">Saving</option>
            <option value="meal">Meal</option>
            <option value="house">House</option>
            <option value="miscellaneous">Miscellaneous expenses</option>
            <option value="leisure">Leisure</option>
            <option value="health">Health</option>
            <option value="subscriptions">Subscriptions</option>
          </select>
        </div>

        <input 
          type="submit" 
          value="Add Expense" 
        />

      </form>
    </div>
  )
}

export default Modal
