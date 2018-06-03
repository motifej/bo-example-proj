const webpack = require("webpack");
const path = require("path");
const BUILD_DIR = path.join(__dirname, "public");
const APP_DIR = path.join(__dirname, "src/");

const config = {
    mode: "development",
    entry: path.join(APP_DIR, "index.js"),
    output: {
        path: BUILD_DIR,
        filename: "bundle.js"
    },
    devtool: "inline-source-map",
    devServer: {
        contentBase: BUILD_DIR,
        compress: true,
        historyApiFallback: true,
        stats: {
            colors: true
        },

        port: 9000
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                include: APP_DIR,
                loader: "babel-loader"
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.json$/,
                use: "json-loader"
            }
        ]
    },
    resolve: {
        extensions: [".js", ".jsx"]
    }
};

module.exports = config;
