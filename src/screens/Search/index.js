import React, { useEffect, useState } from 'react';
import { getTrending } from '../../controller/movies';
import { searchMulti } from '../../controller/search';
import SearchView from './view';

const Search = () => {
  const [trendingList, setTrendingList] = useState([]);
  const [searchName, setSearchName] = useState('');
  const [foundList, setFoundList] = useState([]);
  const [loading, setLoading] = useState(false);

  async function getTrendingList() {
    const trendingMovieList = await getTrending();
    setTrendingList(trendingMovieList);
  }

  async function multiSearch() {
    setLoading(true);
    const results = await searchMulti(searchName);
    setFoundList(results);
    setLoading(false);
  }

  useEffect(() => {
    multiSearch();
  }, [searchName]);

  useEffect(() => {
    getTrendingList();
  }, []);

  return (
    <SearchView
      loading={loading}
      foundList={foundList}
      searchName={searchName}
      onChangeText={setSearchName}
      trendingList={trendingList}
    />
  );
};

export default Search;
