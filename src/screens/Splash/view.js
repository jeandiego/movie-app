import React from 'react';
import { ActivityIndicator } from 'react-native';
import { Container, PatternBg } from './styles';
import { LogoName, LargeLogo } from '~/svgs';
import { useColors } from '../../hooks';

const SplashView = () => {
  const colors = useColors();

  return (
    <>
      <Container>
        <PatternBg>
          <LargeLogo width={508} height={500} />
        </PatternBg>
        <LogoName width={268} height={76} />
        <ActivityIndicator
          style={{
            position: 'absolute',
            bottom: 0,
            paddingVertical: 64,
          }}
          size="large"
          color={colors.primary}
        />
      </Container>
    </>
  );
};

export default SplashView;
