/* eslint-disable react/prop-types */
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { FlatList } from 'react-native-gesture-handler';
import Header from '../Headers';
import { Container, Image } from './styles';

const MovieList = ({ movies, title, highlights, horizontal, columns }) => {
  const navigation = useNavigation();
  const ImgUrl = 'https://image.tmdb.org/t/p/w500/';

  function goToDetail(movie) {
    navigation.navigate('Preview', { movie });
  }

  return (
    <>
      <Header type="List" title={title} />
      <FlatList
        data={movies}
        keyExtractor={(item) => item.id}
        horizontal={horizontal}
        numColumns={columns}
        showsHorizontalScrollIndicator={false}
        style={{
          flex: 1,
          marginTop: 8,
          paddingLeft: 16,
          paddingRight: 16,
          marginBottom: 16,
        }}
        renderItem={({ item }) => {
          const uri = `${ImgUrl}${item.poster_path}`;

          return (
            <Container highlights={highlights} onPress={() => goToDetail(item)}>
              <Image
                highlights={highlights}
                source={{
                  uri,
                }}
              />
            </Container>
          );
        }}
      />
    </>
  );
};

export default MovieList;
