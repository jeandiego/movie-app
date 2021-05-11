/* eslint-disable react/prop-types */
import React from 'react';
import { StatusBar } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useTranslation } from 'react-i18next';
import List from '../../components/List';
import { Container } from './styles';
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
    currentLanguage,
    isTv,
  } = props;
  const insets = useSafeAreaInsets();
  const { t } = useTranslation();

  return (
    <>
      <Container safeArea={insets}>
        <Header
          type="Home"
          ChangeLanguage={ChangeLanguage}
          currentLanguage={currentLanguage}
        />
        <StatusBar barStyle="light-content" />
        <Carousel
          list={discoverList}
          genres={genresList}
          ChangeLanguage={ChangeLanguage}
        />
        <List list={trendingList} title={t('TRENDING')} highlights horizontal />
        <List
          list={isTv ? airingToday : nowPlayingList}
          title={`${isTv ? `${t('AIRING_TODAY')}` : `${t('NOW_PLAYING')}`}`}
          horizontal
        />
        {isTv && <List list={onAirNow} title={t('ON_AIR_NOW')} horizontal />}
        {!isTv && <List list={popularList} title={t('POPULAR')} horizontal />}
        <List list={topRatedList} title={t('TOP_RATED')} horizontal />
      </Container>
    </>
  );
};

export default HomeView;
