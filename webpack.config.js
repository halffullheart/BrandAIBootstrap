var webpack = require('webpack');
module.exports = {
    entry: "./entry.js",
    output: {
        path: __dirname + '/dist',
        publicPath: "/",
        filename: "styleguide.js"
    },
    module: {
        loaders: [
            {
                test: /\.scss$/,
                loader: "style!css!sass"
            }
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ]
};
