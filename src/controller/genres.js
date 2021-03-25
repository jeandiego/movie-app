import api from 'axios';

export const getGenres = async () => {
  try {
    const response = await api.get('genre/movie/list');
    console.log('Success Genres');
    return response;
  } catch (error) {
    console.error('Genres wasn`t find');
    return [];
  }
};
