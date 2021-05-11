import React from 'react';
import { StatusBar } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { useTranslation } from 'react-i18next';
import { Container, ListItem, Poster, Backdrop, Title } from './styles';
import DetailHeader from '../../components/DetailHeader';
import { goToDetail } from '../../utils/navigate';

const DetailView = (props) => {
  const { suggestionList, movieDetail } = props;
  const similarList = suggestionList.slice(0, 12);
  const ImgUrl = 'https://image.tmdb.org/t/p/w500/';
  const { t } = useTranslation();

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
            <DetailHeader detail={movieDetail} />
            <Title>{t('RECOMMENDATIONS').toUpperCase()}</Title>
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
