import axios from 'axios';
const API_KEY = '45569082-93b38ce8ee83e3f403ee7e577';
const BASE_URL = 'https://pixabay.com/api/';

export const fetchPhotos = async (searchQuery, page) => {
  const urlParams = new URLSearchParams({
    orientation: 'horizontal',
    image_type: 'photo',
    safesearch: true,
    key: API_KEY,
    q: searchQuery,
    page,
    per_page: 15,
  });

  const { data } = await axios.get(`${BASE_URL}?${urlParams}`);

  return data;
};
