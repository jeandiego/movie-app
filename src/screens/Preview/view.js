import React from 'react';
import { StatusBar } from 'react-native';
import MovieList from '../../components/MovieList';
import Header from '../../components/Headers';

import {
  Container,
  MovieBackground,
  Image,
  Title,
  GradientBottom,
  Description,
  Wrapper,
  InfoWrapper,
  Badge,
  Rating,
  MovieWrapper,
  Button,
  ButtonText,
  Line,
  Content,
} from './styles';
import { Logo, Add, Like, Send } from '~/svgs';

const PreviewView = (props) => {
  const { trendingList } = props;

  // const myList = [
  //   {
  //     id: 14611,
  //     imdb_id: 'tt0803093',
  //     original_language: 'en',
  //     original_title: 'Ultimate Avengers 2',
  //     overview:
  //       'Mysterious Wakanda lies in the darkest heart of Africa, unknown to most of the world. An isolated land hidden behind closed borders, fiercely protected by its young king - the Black Panther. But when brutal alien invaders attack, the threat leaves the Black Panther with no option but to go against the sacred decrees of his people and ask for help from outsiders.',
  //     backdrop_path: '/ldxi7dKtud2KrStUr8V9P65ixNr.jpg',
  //   },
  // ];

  console.log(trendingList);

  return (
    <Container>
      <StatusBar barStyle="light-content" />
      <MovieWrapper>
        <Header type="Preview" />
        <MovieBackground>
          <Image
            source={{
              uri: `https://image.tmdb.org/t/p/w500/ldxi7dKtud2KrStUr8V9P65ixNr.jpg`,
            }}
          />
          <GradientBottom
            colors={[
              'rgba(23,23,33,0)',
              'rgba(23,23,33,0.8)',
              'rgba(23,23,33,1)',
            ]}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
          />
        </MovieBackground>
        <Content>
          <Wrapper>
            <Logo width={26} height={30} />
            <Badge header>FILME</Badge>
          </Wrapper>
          <Title>Vingadores: Ultimato 2</Title>
          <InfoWrapper>
            <Rating>99% gostaram</Rating>
            <Badge>1h 20m</Badge>
          </InfoWrapper>
          <Description numberOfLines={5}>
            Mysterious Wakanda lies in the darkest heart of Africa, unknown to
            most of the world. An isolated land hidden behind closed borders,
            fiercely protected by its young king - the Black Panther. But when
            brutal alien invaders attack, the threat leaves the Black Panther
            with no option but to go against the sacred decrees of his people
            and ask for help from outsiders.
          </Description>
          <Wrapper style={{ paddingBottom: 16, paddingTop: 16 }}>
            <Button onPress={() => {}}>
              <Add width={24} height={24} />
              <ButtonText>Minha lista</ButtonText>
            </Button>
            <Button onPress={() => {}}>
              <Like width={24} height={24} />
              <ButtonText>Gostei</ButtonText>
            </Button>
            <Button onPress={() => {}}>
              <Send width={24} height={24} />
              <ButtonText>Compartilhar</ButtonText>
            </Button>
          </Wrapper>
          <Line />
        </Content>
        <MovieList list={trendingList} title="Talvez você goste" />
      </MovieWrapper>
    </Container>
  );
};

export default PreviewView;
