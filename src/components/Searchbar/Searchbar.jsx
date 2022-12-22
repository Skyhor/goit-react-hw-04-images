import { Component } from 'react';
import './SearchBar.module.css';
export default class SearchBar extends Component {
  state = {
    query: '',
  };
  search = e => {
    e.preventDefault();
    if (this.state.query.trim() === '') {
      return alert('Для поиска недостаточно символов');
    }
    this.props.onSubmit(this.state.query);
    this.setState({ query: '' });
  };
  changeName = e => {
    this.setState({ query: e.currentTarget.value.toLowerCase() });
  };
  render() {
    return (
      <header className="Searchbar">
        <form onSubmit={this.search}>
          <button type="submit" className="SearchFormButton">
            <span className="">Search</span>
          </button>

          <input
            className="SearchFormInput"
            onChange={this.changeName}
            type="text"
            value={this.state.query}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
