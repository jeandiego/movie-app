import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: ${(props) => props.theme.background};
  padding-top: ${(props) => props.safeArea.top + 16}px;
`;

export const Title = styled.Text`
  color: ${(props) => props.theme.text};
  font-size: 36px;
`;
