
const path = require("path");
module.exports = {
    output: {
        clean: true,
    },
    entry: {
        main: "./src/index.js",
    },
    module: {
        rules: [
            {
                test: /\.(png|svg|jpeg|jpg|gif)$/i,
                type: "asset/resource",
                generator: {
                    filename: "images/[contenthash][name].[ext]",
                },
            },
        ],
    },
}