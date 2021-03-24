import styled from 'styled-components';

export const Text = styled.Text`
  color: white;
  font-size: 18px;
  font-weight: 600;
  flex: 1;
`;

export const Title = styled.Text`
  color: ${(props) => props.theme.text};
  font-size: 14px;
  padding: 4px 0;
`;

export const Date = styled.Text`
  color: ${(props) => props.theme.description};
  font-size: 12px;
`;

export const Container = styled.View`
  width: 148px;
  height: 244px;
  margin-right: 8px;
`;

export const Image = styled.Image`
  width: 100%;
  height: 80%;
  border-radius: 12px;
`;
