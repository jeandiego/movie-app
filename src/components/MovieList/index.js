/* eslint-disable react/prop-types */
import React from 'react';
import { FlatList } from 'react-native-gesture-handler';
import { Text, Container, Image, Title, Date } from './styles';

const MovieList = ({ list, title }) => {
  return (
    <>
      <Text>{title}</Text>
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
          const uri = `https://image.tmdb.org/t/p/w500/${item.poster_path}`;

          return (
            <>
              <Container>
                <Image
                  source={{
                    uri,
                  }}
                />
                <Title numberOfLines={1}>{item.title}</Title>
                <Date>{item.release_date}</Date>
              </Container>
            </>
          );
        }}
      />
    </>
  );
};

export default MovieList;
