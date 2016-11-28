module.exports = [
    {
        entry: {
            './public/js/bundle': './sources/js/main.js',
        },
        output: {
            path: __dirname,
            filename: '[name].js',
        },
        devtool: 'source-map',
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
        node: {
            net: 'empty',
            tls: 'empty',
            dns: 'empty',
            fs: 'empty',
        },
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

