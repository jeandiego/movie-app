import React, { useEffect, useState } from 'react';
import {
  getDiscover,
  getNowPlaying,
  getPopular,
  getSuggestion,
  getTrending,
} from '../../controller/movies';
import HomeView from './view';

const Home = () => {
  const [trendingList, setTrendingList] = useState([]);
  const [popularList, setPopularList] = useState([]);
  const [nowPlayingList, setNowPlayingList] = useState([]);
  const [discoverList, setDiscoverList] = useState([]);
  const [suggestionList, setSuggestionList] = useState([]);

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

  useEffect(() => {
    getTrendingList();
  }, []);

  useEffect(() => {
    getPopularList();
  }, []);

  useEffect(() => {
    getNowPlayingList();
  }, []);

  useEffect(() => {
    getDiscoverList();
  }, []);

  useEffect(() => {
    getSuggestionList();
  }, []);

  return (
    <HomeView
      trendingList={trendingList}
      popularList={popularList}
      nowPlayingList={nowPlayingList}
      discoverList={discoverList}
      suggestionList={suggestionList}
    />
  );
};

export default Home;
