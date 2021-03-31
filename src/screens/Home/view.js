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
    ChangeLanguage,
  } = props;
  const insets = useSafeAreaInsets();

  return (
    <Container safeArea={insets}>
      <Header type="Home" />
      <StatusBar barStyle="light-content" />
      <Carousel
        movies={discoverList}
        genres={genresList}
        ChangeLanguage={ChangeLanguage}
      />
      <MovieView safeArea={insets}>
        <MovieList
          movies={discoverList}
          title="Descubra também"
          highlights
          horizontal
        />
        <MovieList movies={trendingList} title="Em alta" horizontal />
        <MovieList movies={popularList} title="Populares" horizontal />
        <MovieList
          movies={nowPlayingList}
          title="Assistindo agora"
          highlights
          horizontal
        />
        <MovieList
          movies={suggestionList}
          title="Recomendados para você"
          horizontal
        />
      </MovieView>
    </Container>
  );
};

export default HomeView;
