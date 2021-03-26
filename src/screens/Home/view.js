/* eslint-disable react/prop-types */
import React from 'react';
import { StatusBar } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import MovieList from '../../components/MovieList';
import { Container, MovieView } from './styles';
import Header from '../../components/Headers';
import Carousel from '../../components/Carousel';

const HomeView = (props) => {
  const {
    trendingList,
    popularList,
    nowPlayingList,
    discoverList,
    suggestionList,
    genresList,
  } = props;
  const insets = useSafeAreaInsets();

  return (
    <>
      <Container safeArea={insets}>
        <Header type="Home" />
        <StatusBar barStyle="light-content" />
        <Carousel list={discoverList} genres={genresList} />
        <MovieView safeArea={insets}>
          <MovieList list={discoverList} title="Descubra também" highlights />
          <MovieList list={trendingList} title="Em alta" />
          <MovieList list={popularList} title="Populares" />
          <MovieList
            list={nowPlayingList}
            title="Assistindo agora"
            highlights
          />
          <MovieList list={suggestionList} title="Sugestao" />
        </MovieView>
      </Container>
    </>
  );
};

export default HomeView;
