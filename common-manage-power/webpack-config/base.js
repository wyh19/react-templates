/**
 * Created by 30113 on 2018/5/5.
 */
const path = require('path')
const HTMLWebpackPlugin = require('C:/Users/30113.GOLDWIND/AppData/Local/Microsoft/TypeScript/2.9/node_modules/@types/html-webpack-plugin')

let config = {
    entry: {
        app: path.join(__dirname, '../src/index.js'),
    },
    output: {
        path: path.join(__dirname, '../dist'),
        filename: '[name].[hash].js',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: [['env'],  "stage-0",'react'],
                    plugins: ['react-hot-loader/babel','transform-decorators-legacy']
                }
            },
            {
                test: /\.(css|scss)$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: path.join(__dirname, '../public/index.html')
        }),
    ],
    resolve: {
        modules: [
            "node_modules",
            path.resolve(__dirname, "../src")
        ],
        extensions: [".js", ".jsx"],
    },
}

module.exports = config