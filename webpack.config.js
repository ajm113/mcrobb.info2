'use strict';

const webpack = require('webpack'),
  ExtractTextPlugin = require('extract-text-webpack-plugin'),
  HtmlWebpackPlugin = require('html-webpack-plugin'),
  CleanWebpackPlugin = require('clean-webpack-plugin'),
  autoprefixer = require('autoprefixer'),
  OfflinePlugin = require('offline-plugin'),
  WebpackPwaManifest = require('webpack-pwa-manifest'),
  SitemapPlugin = require('sitemap-webpack-plugin').default,
  manifest = require('./manifest.js'),
  sitemapPaths = require('./sitemap.paths.js'),
  path = require('path');

const ENV = process.env.NODE_ENV || 'development';
const SRC_PATH = path.join(__dirname, 'src/');
const DIST_PATH = path.join(__dirname, 'docs/');

const isDevelopment = (ENV ==='development') ? true : false;

const currentDate = new Date();
const CURRENT_DATE_STAMP = currentDate.getFullYear() + '-' + currentDate.getMonth() + '-' + currentDate.getDate();

module.exports = {
    context: SRC_PATH,
    entry: {
        app: './app.js',
        polyfills: [
            'babel-polyfill',
            'promise-polyfill',
            'whatwg-fetch'
        ]
    },
    mode: ENV,
    devtool: !isDevelopment ? 'source-map' : 'cheap-module-eval-source-map',
    resolve: {
        extensions: ['.jsx', '.js', '.json', '.scss'],
        modules: [
          path.resolve(__dirname, "node_modules"),
          'node_modules'
        ],
        alias: {
            components: path.join(SRC_PATH, "components"),    // used for tests
            style: path.join(SRC_PATH, "style"),
            images: path.join(SRC_PATH, "images")
        }
    },
    output: {
        path: DIST_PATH,
        filename: '[name]-[hash].js',
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
            },
            {
                test: /\.(svg|woff2?|ttf|eot|jpe?g|png|gif)(\?.*)?$/i,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 8000,
                        name: 'images/[hash]-[name].[ext]'
                    }
                }]
            }
        ]
    },
    optimization: {
         minimize: !isDevelopment
    },
    plugins: [
        new CleanWebpackPlugin([DIST_PATH]),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new ExtractTextPlugin({
            filename: 'style.css',
            allChunks: true,
            disable: isDevelopment
        }),
        new HtmlWebpackPlugin({
            title: manifest.name,
            minify: {
                collapseWhitespace: true,
                removeComments: true
            },
            filename: 'index.html',
            template: './template.ejs'
        }),
        new webpack.DefinePlugin({
              'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
        }),
    ].concat( (!isDevelopment) ? [
        new WebpackPwaManifest(manifest),
        new OfflinePlugin({
            relativePaths: false,
            excludes: ['_redirects'],
            safeToUseOptionalCaches: true,
            caches: {
                main: ['index.html', 'app-*.js', 'polyfills-*.js', 'style.css'],
                optional: [':rest:']
            },
            ServiceWorker: {
                events: true,
                minify: false // The devs need to make this webpack 4 friendly still.
            },
            AppCache: false,
            cacheMaps: [
                {
                    match: /.*/,
                    to: '/',
                    requestTypes: ['navigate']
                }
            ],
            publicPath: '/'
        }),
        new SitemapPlugin('http://mcrobb.info', sitemapPaths, {
                changeFreq: 'monthly',
                lastMod: CURRENT_DATE_STAMP,
            }
        )
    ] : [
        new webpack.HotModuleReplacementPlugin(),
    ]),
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
