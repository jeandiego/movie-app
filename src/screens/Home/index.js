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

const Home = () => {
  const [trendingList, setTrendingList] = useState([]);
  const [popularList, setPopularList] = useState([]);
  const [nowPlayingList, setNowPlayingList] = useState([]);
  const [discoverList, setDiscoverList] = useState([]);
  const [suggestionList, setSuggestionList] = useState([]);
  const [genresList, setGenresList] = useState([]);

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
    const genresMovieList = await getGenres();
    setGenresList(genresMovieList);
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

  useEffect(() => {
    getGenresList();
  }, []);

  return (
    <HomeView
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
