import api from '../api';

export const getTrending = async (isTv) => {
  try {
    const response = await api.get(`trending/${isTv ? 'tv' : 'movie'}/week`);
    console.log('Success Trendings');
    return response.data.results;
  } catch (error) {
    // console.error('Trending wasn`t find');
    return [];
  }
};

export const getPopular = async (isTv) => {
  try {
    const response = await api.get(`${isTv ? 'tv' : 'movie'}/popular`);
    console.log('Success Popular');
    return response.data.results;
  } catch (error) {
    // console.error('Popular wasn`t find');
    return [];
  }
};

export const getNowPlaying = async (isTv) => {
  try {
    const response = await api.get(`${isTv ? 'tv' : 'movie'}/now_playing`);
    console.log('Success NowPlaying');
    return response.data.results;
  } catch (error) {
    // console.error('Now Playing wasn`t find');
    return [];
  }
};

export const getDiscover = async (isTv) => {
  try {
    const response = await api.get(`discover/${isTv ? 'tv' : 'movie'}`);
    console.log('Success Discover');
    return response.data.results;
  } catch (error) {
    // console.error('Discover wasn`t find');
    return [];
  }
};

export const getSuggestion = async (itemId, isTv) => {
  try {
    const response = await api.get(
      `${isTv ? 'ssd' : 'movie'}/${itemId}/similar`,
    );
    console.log('Success Similar');
    return response.data.results;
  } catch (error) {
    // console.error('No similar movies');
    return [];
  }
};

export const getMovieDetail = async (itemId, isTv) => {
  try {
    const response = await api.get(`${isTv ? 'tv' : 'movie'}/${itemId}`);
    return response.data;
  } catch (error) {
    console.error('Movie wasn`t find');
    return [];
  }
};

export const getTopRated = async (isTv) => {
  try {
    const response = await api.get(`${isTv ? 'tv' : 'movie'}/top_rated`);
    console.log('Success Top Rated');
    return response.data.results;
  } catch (error) {
    console.error('Top Rated wasn`t find');
    return [];
  }
};

export const getAiringToday = async () => {
  try {
    const response = await api.get(`tv/airing_today`);
    console.log('Sucess get Airing today');
    return response.data.results;
  } catch (error) {
    console.log('Fail to get Airing Today');
    return [];
  }
};

export const getOnTheAir = async () => {
  try {
    const response = await api.get(`tv/on_the_air`);
    console.log('Success to get On the Air');
    return response.data.results;
  } catch (error) {
    console.log('Fail to Get On the Air');
    return [];
  }
};

export const getUpcomingMovies = async () => {
  try {
    const response = await api.get(`/movie/upcoming`);
    console.log('Success to get Upcoming');
    return response.data.results;
  } catch (error) {
    console.log('Fail to get Upcoming');
    return [];
  }
};
