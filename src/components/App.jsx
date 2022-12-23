import { Component } from 'react';
import SearchBar from './Searchbar/Searchbar';
export class App extends Component {
  state = {
    searchData: '',
    images: [],
    page: 0,
  };

  render() {
    return (
      <div>
        <SearchBar />
      </div>
    );
  }
}
