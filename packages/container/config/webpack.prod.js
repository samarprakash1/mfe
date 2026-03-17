const {merge} = require('webpack-merge') // used to merge config
const HtmlWebpackPlugin=require('html-webpack-plugin')

const devConfig={
    mode:'development',
    devServer:{
        port:8081,
        historyApiFallback:{
            index:"index.html"
        }
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./public/index.html'
        })
    ]
}
