import api from '../api';

export const getTrending = async () => {
  try {
    const response = await api.get('trending/movie/day');
    console.log('Success Trendings');
    return response.data.results;
  } catch (error) {
    console.error('Trending wasn`t find');
    return [];
  }
};

export const getPopular = async () => {
  try {
    const response = await api.get('movie/popular');
    console.log('Success Popular');
    return response.data.results;
  } catch (error) {
    console.error('Popular wasn`t find');
    return [];
  }
};

export const getNowPlaying = async () => {
  try {
    const response = await api.get('movie/now_playing');
    console.log('Success NowPlaying');
    return response.data.results;
  } catch (error) {
    console.error('Now Playing wasn`t find');
    return [];
  }
};

export const getDiscover = async () => {
  try {
    const response = await api.get(`discover/movie`);
    console.log('Success Discover');
    return response.data.results;
  } catch (error) {
    console.error('Discover wasn`t find');
    return [];
  }
};

export const getSuggestion = async () => {
  try {
    const response = await api.get('movie/14611/similar');
    console.log(response);
    return response.data.results;
  } catch (error) {
    console.error('No similar movies');
    return [];
  }
};
