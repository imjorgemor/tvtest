/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
    mode: "development",
    entry: path.resolve(__dirname, "./src/index.tsx"),
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'index_bundle.js',
        publicPath: '/',
        sourceMapFilename: "[name].js.map"
    },
    devtool: 'inline-source-map',
    plugins: [new ReactRefreshWebpackPlugin()].filter(Boolean),
    devServer: {
        host: 'localhost.rakuten.tv',
        port: "3000",
        historyApiFallback: true,
        static: path.resolve(__dirname, './dist'),
        open: true,
        hot: true,
        liveReload: true
    },
    module: {
        rules: [
            {
                test: /\.(js|ts)x?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    "style-loader",
                    // Translates CSS into CommonJS
                    "css-loader",
                    // Compiles Sass to CSS
                    "sass-loader",
                ],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
        ],
    },
    ignoreWarnings: [/"Devtools failed to parse source map"/],
    resolve: {
        extensions: ['.tsx', '.ts', '.jsx', '.js'],
    },
    // eslint-disable-next-line no-dupe-keys
    plugins: [
        new Dotenv(),
    ]
};