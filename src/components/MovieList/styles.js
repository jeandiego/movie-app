import styled from 'styled-components';

export const Container = styled.TouchableOpacity`
  width: ${(props) => (props.highlights ? 175 : 110)}px;
  height: ${(props) => (props.highlights ? 263 : 160)}px;
  margin-right: 8px;
`;

export const Text = styled.Text`
  color: ${(props) => props.theme.text};
  font-size: 18px;
  font-weight: 700;
  padding-left: 16px;
`;

export const Image = styled.Image.attrs({
  resizeMode: 'stretch',
})`
  width: 100%;
  height: 100%;
  border-radius: ${(props) => (props.highlights ? 12 : 6)}px;
`;
