import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Container, Title } from './styles';

const HomeView = () => {
  const insets = useSafeAreaInsets();

  return (
    <Container safeArea={insets}>
      <Title>Hello World</Title>
    </Container>
  );
};

export default HomeView;
