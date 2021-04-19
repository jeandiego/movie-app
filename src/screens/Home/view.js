/* eslint-disable react/prop-types */
import React from 'react';
import { StatusBar } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import List from '../../components/List';
import { Container, MovieView, Loading } from './styles';
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
    loading,
  } = props;
  const insets = useSafeAreaInsets();

  return (
    <>
      <Container safeArea={insets}>
        {loading && <Loading />}
        <Header type="Home" />
        <StatusBar barStyle="light-content" />
        <Carousel
          list={discoverList}
          genres={genresList}
          ChangeLanguage={ChangeLanguage}
        />
        <MovieView safeArea={insets}>
          <List
            list={discoverList}
            title="Descubra também"
            highlights
            horizontal
          />
          <List list={trendingList} title="Em alta" horizontal />
          <List list={popularList} title="Populares" horizontal />
          <List
            list={nowPlayingList}
            title="Assistindo agora"
            highlights
            horizontal
          />
          <List
            list={nowPlayingList}
            title="Recomendados para você"
            horizontal
          />
        </MovieView>
      </Container>
    </>
  );
};

export default HomeView;
