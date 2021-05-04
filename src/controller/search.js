import api from '../api';

export const searchMulti = async (search) => {
  try {
    const response = await api.get(`search/multi`, {
      params: { query: search },
    });
    console.log('Success Search results');
    return response.data.results;
  } catch (error) {
    // console.error('Discover wasn`t find');
    return [];
  }
};
