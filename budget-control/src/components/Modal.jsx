import { useEffect ,useState } from 'react';
import CloseBtn from '../img/cerrar.svg';
import Message from './Message'

const Modal = ({
  setModal, 
  animateModal, 
  setAnimateModal, 
  saveExpense, 
  editExpenses,
  setEditExpenses
}) => {

  const [message, setMessage] = useState('')

  const [name, setName] = useState('')
  const [amount, setAmount] = useState('')
  const [category, setCategory] = useState('')
  const [date, setDate] = useState('')
  const [id, setId] = useState('')


  useEffect(() => {
    if(Object.keys(editExpenses).length > 0) {
      setName(editExpenses.name)
      setAmount(editExpenses.amount)
      setCategory(editExpenses.category)
      setId(editExpenses.id)
      setDate(editExpenses.date)
    }
  },[]);

  const hideModal = () => {
      setAnimateModal(false)
      setEditExpenses({})

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

    saveExpense({name, amount, category ,id, date})
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
        <legend>{editExpenses.name ? 'Edit Expense' : 'Add Expense'}</legend>
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
          value={editExpenses.name ? 'Save changes' : 'Add Expense'}  
        />

      </form>
    </div>
  )
}

export default Modal
