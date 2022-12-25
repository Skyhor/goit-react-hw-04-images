import { Component } from 'react';
import SearchBar from './Searchbar/Searchbar';
import { fetchImages } from 'services/ImagesAPI';
// import { imageMaper } from 'services/mapper';
import { LoadMoreBtn } from './LoadMoreBtn/LoadMoreBtn';
import { ImageGallery } from './ImageGallery/ImageGallery';
import Modal from './Modal/Modal';
import { ColorRing } from 'react-loader-spinner';
export class App extends Component {
  state = {
    searchData: '',
    images: [],
    page: 0,
    currentImage: null,
    isShown: false,
    isLoading: null,
  };
  getImage = () => {
    const { page, searchData, isShown } = this.state;
    this.setState({ isLoading: true });
    fetchImages(page, searchData, isShown)
      .then(({ data: { totalHits, hits } }) => {
        this.setState({ totalHits });
        this.setState(prevState => ({
          images: [...prevState.images, ...hits],
          isShown: true,
        }));
      })
      .catch(error => {
        this.setState({
          error: error.message,
        });
      })
      .finally(() =>
        this.setState({
          isLoading: false,
        })
      );
  };
  componentDidUpdate(_, prevState) {
    const { searchData, page } = this.state;
    if (searchData !== prevState.searchData || page !== prevState.page) {
      this.getImage();
    }
  }
  handleSubmit = searchData => {
    if (searchData.trim() === '') {
      return console.log('Enter the meaning for search');
    } else if (searchData === this.state.searchData) {
      return;
    }
    this.setState({
      searchData: searchData,
      page: 1,
      images: [],
    });
  };
  openMoadl = data => {
    this.setState({ currentImage: data });
  };
  closeModal = () => {
    this.setState({ currentImage: null });
  };
  loadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  render() {
    const { images, currentImage, isShown, totalHits, isLoading } = this.state;
    return (
      <div>
        <SearchBar onSubmit={this.handleSubmit} />
        {isShown && (
          <ImageGallery
            images={images}
            openModal={this.openMoadl}
            closeModal={this.closeModal}
          />
        )}
        {isShown && images.length < totalHits && (
          <LoadMoreBtn clickHandler={this.loadMore} />
        )}
        {isLoading && <ColorRing />}
        {currentImage && (
          <Modal image={currentImage} closeModal={this.closeModal} />
        )}
      </div>
    );
  }
}
