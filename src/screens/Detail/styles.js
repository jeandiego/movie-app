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
  padding: 8px 0;
`;

export const Description = styled.Text`
  color: ${(props) => props.theme.description};
  font-size: 16px;
  font-weight: 400;
`;

export const Image = styled.Image.attrs({
  resizeMode: 'cover',
})`
  width: 100%;
  height: 100%;
`;

export const Average = styled.View`
  width: 54px;
  height: 30px;
  /* background: ${(props) => props.theme.semiTransparent}; */
  border: ${(props) => props.theme.bordercolor};
  border-radius: 6px;
  position: absolute;
  right: 0;
  justify-content: center;
  align-items: center;
`;

export const Score = styled.Text`
  color: orange;
  font-size: 15px;
  font-weight: 600;
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
})`
  flex: 1;
`;

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
  font-size: 16px;
  opacity: 0.35;
  font-weight: 500;
  letter-spacing: 2px;
  margin-left: 8px;
`;

export const Rating = styled.Text`
  color: ${(props) => props.theme.positive};
  font-size: 16px;
  font-weight: 600;
`;

export const Button = styled.TouchableOpacity`
  background: ${(props) => props.theme.semiTransparent};
  flex: 1;
  align-items: center;
  padding: 8px;
  border-radius: 6px;
`;

export const ButtonText = styled.Text`
  font-size: 10px;
  margin-top: 4px;
  color: ${(props) => props.theme.description};
`;

export const Line = styled.View`
  height: 4px;
  margin: 16px 0px;
  background: ${(props) => props.theme.primary};
`;

export const Divider = styled.View`
  width: 8px;
`;

export const PlayButton = styled.TouchableOpacity`
  background: ${(props) => props.theme.primary};
  width: 100%;
  height: 48px;
  border-radius: 6px;
  align-items: center;
  justify-content: center;
  margin-top: 16px;
`;

export const Text = styled.Text`
  color: ${(props) => props.theme.text};
  font-size: 16px;
  font-weight: 600;
`;
