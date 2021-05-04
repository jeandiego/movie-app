import React from 'react';
import { FlatList } from 'react-native';
import { Container, Text, Image, View, Wrapper, Title } from './styles';
import SearchInput from '../../components/SearchInput';
import { goToDetail } from '../../utils/navigate';
import useColors from '../../hooks/colors';

const SearchView = (props) => {
  const { foundList, trendingList, searchName, onChangeText, loading } = props;
  const colors = useColors();

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
        <Text description>
          Ops, não conseguimos encontrar nada relacionado na sua busca.
        </Text>
      </View>
    );
  };

  return (
    <Container>
      <Title>Encontre seu filme</Title>
      <SearchInput
        placeholder="Nome do filme ou série"
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
                    Mais procurados agora
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
