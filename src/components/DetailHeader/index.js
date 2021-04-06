import React from 'react';
import Header from '../Headers';

import {
  MovieBackground,
  Image,
  Title,
  GradientBottom,
  Description,
  Wrapper,
  Badge,
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
import useColors from '../../hooks/colors';
import { Logo, Add, Like, Send } from '~/svgs';

const DetailHeader = ({ movieDetail }) => {
  const colors = useColors();
  const ImgUrl = 'https://image.tmdb.org/t/p/w500/';
  const uri = `${ImgUrl}${movieDetail?.poster_path}`;

  const setVoteColor = (vote) => {
    if (vote >= 8) {
      return <Score style={{ color: colors.positive }}>{vote}</Score>;
    }
    if (vote >= 6) {
      return <Score style={{ color: colors.medium }}>{vote}</Score>;
    }
    return <Score style={{ color: colors.negative }}>{vote}</Score>;
  };

  const buttonsView = [
    {
      text: 'Minha lista',
      icon: Add,
      onPress: () => {},
    },
    {
      text: 'Gostei',
      icon: Like,
      onPress: () => {},
    },
    {
      text: 'Compartilhar',
      icon: Send,
      onPress: () => {},
    },
  ];

  return (
    <>
      <Header type="Preview" />
      <MovieBackground>
        <Image
          source={{
            uri,
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
        <Title>{movieDetail?.title}</Title>
        <Description>{movieDetail?.overview}</Description>
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
    </>
  );
};

export default DetailHeader;
