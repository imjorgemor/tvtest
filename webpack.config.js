/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const ReactRefreshTypeScript = require('react-refresh-typescript');
const FontPreloadPlugin = require("webpack-font-preload-plugin");

const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = () => {

    return {
        mode: isDevelopment ? 'development' : 'production',
        output: {
            filename: !isDevelopment
                ? '[name].[contenthash].js'
                : '[name].bundle.js',
            path: path.resolve(__dirname, 'build'),
            assetModuleFilename: "assets/[hash][ext][query]"
        },
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    include: path.join(__dirname, 'src'),
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                //pollyfill required for supporting navigators => takes more time to compile
                                // [
                                //     '@babel/preset-env', { targets: "defaults", "debug": true, "useBuiltIns": "usage", "corejs": 3 }
                                // ],
                                [
                                    '@babel/preset-react', { runtime: "automatic" } //not necessary import react
                                ]
                            ]
                        }
                    }
                },
                {
                    test: /\.css$/,
                    use: ['style-loader', 'css-loader']
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
                {
                    test: /\.tsx?$/,
                    include: path.join(__dirname, 'src'),
                    use: [
                        {
                            loader: 'ts-loader',
                            options: {
                                configFile: isDevelopment ? 'tsconfig.dev.json' : 'tsconfig.json',
                                transpileOnly: true,
                                ...(isDevelopment && {
                                    getCustomTransformers: () => ({
                                        before: [ReactRefreshTypeScript()],
                                    }),
                                }),
                            },
                        },
                    ],
                },
            ]
        },
        plugins: [
            isDevelopment && new ReactRefreshWebpackPlugin(),
            new ForkTsCheckerWebpackPlugin(),
            new FontPreloadPlugin({
                loadType: "preload"

            }),
            new HtmlWebpackPlugin({
                template: './public/index.html',
                favicon: "./public/favicon.ico",
            }),
        ].filter(Boolean),
        devServer: {
            open: true, // open navigator
            port: 3000,
            compress: true,
            hot: true,
            host: 'localhost.rakuten.tv',
            //routing config
            historyApiFallback: true,
            // eslint-disable-next-line no-dupe-keys
            historyApiFallback: {
                disableDotRule: true
            },
            client: { overlay: true }, //errors are shown in the web
        },
        devtool: isDevelopment ? 'source-map' : 'inline-source-map',//view source as original files (takes more time to compile)
        ignoreWarnings: [/"Devtools failed to parse source map"/],
        resolve: {
            extensions: ['.tsx', '.ts', '.jsx', '.js'],  //accept both extensions on src files
        },
        optimization: {
            splitChunks: {
                cacheGroups: {
                    reactVendor: {
                        test: /[\\/]node_modules[\\/](react|react-dom|react-router-dom|react-redux|shaka-player|shaka-player-react)[\\/]/,
                        name: 'vendor-react',
                        chunks: 'all',
                    },
                },
            },
        },
    };
};