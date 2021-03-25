/* eslint-disable react/prop-types */
import React from 'react';
import { FlatList } from 'react-native-gesture-handler';
import Header from '../Headers';
import { Container, Image } from './styles';

const MovieList = ({ list, title, highlights }) => {
  const ImgUrl = 'https://image.tmdb.org/t/p/w500/';

  return (
    <>
      <Header type="List" title={title} />
      <FlatList
        data={list}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{
          flexGrow: 1,
          marginTop: 8,
          paddingLeft: 16,
          marginBottom: 16,
        }}
        renderItem={({ item }) => {
          const uri = `${ImgUrl}${item.poster_path}`;

          return (
            <>
              <Container highlights={highlights}>
                <Image
                  highlights={highlights}
                  source={{
                    uri,
                  }}
                />
                {/* <Title numberOfLines={1}>{item.title}</Title>
                <Genres>Ação</Genres> */}
              </Container>
            </>
          );
        }}
      />
    </>
  );
};

export default MovieList;
