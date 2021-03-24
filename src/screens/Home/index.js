import React, { useEffect, useState } from 'react';
import {
  getNowPlaying,
  getPopular,
  getTrending,
} from '../../controller/movies';
import HomeView from './view';

const Home = () => {
  const [trendingList, setTrendingList] = useState([]);
  const [popularList, setPopularList] = useState([]);
  const [nowPlayingList, setNowPlayingList] = useState([]);

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

  useEffect(() => {
    getTrendingList();
  }, []);

  useEffect(() => {
    getPopularList();
  }, []);

  useEffect(() => {
    getNowPlayingList();
  }, []);

  return (
    <HomeView
      trendingList={trendingList}
      popularList={popularList}
      nowPlayingList={nowPlayingList}
    />
  );
};

export default Home;
