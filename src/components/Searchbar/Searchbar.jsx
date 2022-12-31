import { useState } from 'react';
import s from './SearchBar.module.css';
const SearchBar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');
  const search = e => {
    e.preventDefault();
    if (query.trim() === '') {
      return alert('Для поиска недостаточно символов');
    }
    onSubmit(query);
    setQuery('');
  };
  const changeName = e => {
    setQuery(e.currentTarget.value.toLowerCase());
  };
  return (
    <header className={s.Searchbar}>
      <form onSubmit={search} className={s.form}>
        <button type="submit" className={s.SearchFormButton}>
          <span>Search</span>
        </button>
        <input
          className={s.SearchFormInput}
          onChange={changeName}
          type="text"
          value={query}
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};
export default SearchBar;
