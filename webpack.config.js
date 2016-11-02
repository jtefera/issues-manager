module.exports = {
    entry: "./sources/js/main.js",
    output: {
        path: __dirname,
        filename: "./public/js/bundle.js"
    },
    devtool: 'source-map',
    module: {
        loaders: [
            {
                test: /.js$/,
                loader: "babel-loader",
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react', 'stage-2']
                }
            }
        ]
    }
}
