import React, { useEffect, useState } from 'react';
import { useRoute } from '@react-navigation/native';
import {
  getAiringToday,
  getDiscover,
  getLatest,
  getNowPlaying,
  getOnTheAir,
  getPopular,
  getSuggestion,
  getTopRated,
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
  const [topRatedList, setTopRatedList] = useState([]);
  const [airingToday, setAiringToday] = useState([]);
  const [onAirNow, setOnAirNow] = useState([]);
  const [currentLanguage, setCurrentLanguage] = useState('pt');
  const [loading, setLoading] = useState(false);
  const myRoute = useRoute();
  const isTv = myRoute?.name === 'Series';

  async function getTopRatedList() {
    const topRatedItem = await getTopRated(isTv);
    setTopRatedList(topRatedItem);
  }

  async function getOnAirNow() {
    const onTheAir = await getOnTheAir();
    setOnAirNow(onTheAir);
  }

  async function getAiringTodayList() {
    const airingTodayList = await getAiringToday();
    setAiringToday(airingTodayList);
  }

  async function getTrendingList() {
    const trendingMovieList = await getTrending(isTv);
    setTrendingList(trendingMovieList);
  }

  async function getPopularList() {
    const popularMovieList = await getPopular(isTv);
    setPopularList(popularMovieList);
  }

  async function getNowPlayingList() {
    const nowPlayingMovieList = await getNowPlaying(isTv);
    setNowPlayingList(nowPlayingMovieList);
  }

  async function getDiscoverList() {
    const discoverMovieList = await getDiscover(isTv);
    setDiscoverList(discoverMovieList);
  }

  async function getSuggestionList() {
    const suggestionMovieList = await getSuggestion(isTv);
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
    await getAiringTodayList();
    await getTopRatedList();
    await getOnAirNow();
    setLoading(false);
  }

  useEffect(() => {
    ChangeLanguage();
    Inicialize();
  }, []);

  return (
    <HomeView
      loading={loading}
      isTv={isTv}
      onAirNow={onAirNow}
      ChangeLanguage={ChangeLanguage}
      currentLanguage={currentLanguage}
      topRatedList={topRatedList}
      trendingList={trendingList}
      airingToday={airingToday}
      popularList={popularList}
      nowPlayingList={nowPlayingList}
      discoverList={discoverList}
      suggestionList={suggestionList}
      genresList={genresList}
    />
  );
};

export default Home;
