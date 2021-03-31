import styled from 'styled-components';
import LinearGradient from 'react-native-linear-gradient';

export const Gradient = styled(LinearGradient)`
  flex-direction: row;
  padding: 16px;
  padding-top: ${(props) => props.safeArea.top + 8}px;
  position: absolute;
  z-index: 10;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderWrapper = styled.View`
  width: 100%;
  padding: 8px 16px 0px;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`;

export const Text = styled.Text`
  color: ${(props) => props.theme.text};
  font-size: 18px;
  font-weight: 700;
`;

export const PressArea = styled.TouchableOpacity`
  width: 44px;
  height: 44px;
  background: ${(props) => props.theme.semiTransparent};
  border-radius: 22px;
  justify-content: center;
  align-items: center;
`;
