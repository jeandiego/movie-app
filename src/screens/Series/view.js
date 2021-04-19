import React from 'react';
import { Container } from './styles';
import Carousel from '../../components/Carousel';
import Header from '../../components/Headers';
import List from '../../components/List';

const SeriesView = (props) => {
  const { popularList, genresList, discoverList } = props;

  console.log(discoverList);

  return (
    <Container>
      <Header type="Home" />
      <Carousel list={popularList} genres={genresList} />
      {/* <List horizontal highlights list={popularList} title="Qualquer coisa" /> */}
      {genresList.map((item) => {
        return (
          <List
            key={item?.id}
            list={discoverList}
            title={item?.name}
            horizontal
          />
        );
      })}
    </Container>
  );
};

export default SeriesView;
