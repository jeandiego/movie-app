import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: ${(props) => props.theme.background};
`;

export const Title = styled.Text`
  margin: auto;
  color: ${(props) => props.theme.text};
  font-size: 36px;
`;
