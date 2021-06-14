import React, { useEffect, useState } from 'react';
import { useRoute } from '@react-navigation/native';
import {
  getAiringToday,
  getDiscover,
  getNowPlaying,
  getOnTheAir,
  getPopular,
  getTopRated,
  getTrending,
} from '../../controller/movies';
import { getGenres } from '../../controller/genres';
import HomeView from './view';
import api from '../../api';
import i18n from '../../lang';

const Home = () => {
  const [trendingList, setTrendingList] = useState([]);
  const [popularList, setPopularList] = useState([]);
  const [nowPlayingList, setNowPlayingList] = useState([]);
  const [discoverList, setDiscoverList] = useState([]);

  const [genresList, setGenresList] = useState([]);
  const [topRatedList, setTopRatedList] = useState([]);
  const [airingToday, setAiringToday] = useState([]);
  const [onAirNow, setOnAirNow] = useState([]);
  const [currentLanguage, setCurrentLanguage] = useState('pt');
  const [loading, setLoading] = useState(false);
  const myRoute = useRoute();
  const isTv = myRoute?.name === 'Series';

  async function Initialize() {
    setLoading(true);

    const topRatedItem = await getTopRated(isTv);
    const onTheAir = await getOnTheAir();
    const airingTodayList = await getAiringToday();
    const trendingMovieList = await getTrending(isTv);
    const popularMovieList = await getPopular(isTv);
    const nowPlayingMovieList = await getNowPlaying(isTv);
    const discoverMovieList = await getDiscover(isTv);
    const genresMovieList = await getGenres('movie');

    setTrendingList(trendingMovieList);
    setPopularList(popularMovieList);
    setNowPlayingList(nowPlayingMovieList);
    setDiscoverList(discoverMovieList);
    setGenresList(genresMovieList);
    setTopRatedList(topRatedItem);
    setAiringToday(airingTodayList);
    setOnAirNow(onTheAir);
    setLoading(false);
  }

  function ChangeLanguage() {
    if (currentLanguage === 'pt') {
      api.defaults.params.language = 'en-US';
      i18n.changeLanguage('en');
      setCurrentLanguage('en');
    } else {
      api.defaults.params.language = 'pt-BR';
      setCurrentLanguage('pt');
      i18n.changeLanguage('pt');
    }
    Initialize();
  }

  useEffect(() => {
    Initialize();
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
      genresList={genresList}
    />
  );
};

export default Home;
