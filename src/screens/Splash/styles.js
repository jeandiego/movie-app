import styled from 'styled-components';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme.background};
`;

export const PatternBg = styled.View`
  position: absolute;
  left: -20%;
`;
