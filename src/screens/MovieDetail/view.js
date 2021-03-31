import React from 'react';
import { StatusBar, View } from 'react-native';
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
  Badge,
  MovieWrapper,
  Button,
  ButtonText,
  Line,
  Content,
  Average,
  Score,
  Divider,
  PlayButton,
  Text,
} from './styles';
import { Logo } from '~/svgs';

const MovieDetailView = (props) => {
  const { suggestionList, movieDetail, buttonsView } = props;

  const setVoteColor = (vote) => {
    if (vote >= 8) {
      return <Score style={{ color: 'green' }}>{vote}</Score>;
    }
    if (vote >= 6) {
      return <Score style={{ color: 'orange' }}>{vote}</Score>;
    }
    return <Score style={{ color: 'red' }}>{vote}</Score>;
  };

  return (
    <Container>
      <StatusBar barStyle="light-content" />
      <MovieWrapper>
        <Header type="Preview" />
        <MovieBackground>
          <Image
            source={{
              uri: `https://image.tmdb.org/t/p/w500/${movieDetail?.backdrop_path}`,
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
            <Badge>FILME</Badge>
            <Average>{setVoteColor(movieDetail?.vote_average)}</Average>
          </Wrapper>
          <Title>{movieDetail?.original_title}</Title>
          <Description>{movieDetail?.overview}</Description>
          {/* <Play onPress={() => {}}>
            <ButtonText>Assistir</ButtonText>
          </Play> */}
          <PlayButton onPress={() => {}}>
            <Text>Assistir agora</Text>
          </PlayButton>
          <Wrapper style={{ paddingBottom: 16, paddingTop: 16 }}>
            {buttonsView.map((item, index) => {
              return (
                <React.Fragment key={item.text}>
                  <Button onPress={item.onPress}>
                    <item.icon width={24} height={24} />
                    <ButtonText>{item.text}</ButtonText>
                  </Button>
                  {buttonsView?.length !== index + 1 && <Divider />}
                </React.Fragment>
              );
            })}
          </Wrapper>
          <Line />
        </Content>

        <MovieList
          movies={suggestionList}
          title="Recomendados para você"
          columns={3}
        />
      </MovieWrapper>
    </Container>
  );
};

export default MovieDetailView;
