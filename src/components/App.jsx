import { useState, useEffect } from 'react';
import SearchBar from './Searchbar/Searchbar';
import { fetchImages } from 'services/ImagesAPI';
import { LoadMoreBtn } from './LoadMoreBtn/LoadMoreBtn';
import { ImageGallery } from './ImageGallery/ImageGallery';
import Modal from './Modal/Modal';
import { ColorRing } from 'react-loader-spinner';
export const App = () => {
  const [searchData, setSearchData] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(0);
  const [currentImage, setCurrentImage] = useState(null);
  const [isShown, setIsShown] = useState(false);
  const [isLoading, setIsLoading] = useState(null);
  const [, setError] = useState('');
  useEffect(() => {
    if (searchData) {
      setIsLoading(true);
      fetchImages(page, searchData)
        .then(({ data: { hits } }) => {
          setImages(state => [...state, ...hits]);
          setIsShown(true);
        })
        .catch(error => {
          setError(error.message);
        })
        .finally(() => setIsLoading(false));
    }
  }, [searchData, page]);
  const handleSubmit = newSearchData => {
    if (newSearchData.trim() === '') {
      return console.log('Enter the meaning for search');
    } else if (newSearchData === searchData) {
      return;
    }
    setSearchData(newSearchData);
    setPage(1);
    setImages([]);
  };
  const openMoadl = data => {
    setCurrentImage(data);
  };
  const closeModal = () => {
    setCurrentImage(null);
  };
  const loadMore = () => {
    setPage(state => state + 1);
  };

  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
      {isShown && (
        <ImageGallery
          images={images}
          openModal={openMoadl}
          closeModal={closeModal}
        />
      )}
      {isLoading && <ColorRing />}
      {currentImage && <Modal image={currentImage} closeModal={closeModal} />}
      {isShown && <LoadMoreBtn clickHandler={loadMore} />}
    </div>
  );
};
