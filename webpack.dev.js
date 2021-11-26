
const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.common");
const HtmlWebpackPlugin = require('html-webpack-plugin');

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