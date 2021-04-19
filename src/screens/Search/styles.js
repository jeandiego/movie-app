import styled from 'styled-components';
import useColors from '../../hooks/colors';

const colors = useColors();

export const Container = styled.SafeAreaView`
  background: ${(props) => props.theme.background};
  flex: 1;
`;

export const Wrapper = styled.View`
  flex: 1;
`;

export const Text = styled.Text`
  font-size: ${(props) => (props.description ? 15 : 16)}px;
  font-weight: ${(props) => (props.description ? 400 : 700)};
  color: ${(props) => (props.description ? colors.description : colors.white)};
  padding: 16px 0;
`;

export const InputArea = styled.View`
  height: 52px;
  margin: 0 16px;
  padding: 12px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme.secondary};
  border: 1px solid ${(props) => props.theme.bordercolor};
  border-radius: 8px;
`;

export const InputSearch = styled.TextInput.attrs({
  placeholderTextColor: `${colors.svgcolors}`,
})`
  flex: 1;
  font-size: 15px;
  font-weight: 500;
  height: 52px;
  padding: 0 8px;
  color: ${(props) => props.theme.white};
`;

export const Image = styled.Image`
  width: 150px;
  height: 100px;
  border-radius: 16px;
  margin-right: 16px;
`;

export const View = styled.TouchableOpacity`
  flex-direction: row;
  padding: 8px 16px;
  align-items: center;
`;
