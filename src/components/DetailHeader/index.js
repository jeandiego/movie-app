import React from 'react';
import { useTranslation } from 'react-i18next';
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

const DetailHeader = ({ detail }) => {
  const colors = useColors();
  const ImgUrl = 'https://image.tmdb.org/t/p/w500/';
  const uri = `${ImgUrl}${detail?.backdrop_path}`;
  const { t } = useTranslation();

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
      text: `${t('BUTTONS.MY_LIST')}`,
      icon: Add,
      onPress: () => {},
    },
    {
      text: `${t('BUTTONS.LIKE')}`,
      icon: Like,
      onPress: () => {},
    },
    {
      text: `${t('BUTTONS.SHARE')}`,
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
          <Badge>{t('MOVIE').toUpperCase()}</Badge>
          <Average>{setVoteColor(detail?.vote_average)}</Average>
        </Wrapper>
        <Title>{detail?.title || detail?.name}</Title>
        <Description>{detail?.overview}</Description>
        <PlayButton onPress={() => {}}>
          <Text>{t('BUTTONS.PLAY_NOW')}</Text>
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
