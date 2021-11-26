
// Developmen COnfig
const path = require("path");                               // for files filepath relative
const { merge } = require("webpack-merge");                 // for merging different webpack config files
const common = require("./webpack.common");
const HtmlWebpackPlugin = require('html-webpack-plugin');   // html loader

module.exports = merge(common, {
    mode: "development",
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist/dev"),
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                // loaders for styles
                use:
                    [
                        "style-loader",
                        "css-loader",
                        "sass-loader",
                    ],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
        }),
    ]
    ,
})