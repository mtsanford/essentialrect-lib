const path = require('path');

module.exports = {
  mode: "production",
  entry: path.resolve(__dirname, './src/index.ts'),
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    library: 'EssentialRectLib',
    libraryTarget: 'umd',
    filename: 'EssentialRectLib.js',
    globalObject: 'this',
    clean: true,
    path: path.resolve(__dirname, 'dist'),
  },
  externals: {
    react: {
      root: 'React',
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'react',
    },
    'react-image-crop': {
      commonjs: 'react-image-crop',
      commonjs2: 'react-image-crop',
      amd: 'react-image-crop',
    }
  },
  target: 'web',
};
