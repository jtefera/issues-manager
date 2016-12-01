var webpack = require('webpack');
module.exports = [
    {
        entry: {
            './public/js/bundle': './sources/js/main.js',
            './public/sw': './sources/js/serviceWorker/sw.js',
        },
        output: {
            path: __dirname,
            filename: '[name].js',
        },
        devtool: 'eval',
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
            new webpack.DefinePlugin({
                'process.env': {
                'NODE_ENV': JSON.stringify('development')
                }
            }),
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

