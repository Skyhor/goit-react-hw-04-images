import style from './ImageGalleryItem.module.css';
export function ImageGalleryItem({
  webformatURL,

  openModal,
  largeImageURL,
}) {
  return (
    <li className={style.ImageGalleryItem}>
      <img
        className={style.ImageGalleryItemImage}
        src={webformatURL}
        onClick={() => openModal({ src: largeImageURL })}
        alt=""
      />
    </li>
  );
}
