const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MyTestPlugin = require('./webpack_plugins/myTestPlugin')
module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    resolve:{
        alias:{
            '@':path.resolve(__dirname,'src/')
        }
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    plugins: [
        new MyTestPlugin({
            filename: 'test/hello.js',
            content: 'console.log(\'hello world!\')'
        }),
        new HtmlWebpackPlugin()
    ]
}