/* eslint-disable react/prop-types */
import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Gradient, HeaderWrapper, Text, PressArea } from './styles';

import { Logo, ChevronRight, Back } from '~/svgs';

const HeaderHome = () => {
  const insets = useSafeAreaInsets();

  return (
    <Gradient
      safeArea={insets}
      colors={[
        'rgba(23,23,33,1)',
        'rgba(23,23,33,0.8)',
        'rgba(23,23,33,0.6)',
        'rgba(0,0,0,0)',
      ]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}>
      <Logo width={42} height={36} />
    </Gradient>
  );
};

const HeaderPreview = () => {
  const insets = useSafeAreaInsets();

  return (
    <Gradient
      safeArea={insets}
      colors={[
        'rgba(23,23,33,1)',
        'rgba(23,23,33,0.8)',
        'rgba(23,23,33,0.6)',
        'rgba(0,0,0,0)',
      ]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}>
      <PressArea>
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
