import React from 'react';
import { SvgXml } from 'react-native-svg';
import { View } from 'react-native';

const Svg = () => {
  const xml = `
  <svg width="42" height="36" viewBox="0 0 42 36" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M18.9907 0H23.5441H28.0976L20.5215 34L15.968 36L11.4146 34L18.9907 0Z" fill="#5965E0"/>
  <path d="M32.213 0H41.2683L35.3989 28.0976H26.3415L32.213 0Z" fill="#5965E0"/>
  <path d="M5.87155 0H14.9268L9.05743 28.0976H0L5.87155 0Z" fill="#5965E0"/>
  <path d="M16.5 11L17.5 6L20.5 13L27 7L26 11.5L19.5 18.5L16.5 11Z" fill="#E5E5E5"/>
  </svg>
  `;

  return (
    <View>
      <SvgXml xml={xml} />
    </View>
  );
};

export default Svg;
