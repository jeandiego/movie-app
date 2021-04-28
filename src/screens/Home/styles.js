import styled from 'styled-components/native';

export const Container = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: 'false',
})`
  flex: 1;
  background: ${(props) => props.theme.background};
`;

export const Title = styled.Text`
  color: ${(props) => props.theme.text};
  font-size: 36px;
`;
