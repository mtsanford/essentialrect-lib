const path = require('path');

// We will actually export TWO libraries.   One, the default, will not contain EssentialRectEditor, nor react-image-crop dependency.
// To use the editor, the other other library EssentialRectEditor.js must be explicitly imported.

module.exports = [
  {
    mode: "production",
    name: "EssentialRectEditor",
    entry: path.resolve(__dirname, './src/editor.ts'),
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
      library: 'EssentialRectEditor',
      libraryTarget: 'umd',
      filename: 'EssentialRectEditor.js',
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
  },
  {
    mode: "production",
    name: "EssentialRectLib",
    entry: path.resolve(__dirname, './src/lib.ts'),
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
      clean: false,
      path: path.resolve(__dirname, 'dist'),
    },
    externals: {
      react: {
        root: 'React',
        commonjs: 'react',
        commonjs2: 'react',
        amd: 'react',
      }
    },
    target: 'web',
  },
];

// clean can clobber one config
module.exports.parallelism = 1;