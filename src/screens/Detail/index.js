import React, { useEffect, useState } from 'react';
import { useRoute } from '@react-navigation/native';
import MovieDetailView from './view';
import { getMovieDetail, getSuggestion } from '../../controller/movies';
import { Add, Like, Send } from '~/svgs';

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

  const buttonsView = [
    {
      text: 'Minha lista',
      icon: Add,
      onPress: () => {},
    },
    {
      text: 'Gostei',
      icon: Like,
      onPress: () => {},
    },
    {
      text: 'Compartilhar',
      icon: Send,
      onPress: () => {},
    },
  ];

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
      buttonsView={buttonsView}
    />
  );
};

export default Detail;
