import React from 'react';
import { View } from 'react-native';
import { SvgXml } from 'react-native-svg';
import { useColors } from '../hooks';

const Svg = (props) => {
  const { width, height } = props;
  const colors = useColors();

  const xml = `
  <svg width="${width || 768}" height="${
    height || 660
  }" viewBox="0 0 700 660" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g opacity="0.08">
  <path d="M287.527 0H454.433L315.582 660H148.677L287.527 0Z" fill="url(#paint0_linear)"/>
  <path d="M533.502 0H700L592.08 518.4H425.542L533.502 0Z" fill="url(#paint1_linear)"/>
  <path d="M39.9594 0H206.458L98.5377 518.4H-68L39.9594 0Z" fill="url(#paint2_linear)"/>
  </g>
  <defs>
  <linearGradient id="paint0_linear" x1="301.555" y1="0" x2="301.555" y2="660" gradientUnits="userSpaceOnUse">
  <stop stop-color="${colors.primary}" stop-opacity="0"/>
  <stop offset="1" stop-color="${colors.primary}"/>
  </linearGradient>
  <linearGradient id="paint1_linear" x1="562.771" y1="0" x2="562.771" y2="518.4" gradientUnits="userSpaceOnUse">
  <stop stop-color="${colors.primary}" stop-opacity="0"/>
  <stop offset="1" stop-color="${colors.primary}"/>
  </linearGradient>
  <linearGradient id="paint2_linear" x1="69.2288" y1="0" x2="69.2288" y2="518.4" gradientUnits="userSpaceOnUse">
  <stop stop-color="${colors.primary}" stop-opacity="0"/>
  <stop offset="1" stop-color="${colors.primary}"/>
  </linearGradient>
  </defs>
  </svg>
`;

  return (
    <View>
      <SvgXml xml={xml} width={width} height={height} />
    </View>
  );
};

export default Svg;
