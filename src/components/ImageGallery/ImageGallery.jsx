import { ImageGalleryItem } from './ImageGalleryItem';
import style from './ImageGallery.module.css';
import PropTypes from 'prop-types';
export function ImageGallery({ images, openModal }) {
  return (
    <ul className={style.ImageGallery}>
      {images.map(({ id, webformatURL, largeImageURL }, index) => (
        <ImageGalleryItem
          key={id}
          webformatURL={webformatURL}
          largeImageURL={largeImageURL}
          index={index}
          openModal={openModal}
        />
      ))}
    </ul>
  );
}
ImageGallery.propTypes = {
  openModal: PropTypes.func.isRequired,
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
    })
  ),
};
