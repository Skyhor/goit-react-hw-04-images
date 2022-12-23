import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import style from './ImageGallery.module.css';
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
