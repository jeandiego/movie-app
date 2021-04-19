import api from '../api';

export const getPopular = async () => {
  try {
    const response = await api.get(`/tv/popular`);
    console.log('Success Trendings');
    return response.data.results;
  } catch (error) {
    return [];
  }
};

export const getDiscover = async (genreId) => {
  try {
    const response = await api.get(`discover/tv?with_genres=${genreId}`);
    console.log('Success Discover');
    console.log(response.data.results);
    return response.data.results;
  } catch (error) {
    // console.error('Discover wasn`t find');
    return [];
  }
};
