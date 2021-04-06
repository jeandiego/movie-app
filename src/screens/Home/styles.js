import styled from 'styled-components/native';

export const Container = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: 'false',
})`
  flex: 1;
  background: ${(props) => props.theme.background};
`;

export const MovieView = styled.View`
  padding-bottom: ${(props) => props.safeArea.bottom + 64}px;
`;

export const Title = styled.Text`
  color: ${(props) => props.theme.text};
  font-size: 36px;
`;

export const Loading = styled.ActivityIndicator.attrs({
  size: 'large',
  color: 'red',
})`
  height: 100%;
  justify-content: center;
  align-items: center;
`;
