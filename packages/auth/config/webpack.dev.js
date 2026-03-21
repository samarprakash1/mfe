const {merge} = require('webpack-merge') // used to merge config
const HtmlWebpackPlugin=require('html-webpack-plugin')
const ModuleFederation=require('webpack/lib/container/ModuleFederationPlugin')

const commonConfig=require('./webpack.common')
const packageJson=require('../package.json')

const devConfig={
    mode:'development',
    output:{
        publicPath:'http://localhost:8082/' // slash is very imp
    },
    devServer:{
        port:8082,
        historyApiFallback:{
            index:"/index.html"
        }
    },
    plugins:[
        new ModuleFederation({
                    name:'auth',
                    filename:'remoteEntry.js',
                    exposes:{
                        './AuthApp':'./src/bootstrap'
                    },
                    // shared:['react','react-dom']
                    shared:packageJson.dependencies
                }),
        new HtmlWebpackPlugin({
            template:'./public/index.html'
        })
    ]
}
module.exports=merge(commonConfig,devConfig)
