import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components';
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('screen');

export const Container = styled.View`
  height: ${`${height / 1.6}px`};
`;

export const Image = styled.Image.attrs({
  resizeMode: 'cover',
})`
  width: 100%;
  height: 100%;
  z-index: 9;
`;

export const GradientBottom = styled(LinearGradient)`
  flex-direction: row;
  position: absolute;
  z-index: 10;
  width: 100%;
  height: 50%;
  bottom: 0;
`;

export const ItemList = styled.TouchableOpacity.attrs({
  activeOpacity: 1,
})`
  height: 100%;
  width: ${`${width}`}px;
`;

export const InfoWrapper = styled.View`
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  padding: 24px;
`;

export const Title = styled.Text`
  color: ${(props) => props.theme.text};
  font-size: 24px;
  font-weight: 600;
  padding: 4px 0;
`;

export const Genres = styled.Text`
  color: ${(props) => props.theme.description};
  font-size: 17px;
  font-weight: 500;
  padding-bottom: 16px;
  /* background: red; */
`;

export const WatchButton = styled.TouchableOpacity`
  background: ${(props) => props.theme.primary};
  width: 100%;
  border-radius: 6px;
  flex: 0.3;
  align-items: center;
  justify-content: center;
`;

export const Text = styled.Text`
  color: ${(props) => props.theme.text};
  font-size: 14px;
  font-weight: 600;
`;
