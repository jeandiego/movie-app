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
  InfoWrapper,
  WatchButton,
  Text,
} from './styles';

const Carousel = ({ list }) => {
  const navigation = useNavigation();
  const ImgUrl = 'https://image.tmdb.org/t/p/w500/';

  function onPress() {
    navigation.navigate('Preview');
  }

  return (
    <Container>
      <FlatList
        data={list}
        keyExtractor={(item) => item.id}
        horizontal
        pagingEnabled
        autoPlay
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => {
          const uri = `${ImgUrl}${item.backdrop_path}`;

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
                    <Title>{item.genre_ids}</Title>
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
