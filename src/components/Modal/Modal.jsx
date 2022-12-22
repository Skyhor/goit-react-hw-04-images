import { Component } from 'react';
import s from './Modal.module.css';
class Modal extends Component {
  render() {
    const {
      image: { src },
      closeModal,
    } = this.props;
    return (
      <div className={s.backdrop}>
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
  }
}
export default Modal;
