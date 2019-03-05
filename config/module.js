const resolve = require('path').resolve;
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  rules: [
    {
      test: /\.(js|jsx)$/,
      use: [
        {
          loader: require.resolve('babel-loader')
        }
      ],
      include: [resolve('src'), resolve('test')],
      exclude: [resolve('node_modules')]
    },
    {
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    },
    {
      test: /\.scss$/,
      use: ExtractTextPlugin.extract({
        fallback: {
          loader: 'style-loader'
        },
        use: [
          {
            loader: 'css-loader'
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: [
                require('autoprefixer')({
                  browsers: ['> 1%', 'last 2 versions']
                })
              ]
            }
          },
          'sass-loader'
        ]
      }),
      include: [resolve('src')]
    },
    {
      test: /\.(png|jpg|gif|eot|svg|ttf|woff|woff2)$/,
      use: [
        {
          loader: 'url-loader',
          options: {
            limit: 8192
          }
        }
      ]
    },
    {
      test: /\.(mp4|ogg)$/,
      use: [
        {
          loader: 'file-loader'
        }
      ]
    }
  ]
};
