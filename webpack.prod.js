
// Production Config
const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.common");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require("terser-webpack-plugin");

module.exports = merge(common, {
    mode: "production",
    output: {
        filename: "[name][contenthash].bundle.js",
        path: path.resolve(__dirname, 'dist/prod')
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use:
                    [
                        MiniCssExtractPlugin.loader,
                        "css-loader",
                        "sass-loader",
                    ],
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({ filename: "[name][contenthash].css" }),
    ],
    optimization: {
        minimize: true,
        minimizer:
            [
                new TerserPlugin(),
                new CssMinimizerPlugin(),
                new HtmlWebpackPlugin({
                    filename: "index.html",
                    template: "./src/index.html",
                    inject: "body",
                    minify: {
                        removeAttributeQuotes: true,
                        collapseWhitespace: true,
                        removeComments: true,
                    }
                }),
            ],
    },
})