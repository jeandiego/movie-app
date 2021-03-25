import api from '../api';

export const getGenres = async () => {
  try {
    const response = await api.get(`genre/movie/list`);
    console.log('Succces to get genres');
    return response.data.genres;
  } catch (error) {
    console.log('Didn`t work');
    return [];
  }
};
