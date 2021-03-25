import React, { useEffect, useState } from 'react';
import PreviewView from './view';
import { getTrending } from '../../controller/movies';

const PreviewScreen = () => {
  const [trendingList, setTrendingList] = useState([]);

  async function getTrendingList() {
    const trendingMovieList = await getTrending();
    setTrendingList(trendingMovieList);
  }

  useEffect(() => {
    getTrendingList();
  }, []);

  return <PreviewView trendingList={trendingList} />;
};

export default PreviewScreen;
