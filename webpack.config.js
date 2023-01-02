// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path')


module.exports = {
    mode: "development",
    entry: './src/Index.tsx',
    output: {
        path: path.resolve(__dirname, './public'),
        filename: 'bundle.js'
    },
    devServer: {
        port: "3000",
        static: {
            directory: path.resolve(__dirname, './public')
        }
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
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.jsx', '.js'],
    }
}