var webpack = require("webpack");

// returns a Compiler instance
var compiler = webpack({
    entry: "./entry.js",
    output: {
        path: __dirname,
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
});

compiler.run(function(err, stats) {
    console.error(err);
    console.log(stats);
});