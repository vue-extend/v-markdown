const webpack = require('webpack')


module.exports = {
    // devtool: "#eval-source-map",
    entry: "./src/index.js",
    output: {
        filename: "v-markdown.js",
        path: __dirname + "/build",
        publicPath: "/"
    },
    module: {
        rules: [{
            test: /\.js$/,
            loader: "babel-loader",
            exclude: /node_modules/
        }]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin()
    ]
}