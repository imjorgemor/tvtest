// eslint-disable-next-line @typescript-eslint/no-var-requires
const webpack = require("webpack");
const path = require('path')

module.exports = {
    mode: "development",
    entry: path.resolve(__dirname, "./src/Index.tsx"),
    output: {
        path: path.resolve(__dirname, './public'),
        filename: 'bundle.js',
        publicPath: '/',
    },
    plugins: [new webpack.HotModuleReplacementPlugin()],
    devServer: {
        port: "3000",
        historyApiFallback: true,
        static: path.resolve(__dirname, './public')
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
                test: /\.svg$/,
                use: "file-loader",
            },
            {
                test: /\.(png|woff|woff2|eot|ttf|svg)$/,
                loader: "url-loader",
                options: { limit: false },
              },
        ],
    },
    ignoreWarnings: [/Devtools failed to parse source map/],
    resolve: {
        extensions: ['.tsx', '.ts', '.jsx', '.js'],
    }
}