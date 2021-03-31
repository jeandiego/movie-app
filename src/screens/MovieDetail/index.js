import React, { useEffect, useState } from 'react';
import { useRoute } from '@react-navigation/native';
import MovieDetailView from './view';
import { getDiscover, getMovieDetail } from '../../controller/movies';
import { Add, Like, Send } from '~/svgs';

const MovieDetail = () => {
  const movieRoute = useRoute();
  const [discoverList, setDiscoverList] = useState([]);
  const [movieDetail, setMovieDetail] = useState(movieRoute?.params?.movie);
  const movie = movieRoute?.params?.movie;

  async function getSelectedMovieDetail() {
    const selectedMovieDetail = await getMovieDetail(movie.id);
    setMovieDetail(selectedMovieDetail);
  }

  async function getDiscoverList() {
    const discoverMovieList = await getDiscover();
    setDiscoverList(discoverMovieList);
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

  useEffect(() => {
    getSelectedMovieDetail();
    getDiscoverList();
  }, [movie]);

  return (
    <MovieDetailView
      discoverList={discoverList}
      movieDetail={movieDetail}
      buttonsView={buttonsView}
    />
  );
};

export default MovieDetail;
