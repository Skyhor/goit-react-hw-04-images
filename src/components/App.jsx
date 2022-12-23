import { Component } from 'react';
import SearchBar from './Searchbar/Searchbar';
import { ToastContainer, toast } from 'react-toastify';
export class App extends Component {
  state = {
    searchData: '',
    images: [],
    page: 0,
  };
  handleSubmit = searchData => {
    if (searchData.trim() === '') {
      return toast.error('Enter the meaning for search');
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
      <>
        <SearchBar onSubmit={this.handleSubmit} />
      </>
    );
  }
}
