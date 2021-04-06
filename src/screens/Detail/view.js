import React from 'react';
import { StatusBar } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import { useNavigation } from '@react-navigation/native';
import { Container, ListItem, Poster, Backdrop, Title } from './styles';
import DetailHeader from '../../components/DetailHeader';

const DetailView = (props) => {
  const { suggestionList, movieDetail } = props;
  const similarList = suggestionList.slice(0, 12);
  const ImgUrl = 'https://image.tmdb.org/t/p/w500/';
  const navigation = useNavigation();

  function goToDetail(movie) {
    navigation.navigate('Detail', { movie });
  }

  return (
    <Container>
      <StatusBar barStyle="light-content" />
      <FlatList
        data={similarList}
        keyExtractor={(item) => item.id}
        numColumns={3}
        bounces={false}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <>
            <DetailHeader movieDetail={movieDetail} />
            <Title>OPÇÕES SEMELHANTES</Title>
          </>
        }
        renderItem={({ item }) => {
          const uri = `${ImgUrl}${item.poster_path}`;

          return (
            <ListItem>
              <Poster onPress={() => goToDetail(item)}>
                <Backdrop
                  source={{
                    uri,
                  }}
                />
              </Poster>
            </ListItem>
          );
        }}
      />
    </Container>
  );
};

export default DetailView;
