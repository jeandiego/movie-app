import React from 'react';
import { FlatList } from 'react-native';
import { useTranslation } from 'react-i18next';
import { Container, Text, Image, View, Wrapper, Title } from './styles';
import SearchInput from '../../components/SearchInput';
import { goToDetail } from '../../utils/navigate';
import useColors from '../../hooks/colors';

const SearchView = (props) => {
  const { foundList, trendingList, searchName, onChangeText, loading } = props;
  const colors = useColors();
  const { t } = useTranslation();

  const SearchResult = ({ item }) => {
    const ImgUrl = 'https://image.tmdb.org/t/p/w500/';
    const uri = `${ImgUrl}${
      item?.backdrop_path ? item?.backdrop_path : item?.poster_path
    }`;

    return (
      <View onPress={() => goToDetail(item)}>
        <Image source={{ uri }} />
        <Wrapper>
          <Text numberOfLines={2}>
            {item?.title ? item?.title : item?.name}
          </Text>
        </Wrapper>
      </View>
    );
  };

  const SearchHeader = () => {
    return (
      <View>
        <Text description>{t('SEARCH.ERROR')}</Text>
      </View>
    );
  };

  return (
    <Container>
      <Title>{t('SEARCH.FIND')}</Title>
      <SearchInput
        placeholder={t('SEARCH.PLACEHOLDER')}
        value={searchName}
        onChangeText={onChangeText}
        loading={loading}
      />
      <FlatList
        data={foundList}
        keyExtractor={(item) => item?.id}
        style={{
          flex: 1,
        }}
        renderItem={({ item }) => {
          return <SearchResult item={item} onPress={item} />;
        }}
        ListEmptyComponent={<>{searchName !== '' && <SearchHeader />}</>}
        ListFooterComponent={
          <>
            {searchName === '' && (
              <FlatList
                data={trendingList}
                keyExtractor={(item) => item?.id}
                style={{
                  flex: 1,
                }}
                renderItem={({ item }) => {
                  return <SearchResult item={item} onPress={item} />;
                }}
                ListHeaderComponent={
                  <Text style={{ paddingLeft: 16, color: colors.description }}>
                    {t('SEARCH.TITLE')}
                  </Text>
                }
              />
            )}
          </>
        }
      />
    </Container>
  );
};

export default SearchView;
