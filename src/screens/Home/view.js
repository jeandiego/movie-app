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
    topRatedList,
    airingToday,
    onAirNow,
    genresList,
    ChangeLanguage,
    loading,
    isTv,
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
          <List list={trendingList} title="Em alta" highlights horizontal />
          <List
            list={isTv ? airingToday : nowPlayingList}
            title={`${isTv ? 'Assistidos hoje' : 'Assistindo agora'}`}
            horizontal
          />
          {isTv && <List list={onAirNow} title="Assistindo agora" horizontal />}
          {!isTv && (
            <List list={popularList} title="Mais populares" horizontal />
          )}
          <List list={topRatedList} title="Melhores notas" horizontal />
        </MovieView>
      </Container>
    </>
  );
};

export default HomeView;
