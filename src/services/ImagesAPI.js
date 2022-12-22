import axios from 'axios';
axios.defaults.baseURL = 'https://pixabay.com/api/';
const API_KEY = '30877456-5111c89971189f869ce54687d';
export const fetchImages = (page, searchData) => {
  return axios({
    params: {
      key: API_KEY,
      q: searchData,
      page,
      image_type: 'photo',
      orientation: 'horizontal',
      per_page: 12,
    },
  });
};
