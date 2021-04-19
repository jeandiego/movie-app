import styled from 'styled-components';
import useColors from '../../hooks/colors';

const colors = useColors();

export const InputArea = styled.View`
  height: 48px;
  margin: 0 16px 16px;
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
  font-weight: 400;
  height: 52px;
  padding: 0 8px;
  color: ${(props) => props.theme.white};
`;
