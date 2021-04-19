import styled from 'styled-components';

export const Container = styled.ScrollView`
  background: ${(props) => props.theme.background};
  flex: 1;
`;

export const Text = styled.Text`
  font-size: 24px;
  color: white;
`;
