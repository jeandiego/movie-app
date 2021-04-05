import styled from 'styled-components';

export const Container = styled.View`
  background: ${(props) => props.theme.primary};
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.Text`
  font-size: 24px;
  color: white;
`;
