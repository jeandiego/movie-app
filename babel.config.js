module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    ['module:react-native-dotenv'],
    [
      'babel-plugin-root-import',
      {
        rootPathSuffix: 'src',
      },
    ],
    [
      'module-resolver',
      {
        alias: {
          overhooks: './src/hooks',
        },
      },
    ],
  ],
};
