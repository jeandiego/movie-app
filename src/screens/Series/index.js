import React, { useEffect, useState } from 'react';
import { getPopular, getDiscover } from '../../controller/series';
import { getGenres } from '../../controller/genres';
import SeriesView from './view';

const Series = () => {
  const [discoverList, setDiscoverList] = useState([]);
  const [popularList, setPopularList] = useState([]);
  const [genresList, setGenresList] = useState([]);

  async function getPopularList() {
    const popularMovieList = await getPopular(2);
    setPopularList(popularMovieList);
  }

  async function getGenresList() {
    const genresTvList = await getGenres('tv');
    setGenresList(genresTvList);
  }

  async function getDiscoverList() {
    const discoverTvList = getDiscover('99');
    setDiscoverList(discoverTvList);
  }

  async function Inicialize() {
    await getGenresList();
    await getPopularList();
    await getDiscoverList();
  }

  useEffect(() => {
    Inicialize();
  }, []);

  return (
    <SeriesView
      discoverList={discoverList}
      popularList={popularList}
      genresList={genresList}
    />
  );
};

export default Series;
