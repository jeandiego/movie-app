import React, { useEffect, useState } from 'react';
import { getUpcomingMovies } from '../../controller/movies';
import UpComingView from './view';

const UpComing = () => {
  const [upComingList, setUpComingList] = useState([]);

  async function getUpcomingList() {
    const upComingMovies = await getUpcomingMovies();
    setUpComingList(upComingMovies);
  }

  async function Inicialize() {
    await getUpcomingList();
  }

  useEffect(() => {
    Inicialize();
  }, []);

  return <UpComingView upComingList={upComingList} />;
};

export default UpComing;
