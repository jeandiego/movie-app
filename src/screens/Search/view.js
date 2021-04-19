import React from 'react';
import { FlatList } from 'react-native';
import { Container, Text, Image, View, Wrapper } from './styles';
import SearchInput from '../../components/SearchInput';
import { goToDetail } from '../../utils/navigate';
import List from '../../components/List';

const SearchView = (props) => {
  const { foundList, trendingList, searchName, onChangeText, loading } = props;

  const SearchResult = ({ item }) => {
    const ImgUrl = 'https://image.tmdb.org/t/p/w500/';
    const uri = `${ImgUrl}${item?.backdrop_path}`;

    return (
      <View onPress={() => goToDetail(item)}>
        <Image source={{ uri }} />
        <Wrapper>
          <Text numberOfLines={2}>{item?.title}</Text>
        </Wrapper>
      </View>
    );
  };

  const SearchHeader = () => {
    return (
      <View>
        <Text description>
          Ops, não conseguimos encontrar nada relacionado na sua busca. Explore
          nossos titulos mais populares abaixo
        </Text>
      </View>
    );
  };

  return (
    <Container>
      <SearchInput
        placeholder="Nome do filme ou série"
        value={searchName}
        onChangeText={onChangeText}
        loading={loading}
      />
      <FlatList
        data={foundList}
        keyExtractor={(item) => item?.id}
        showsHorizontalScrollIndicator={false}
        style={{
          flex: 1,
        }}
        renderItem={({ item }) => {
          return <SearchResult item={item} onPress={item} />;
        }}
        ListEmptyComponent={<>{searchName !== '' && <SearchHeader />}</>}
        ListFooterComponent={
          <List list={trendingList} title="Em alta" horizontal highlights />
        }
      />
    </Container>
  );
};

export default SearchView;
