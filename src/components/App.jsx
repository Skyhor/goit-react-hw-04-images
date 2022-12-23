import React, { Component } from 'react';
// import SearchBar from './Searchbar/Searchbar';
export const App = () => {
  state = {
    searchData: '',
    page: 0,
    images: [],
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
  return (
    <div>
      <SearchBar onSubmit={this.handleSubmit} />
    </div>
  );
};
