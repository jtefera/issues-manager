module.exports = {
    entry: "./sources/js/main.js",
    output: {
        path: __dirname,
        filename: "./public/js/bundle.js"
    },
    module: {
        loaders: [
            {
                test: /.js$/,
                loader: "babel-loader",
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    }
}
