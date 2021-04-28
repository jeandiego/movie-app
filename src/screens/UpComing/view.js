import React from 'react';
import { FlatList } from 'react-native-gesture-handler';
import { Container, Text, Title, Image, Card, Overview, Line } from './styles';

const RenderItem = ({ item }) => {
  const ImgUrl = 'https://image.tmdb.org/t/p/w500/';
  const uri = `${ImgUrl}${item?.backdrop_path}`;

  return (
    <Card>
      <Image source={{ uri }} />
      <Text>{item?.title}</Text>
      <Overview numberOfLines={3}>{item?.overview}</Overview>
    </Card>
  );
};

const UpComingView = (props) => {
  const { upComingList } = props;

  return (
    <Container>
      <Title>Próximos lançamentos</Title>
      <FlatList
        data={upComingList}
        keyExtractor={(item) => item?.id}
        renderItem={({ item }) => <RenderItem item={item} />}
        ItemSeparatorComponent={() => <Line />}
      />
    </Container>
  );
};

export default UpComingView;
