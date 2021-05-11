/* eslint-disable react/prop-types */
import React from 'react';
import { FlatList } from 'react-native-gesture-handler';
import { goToDetail } from '../../utils/navigate';
import Header from '../Headers';
import { Container, Image } from './styles';

const MovieList = ({ list, title, highlights, horizontal, columns }) => {
  const ImgUrl = 'https://image.tmdb.org/t/p/w500/';

  return (
    <>
      <Header type="List" title={title} />
      <FlatList
        data={list}
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
            <Container
              highlights={highlights}
              onPress={() => {
                goToDetail(item);
              }}>
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
