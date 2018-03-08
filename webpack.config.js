'use strict';

const webpack = require('webpack'),
  ExtractTextPlugin = require('extract-text-webpack-plugin'),
  HtmlWebpackPlugin = require('html-webpack-plugin'),
  autoprefixer = require('autoprefixer'),
  OfflinePlugin = require('offline-plugin'),
  path = require('path');

const ENV = process.env.NODE_ENV || 'development';
const SRC_PATH = path.join(__dirname, 'src/');
const DIST_PATH = path.join(__dirname, 'docs/');

const isDevelopment = (ENV ==='development') ? true : false;

module.exports = {
    context: SRC_PATH,
    entry: [
        'babel-polyfill',
        './app.js'
    ],
    mode: ENV,
    devtool: isDevelopment ? 'source-map' : 'cheap-module-eval-source-map',
    resolve: {
        extensions: ['.jsx', '.js', '.json', '.scss'],
        modules: [
          path.resolve(__dirname, "node_modules"),
          'node_modules'
        ],
        alias: {
            components: path.join(SRC_PATH, "components"),    // used for tests
            scss: path.join(SRC_PATH, "style")
        }
    },
    output: {
        path: DIST_PATH,
        filename: '[name]-[hash].min.js',
        publicPath: '/'
    },
    module : {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: SRC_PATH,
                enforce: 'pre',
                use: 'source-map-loader'
            },
            {
                enforce: 'pre',
                test: /\.(js|jsx)$/,
                exclude: [/node_modules/, DIST_PATH],
                use: ['eslint-loader']
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test:  /\.(scss|css)$/,
                include: [path.join(SRC_PATH, 'components')],
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            options: { modules: true, sourceMap: isDevelopment, importLoaders: 1, minimize: true }
                        },
                        {
                            loader: `postcss-loader`,
                            options: {
                                sourceMap: isDevelopment,
                                plugins: () => {
                                    autoprefixer({ browsers: [ 'last 4 versions' ] });
                                }
                            }
                        },
                        {
                            loader: 'sass-loader',
                            options: { sourceMap: isDevelopment }
                        }
                    ]
                })
            },
            {
                test:  /\.(scss|css)$/,
                exclude: [path.join(SRC_PATH, 'components')],
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            options: { modules: true, sourceMap: isDevelopment, importLoaders: 1, minimize: true }
                        },
                        {
                            loader: `postcss-loader`,
                            options: {
                                sourceMap: isDevelopment,
                                plugins: () => {
                                    autoprefixer({ browsers: [ 'last 4 versions' ] });
                                }
                            }
                        },
                        {
                            loader: 'sass-loader',
                            options: { sourceMap: isDevelopment }
                        }
                    ]
                })
            }
        ]
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new ExtractTextPlugin({
            filename: 'style.css',
            allChunks: true,
            disable: isDevelopment
        }),
        new HtmlWebpackPlugin({
            title: 'McRobb.info',
            minify: { collapseWhitespace: true },
            filename: 'index.html'
        }),
        //new WebpackPwaManifest(manifest),
        new webpack.DefinePlugin({
              'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
        })
    ].concat( (!isDevelopment) ? [
        new webpack.optimize.UglifyJsPlugin({
            compress: { warnings: false, screw_ie8: true }
        }),
        new OfflinePlugin({
            relativePaths: false,
            AppCache: false,
            excludes: ['_redirects'],
            ServiceWorker: {
                events: true
            },
            cacheMaps: [
                {
                    match: /.*/,
                    to: '/',
                    requestTypes: ['navigate']
                }
            ],
            publicPath: '/'
        })
    ] : []),
    stats: { colors: true },
    node: {
      global: true,
      process: false,
      Buffer: false,
      __filename: false,
      __dirname: false,
      setImmediate: false
    },
    devServer: {
        port: process.env.PORT || 8080,
        host: 'localhost',
        publicPath: '/',
        contentBase: './src',
        historyApiFallback: true,
        open: true,
        openPage: ''
      }
};
