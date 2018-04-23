const webpack = require("webpack");
const path = require("path");
const merge = require("webpack-merge");
const BUILD_DIR = path.join(__dirname, "public");
const common = require("./webpack.common.js");

module.exports = merge(common, {
    devtool: "inline-source-map",
    devServer: {
        contentBase: BUILD_DIR,
        compress: true,
        historyApiFallback: true,
        stats: {
            colors: true
        },

        port: 9000
    }
});
