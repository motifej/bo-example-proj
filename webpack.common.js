const path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");

const Template = path.join(__dirname, "public", "index.html");
const OUT_PUT_PATH = path.join(__dirname, "/dist");
const APP_DIR = path.join(__dirname, "src");

const common = {
    entry: path.join(APP_DIR, "/index.jsx"),
    output: {
        filename: "bundle.[hash].js",
        path: OUT_PUT_PATH,
        library: ["app"]
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
