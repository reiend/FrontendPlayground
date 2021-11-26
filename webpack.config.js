
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    devtool: false,
    entry: "./src/index.js",
    output: {
        // filename: "[name].[contenthash].js",
        filename: "index.js",
        path: path.resolve(__dirname, "dist/dev/"),
        clean: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "./src/index.html",
            inject: "body",
        }),
    ]
    ,
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
}