import { Component } from 'react';
import SearchBar from './Searchbar/Searchbar';
import { fetchImages } from 'services/ImagesAPI';
import { imageMaper } from 'services/mapper';
export class App extends Component {
  state = {
    searchData: '',
    images: [],
    page: 0,
  };
  getImage = () => {
    const { page, searchData, isShown } = this.state;
    this.setState({ isLoading: true });
    fetchImages(page, searchData, isShown)
      .then(({ data: { totalHits, hits } }) => {
        this.setState({ totalHits });
        this.setState(prevState => ({
          images: [...prevState.images, ...imageMaper(hits)],
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

  render() {
    return (
      <div>
        <SearchBar onSubmit={this.handleSubmit} />
      </div>
    );
  }
}
