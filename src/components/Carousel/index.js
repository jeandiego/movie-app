/* eslint-disable react/prop-types */
import React from 'react';
import { FlatList } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
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

const Carousel = ({ movies, genres }) => {
  const navigation = useNavigation();
  const ImgUrl = 'https://image.tmdb.org/t/p/w500/';

  function onPress() {
    navigation.navigate('Preview');
  }

  return (
    <Container>
      <FlatList
        data={movies}
        keyExtractor={(item) => item.id}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => {
          const uri = `${ImgUrl}${item.backdrop_path}`;
          const foundGenre = item.genre_ids.map((genreID) => {
            const generoEncontrado = genres.find((genre) => {
              return genreID === genre.id;
            });
            return generoEncontrado.name;
          });
          const genresFiltered = foundGenre.splice(0, 1);

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
                    <Title numberOfLines={1}>{item.title}</Title>

                    <Genres>{genresFiltered}</Genres>
                    <WatchButton onPress={onPress}>
                      <Text>Assistir</Text>
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
