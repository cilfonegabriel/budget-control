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
        <legend>New Spent</legend>

      </form>
    </div>
  )
}

export default Modal
