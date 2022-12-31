import { useEffect } from 'react';
import s from './Modal.module.css';
const Modal = ({ image: { src }, closeModal }) => {
  useEffect(() => {
    const closeByEsc = ({ code }) => {
      if (code === 'Escape') {
        closeModal();
      }
      window.addEventListener('keydown', this.closeByEsc);
    };
    return () => {
      window.removeEventListener('keydown', closeByEsc);
    };
  }, [closeModal]);
  const closeByBackdrop = e => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };
  return (
    <div className={s.backdrop} onClick={closeByBackdrop}>
      <div className={s.imageModal}>
        <button
          type="button"
          className={s.CloseBtn}
          onClick={() => closeModal()}
        >
          X
        </button>
        <img src={src} alt="" />
      </div>
    </div>
  );
};
export default Modal;
