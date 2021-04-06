import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: ${(props) => props.theme.background};
  padding-bottom: 24px;
`;

export const Title = styled.Text`
  color: ${(props) => props.theme.text};
  font-size: 16px;
  font-weight: 600;
  padding: 8px 16px;
`;

export const Poster = styled.TouchableOpacity`
  width: 108px;
  height: 174px;
  justify-content: center;
  align-items: center;
`;

export const Backdrop = styled.Image.attrs({
  resizeMode: 'stretch',
})`
  width: 100%;
  height: 100%;
  border-radius: ${(props) => (props.highlights ? 12 : 6)}px;
`;

export const ListItem = styled.View`
  width: 32%;
  padding-left: 14px;
  margin-top: 8px;
`;
