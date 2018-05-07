/**
 * Created by 30113 on 2018/5/6.
 */
const path = require('path')

let config ={
    mode:'production',
    target:'node',
    entry:{
        app:path.join(__dirname,'../src/server-entry.js')
    },
    output:{
        path:path.join(__dirname,'../dist'),
        filename:'server-entry.js',
        publicPath:'',
        libraryTarget:'commonjs2'
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
    resolve:{
        modules:[
            /node_modules/,
            path.join(__dirname,'../src')
        ],
        extensions:['.js','.jsx']
    }
}

module.exports =config