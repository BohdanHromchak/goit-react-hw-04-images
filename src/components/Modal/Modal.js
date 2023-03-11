import PropTypes from 'prop-types';
import { useEffect } from 'react';
import css from './Modal.module.css'

export const Modal = ({modalImage, tags, closeModal}) => {

const onBackdrop = (event) => {

if(event.target === event.currentTarget) {
  closeModal(false)
}
}

useEffect(() => {
  window.addEventListener('keydown', onEsc);
  return () => {
    window.removeEventListener('keydown', onEsc);
  };
}, 
// eslint-disable-next-line 
[])

const onEsc = () => {
  closeModal(false)
}
    return(<div className={css.Overlay} onClick={onBackdrop}>
    <div className={css.Modal}>
      <img src={modalImage} alt={tags} />
    </div>
  </div>)
}

Modal.propTypes = {
  modalImage: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired,
}

