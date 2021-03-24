/* eslint-disable react/prop-types */
import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler';
import MovieList from '../../components/MovieList';
import { Container } from './styles';
import Headers from '../../components/Headers';

const HomeView = (props) => {
  const { trendingList, popularList, nowPlayingList } = props;
  const insets = useSafeAreaInsets();

  return (
    <Container safeArea={insets}>
      <ScrollView>
        <Headers />
        <MovieList list={trendingList} title="Em alta" />
        <MovieList list={popularList} title="Populares" />
        <MovieList list={nowPlayingList} title="Now Playing" />
        <MovieList list={popularList} title="Populares" />
      </ScrollView>
    </Container>
  );
};

export default HomeView;
