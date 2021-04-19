import React, { useEffect, useState } from 'react';
import {
  getDiscover,
  getNowPlaying,
  getPopular,
  getSuggestion,
  getTrending,
} from '../../controller/movies';
import { getGenres } from '../../controller/genres';
import HomeView from './view';
import api from '../../api';

const Home = () => {
  const [trendingList, setTrendingList] = useState([]);
  const [popularList, setPopularList] = useState([]);
  const [nowPlayingList, setNowPlayingList] = useState([]);
  const [discoverList, setDiscoverList] = useState([]);
  const [suggestionList, setSuggestionList] = useState([]);
  const [genresList, setGenresList] = useState([]);
  const [currentLanguage, setCurrentLanguage] = useState('pt');
  const [loading, setLoading] = useState(false);

  async function getTrendingList() {
    const trendingMovieList = await getTrending();
    setTrendingList(trendingMovieList);
  }

  async function getPopularList() {
    const popularMovieList = await getPopular();
    setPopularList(popularMovieList);
  }

  async function getNowPlayingList() {
    const nowPlayingMovieList = await getNowPlaying();
    setNowPlayingList(nowPlayingMovieList);
  }

  async function getDiscoverList() {
    const discoverMovieList = await getDiscover();
    setDiscoverList(discoverMovieList);
  }

  async function getSuggestionList() {
    const suggestionMovieList = await getSuggestion();
    setSuggestionList(suggestionMovieList);
  }

  async function getGenresList() {
    const genresMovieList = await getGenres('movie');
    setGenresList(genresMovieList);
  }

  function ChangeLanguage() {
    if (currentLanguage === 'pt') {
      api.defaults.params.language = 'en-US';
      setCurrentLanguage('en');
    } else {
      api.defaults.params.language = 'pt-BR';
      setCurrentLanguage('pt');
    }
    Inicialize();
  }

  async function Inicialize() {
    setLoading(true);
    await getGenresList();
    await getDiscoverList();
    await getTrendingList();
    await getPopularList();
    await getNowPlayingList();
    await getSuggestionList();
    setLoading(false);
  }

  useEffect(() => {
    Inicialize();
  }, []);

  return (
    <HomeView
      loading={loading}
      ChangeLanguage={ChangeLanguage}
      trendingList={trendingList}
      popularList={popularList}
      nowPlayingList={nowPlayingList}
      discoverList={discoverList}
      suggestionList={suggestionList}
      genresList={genresList}
    />
  );
};

export default Home;
