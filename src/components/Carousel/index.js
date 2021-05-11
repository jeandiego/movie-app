/* eslint-disable react/prop-types */
import React from 'react';
import { FlatList } from 'react-native-gesture-handler';
import { useTranslation } from 'react-i18next';
import {
  Container,
  Image,
  GradientBottom,
  ItemList,
  Title,
  Genres,
  InfoWrapper,
  WatchButton,
  Text,
} from './styles';
import { goToDetail } from '../../utils/navigate';

const Carousel = ({ list, genres }) => {
  const ImgUrl = 'https://image.tmdb.org/t/p/w500/';
  const { t } = useTranslation();

  return (
    <Container>
      <FlatList
        data={list}
        keyExtractor={(item) => item.id}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => {
          const uri = `${ImgUrl}${item?.backdrop_path}`;
          const genreFound = item?.genre_ids?.map((genreID) => {
            const genreMatch = genres?.find((genre) => {
              return genreID === genre?.id;
            });
            return genreMatch?.name;
          });
          const genresFiltered = genreFound?.splice(0, 1);

          return (
            <>
              <ItemList>
                <Image
                  source={{
                    uri,
                  }}
                />
                <GradientBottom
                  colors={[
                    'rgba(23,23,33,0)',
                    'rgba(23,23,33,0.65)',
                    'rgba(23,23,33,0.9)',
                    'rgba(23,23,33,1)',
                  ]}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 0, y: 1 }}>
                  <InfoWrapper>
                    <Title numberOfLines={1}>
                      {item.title ? item.title : item.name}
                    </Title>
                    <Genres>{genresFiltered}</Genres>
                    <WatchButton
                      onPress={() => {
                        console.log(item);
                        goToDetail(item);
                      }}>
                      <Text>{t('BUTTONS.PLAY')}</Text>
                    </WatchButton>
                  </InfoWrapper>
                </GradientBottom>
              </ItemList>
            </>
          );
        }}
      />
    </Container>
  );
};

export default Carousel;
