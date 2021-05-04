/* eslint-disable react/prop-types */
import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { Gradient, HeaderWrapper, Text, Language, PressArea } from './styles';
import { Logo, ChevronRight, Back, Globe } from '~/svgs';

const HeaderHome = ({ ChangeLanguage, currentLanguage }) => {
  const insets = useSafeAreaInsets();

  return (
    <Gradient
      safeArea={insets}
      colors={[
        'rgba(0,0,0,1)',
        'rgba(0,0,0,0.9)',
        'rgba(0,0,0,0.6)',
        'rgba(0,0,0,0)',
      ]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}>
      <Logo width={42} height={36} />
      <PressArea onPress={() => ChangeLanguage()}>
        <Language>{currentLanguage.toUpperCase()}</Language>
        <Globe width={24} height={24} />
      </PressArea>
    </Gradient>
  );
};

const HeaderPreview = () => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();

  return (
    <Gradient
      safeArea={insets}
      colors={[
        'rgba(0,0,0,1)',
        'rgba(0,0,0,0.8)',
        'rgba(0,0,0,0.6)',
        'rgba(0,0,0,0)',
      ]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}>
      <PressArea onPress={navigation.goBack}>
        <Back width={28} height={28} />
      </PressArea>
    </Gradient>
  );
};

const HeaderList = ({ title }) => {
  return (
    <HeaderWrapper>
      <Text>{title}</Text>
      <ChevronRight />
    </HeaderWrapper>
  );
};

const Header = (props) => {
  const { type } = props;

  switch (type) {
    case 'Home':
      return <HeaderHome {...props} />;
    case 'List':
      return <HeaderList {...props} />;
    case 'Preview':
      return <HeaderPreview {...props} />;
    default:
      return <HeaderHome />;
  }
};

export default Header;
