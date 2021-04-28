import styled from 'styled-components';

export const Container = styled.SafeAreaView`
  background: ${(props) => props.theme.background};
  flex: 1;
`;

export const Text = styled.Text`
  color: ${(props) => props.theme.text};
  font-size: 18px;
  font-weight: 700;
  padding: 8px 16px;
`;

export const Title = styled.Text`
  color: ${(props) => props.theme.white};
  font-size: 22px;
  font-weight: 700;
  padding: 16px;
`;

export const Overview = styled.Text`
  color: ${(props) => props.theme.description};
  font-size: 15px;
  padding: 0 16px;
`;

export const Image = styled.Image`
  width: 100%;
  height: 218px;
`;

export const Card = styled.TouchableOpacity.attrs({
  activeOpacity: 1,
})`
  margin-bottom: 36px;
`;

export const Line = styled.View`
  height: 8px;
  background: ${(props) => props.theme.primary};
`;
