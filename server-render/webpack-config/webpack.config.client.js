/**
 * Created by 30113 on 2018/5/6.
 */
const webpack = require('webpack')
const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')

let config ={
    mode:'production',
    entry:{
        app:path.join(__dirname,'../src/index.js')
    },
    output:{
        path:path.join(__dirname,'../dist'),
        filename:'[name].[hash].js',
        publicPath:''
    },
    module:{
        rules:[
            {
                test:/\.(js|jsx)$/,
                exclude:/node_modules/,
                loader:'babel-loader',
                options:{
                    presets:[['env'],react]
                }
            },
            {
                test:/\.(css|scss)$/,
                exclude:/node_modules/,
                use:['style-loader','css-loader','sass-loader']
            }
        ]
    },
    plugins:[
        new HTMLWebpackPlugin({
            template:path.join(__dirname,'../public/index.html')
        })
    ],
    resolve:{
        modules:[
            /node_modules/,
            path.join(__dirname,'../src')
        ],
        extensions:['.js','.jsx']
    }
}

module.exports =config