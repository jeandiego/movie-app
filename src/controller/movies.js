import api from '../api';

export const getTrending = async () => {
  try {
    const response = await api.get('trending/movie/week');
    console.log('Success');
    return response.data.results;
  } catch (error) {
    console.error('Trending wasn`t find');
    return [];
  }
};
export const getPopular = async () => {
  try {
    const response = await api.get('movie/popular');
    console.log('Success');
    return response.data.results;
  } catch (error) {
    console.error('Popular wasn`t find');
    return [];
  }
};
export const getNowPlaying = async () => {
  try {
    const response = await api.get('movie/now_playing');
    console.log('Success');
    return response.data.results;
  } catch (error) {
    console.error('Now Playing wasn`t find');
    return [];
  }
};
