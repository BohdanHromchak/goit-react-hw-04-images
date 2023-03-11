import PropTypes from 'prop-types';
import { useState } from 'react';
import css from './ImageGalleryItem.module.css'
import {Modal} from '../Modal/Modal'


export const ImageGalleryItem = ({
   image: { id, webformatURL, largeImageURL, tags }
 }) => {
   const [showModal, setShowModal] = useState(false)


   return (
     <>
       <li id={id} className={css.ImageGalleryItem}>
         <img
           src={webformatURL}
           alt={tags}
           className={css.ImageGalleryItem__image}
           onClick={() => setShowModal(true)}
         />
       </li>
       {showModal && <Modal modalImage={largeImageURL} tags={tags}closeModal={setShowModal}/>}
     </>
   );
 };


ImageGalleryItem.propTypes = {
   image: PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
   }).isRequired
}