import CloseBtn from '../img/cerrar.svg';

const Modal = ({setModal, animateModal, setAnimateModal}) => {

    const hideModal = () => {
        setModal(false)
        setAnimateModal(false)

        setTimeout(() => {
            setModal(false)
        }, 750);
    };

  return (
    <div className="modal">
      <div className="cerrar-modal">
        <img
            src= {CloseBtn}
            alt='close modal'
            onClick={hideModal}
        />
      </div>

      <form className={`formulario ${animateModal ? "animar" : 'cerrar'}`}>
        <legend>New expense</legend>

        <div className='campo'>
          <label htmlFor="nombre">Name Expense</label>
          
          <input 
            id='name'
            type="text" 
            placeholder='Add the name of the expense'
          />

        </div>

        <div className='campo'>
          <label htmlFor="cantidad">Amount</label>
          
          <input 
            id='amount'
            type="number" 
            placeholder='Add the amount of the expense: ej.300'
          />
          
        </div>

        <div className='campo'>
          <label htmlFor="categoria">Category</label>

          <select
            id="category"
          >
            <option value="">-- Select</option>
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
