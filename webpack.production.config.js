var webpack = require('webpack');
var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
module.exports = [
    {
        entry: {
            './public/js/bundle.min': './sources/js/main.js',
            './public/sw.min': './sources/js/serviceWorker/sw.js',
        },
        output: {
            path: __dirname,
            filename: '[name].js',
        },
        devtool: 'cheap-module-source-map',
        module: {
            loaders: [
                {
                    test: /.js$/,
                    loader: 'babel-loader',
                    exclude: /node_modules/,
                    query: {
                        presets: ['es2015', 'react', 'stage-2'],
                    },
                },
                {
                    test: /\.json$/,
                    loader: 'json-loader',
                },
            ],
        },
        plugins: [
            new webpack.optimize.UglifyJsPlugin({
                output: {
                    comments: false
                },
                compress: {
                    warnings: false,
                    screw_ie8: true
                }
            }),
            new BundleAnalyzerPlugin(),
            new webpack.DefinePlugin({
                'process.env': {
                'NODE_ENV': JSON.stringify('production')
                }
            }),
            new webpack.optimize.DedupePlugin(),
            new webpack.optimize.OccurenceOrderPlugin(true),
        ],
    },
    {
        entry: {
            './server/server': './sources/server/server.js',
        },
        output: {
            path: __dirname,
            filename: '[name].js',
        },
        target: 'node',
        module: {
            loaders: [
                {
                    test: /.js$/,
                    loader: 'babel-loader',
                    exclude: /node_modules/,
                    query: {
                        presets: ['es2015', 'react', 'stage-2'],
                    },
                },
                {
                    test: /\.json$/,
                    loader: 'json-loader',
                },
            ],
        },
    },
];

