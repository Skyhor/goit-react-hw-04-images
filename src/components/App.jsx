import { Component } from 'react';
import SearchBar from './Searchbar/Searchbar';
export class App extends Component {
  state = {
    searchData: '',
    images: [],
    page: 0,
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
