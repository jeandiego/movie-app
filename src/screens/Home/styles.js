import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: ${(props) => props.theme.background};
`;

export const Loading = styled.ActivityIndicator.attrs({
  size: 'large',
})`
  flex: 1;
`;

export const ScrollView = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: 'false',
})``;
