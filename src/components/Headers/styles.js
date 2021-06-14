import styled from 'styled-components';
import LinearGradient from 'react-native-linear-gradient';

export const Gradient = styled(LinearGradient)`
  flex-direction: row;
  padding: 16px;
  padding-top: ${(props) => props.safeArea.top + 16}px;
  position: absolute;
  z-index: 10;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  /* position: absolute;
  top: 0; */
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

export const Language = styled.Text`
  color: ${(props) => props.theme.svgcolors};
  font-size: 14px;
  font-weight: 600;
  margin-right: 4px;
`;

export const PressArea = styled.TouchableOpacity`
  padding: 8px 12px;
  background: ${(props) => props.theme.darkTransparent};
  border-radius: 22px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
