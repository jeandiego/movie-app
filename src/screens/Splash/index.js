import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import SplashView from './view';

const Splash = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => navigation.navigate('Home'), 2000);
  }, []);

  return <SplashView />;
};

export default Splash;
