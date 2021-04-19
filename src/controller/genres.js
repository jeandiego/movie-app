import api from '../api';

export const getGenres = async (item) => {
  try {
    const response = await api.get(`genre/${item}/list`);
    console.log('Succces to get genres');
    return response.data.genres;
  } catch (error) {
    console.log('Didn`t work');
    return [];
  }
};
