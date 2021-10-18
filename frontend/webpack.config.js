const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const ReactRefreshTypeScript = require('react-refresh-typescript');

const isDevelopment = process.env.NODE_ENV !== 'production';

// (1) https://stackoverflow.com/questions/43209666/react-router-v4-cannot-get-url

module.exports = {
  mode: isDevelopment ? 'development' : 'production',
  devServer: {
    static: path.resolve(__dirname, 'public'),
    hot: true,
    historyApiFallback: true // (1) extra para funcionar direito o Router 
  },
  devtool: isDevelopment ? 'eval-source-map' : 'source-map',
  entry: path.resolve(__dirname, 'src', 'index.tsx'),
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/' // (1) extra para funcionar direito o Router
  },
  resolve: {
    extensions: [ '.js', '.jsx', '.ts', '.tsx', '.less'],
  },
  plugins: [
    isDevelopment && new ReactRefreshWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public', 'index.html')
    })
  ].filter(Boolean),
  module: {
    rules: [
      // {
      //   test: /\.(j|t)sx$/,
      //   exclude: /node_modules/,
      //   use: {
      //     loader: 'babel-loader',
      //     options: {
      //       plugins: [
      //         isDevelopment && require.resolve('react-refresh/babel')
      //       ].filter(Boolean),
      //     }
      //   },
      // },
      // {
      //   test: /\.css$/,
      //   exclude: /node_modules/,
      //   use: ['style-loader', 'css-loader'],
      // },
      { 
        // Fix problema no plugin @pmmmwh/react-refresh-webpack-plugin
        test: /\.[jt]sx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: require.resolve('ts-loader'),
            options: {
              getCustomTransformers: () => ({
                before: [isDevelopment && ReactRefreshTypeScript()].filter(Boolean),
              }),
              transpileOnly: isDevelopment,
            },
          },
        ],
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
      {
        test: /\.(css|less)$/,
        loaders: ['style-loader', 'css-loader', 'less-loader'],
      },
    ]
  }
}