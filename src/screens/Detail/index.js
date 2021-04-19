import React, { useEffect, useState } from 'react';
import { useRoute } from '@react-navigation/native';
import MovieDetailView from './view';
import { getMovieDetail, getSuggestion } from '../../controller/movies';

const Detail = () => {
  const movieRoute = useRoute();
  const [suggestionList, setSuggestionList] = useState([]);
  const [movieDetail, setMovieDetail] = useState(movieRoute?.params?.movie);
  const movie = movieRoute?.params?.movie;

  async function getSelectedMovieDetail() {
    const selectedMovieDetail = await getMovieDetail(movie.id);
    setMovieDetail(selectedMovieDetail);
  }

  async function getSuggestionList() {
    const similarMovies = await getSuggestion(movie.id);
    setSuggestionList(similarMovies);
  }

  async function Inicialize() {
    await getSelectedMovieDetail();
    await getSuggestionList();
  }

  useEffect(() => {
    Inicialize();
  }, [movie]);

  return (
    <MovieDetailView
      suggestionList={suggestionList}
      movieDetail={movieDetail}
    />
  );
};

export default Detail;
