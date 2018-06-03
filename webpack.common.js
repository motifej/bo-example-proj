const path = require("path");

const Template = path.join(__dirname, "public", "index.html");
const APP_DIR = path.join(__dirname, "src");
var HtmlWebpackPlugin = require("html-webpack-plugin");
const common = {
    entry: path.join(APP_DIR, "/index.jsx"),
    output: {
        path: "/dist",
        filename: "bundle.[hash].js",
        library: ["test"]
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
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: Template
        })
    ]
};

module.exports = common;
