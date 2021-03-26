import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import { Dimensions } from 'react-native';

const { height } = Dimensions.get('screen');

export const Container = styled.View`
  flex: 1;
  background: ${(props) => props.theme.background};
`;

export const MovieBackground = styled.View`
  height: ${`${height / 2.5}px`};
`;

export const Title = styled.Text`
  color: ${(props) => props.theme.text};
  font-size: 24px;
  font-weight: 600;
`;

export const Description = styled.Text`
  color: ${(props) => props.theme.description};
  font-size: 14px;
  font-weight: 400;
`;

export const Image = styled.Image.attrs({
  resizeMode: 'cover',
})`
  width: 100%;
  height: 100%;
`;

export const GradientBottom = styled(LinearGradient)`
  flex-direction: row;
  position: absolute;
  z-index: 10;
  width: 100%;
  height: 50%;
  bottom: 0;
`;

export const Wrapper = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 4px 0;
  justify-content: flex-start;
`;

export const MovieWrapper = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: 'false',
})``;

export const Content = styled.View`
  padding: 0 16px;
`;

export const InfoWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 8px 0;
`;

export const Badge = styled.Text`
  color: ${(props) => props.theme.white};
  font-size: ${(props) => (props.header ? 14 : 16)};
  opacity: 0.35;
  font-weight: ${(props) => (props.header ? 500 : 400)};
  letter-spacing: ${(props) => (props.header ? 4 : 0)};
  margin-left: ${(props) => (props.header ? 8 : 0)};
`;

export const Rating = styled.Text`
  color: ${(props) => props.theme.positive};
  font-size: 16px;
  font-weight: 600;
`;

export const Button = styled.TouchableOpacity`
  background: rgba(0, 0, 0, 0.2);
  flex: 0.25;
  align-items: center;
  padding: 8px;
  border-radius: 6px;
  margin-right: 8px;
`;

export const ButtonText = styled.Text`
  font-size: 10px;
  margin-top: 4px;
  color: ${(props) => props.theme.description};
`;

export const Line = styled.View`
  height: 4px;
  background: ${(props) => props.theme.primary};
`;
