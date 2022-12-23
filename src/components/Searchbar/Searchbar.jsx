import { Component } from 'react';
import s from './SearchBar.module.css';
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
      <header className={s.Searchbar}>
        <form onSubmit={this.search} className={s.form}>
          <button type="submit" className={s.SearchFormButton}>
            <span>Search</span>
          </button>

          <input
            className={s.SearchFormInput}
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
