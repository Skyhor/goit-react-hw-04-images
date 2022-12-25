import { Component } from 'react';
import s from './Modal.module.css';
class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.closeByEsc);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.closeByEsc);
  }
  closeByEsc = ({ code }) => {
    if (code === 'Escape') {
      this.props.closeModal();
    }
  };
  closeByBackdrop = e => {
    if (e.target === e.currentTarget) {
      this.props.closeModal();
    }
  };
  render() {
    const {
      image: { src },
      closeModal,
    } = this.props;
    return (
      <div className={s.backdrop} onClick={this.closeByBackdrop}>
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
