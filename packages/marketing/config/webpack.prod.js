const { merge } = require('webpack-merge') // used to merge config
const ModuleFederation = require('webpack/lib/container/ModuleFederationPlugin')
const packageJson = require('../package.json')
const commonConfig = require('./webpack.common')
const domain=process.env.PRODUCTION_DOMAIN || 'https://dcj5eokbr8w9v.cloudfront.net/';

const prodConfig = {
    mode: 'production',
    output: {
        filename: '[name].[contenthash].js',
        publicPath:`${domain}/marketing/latest/`
    },
    plugins: [
        new ModuleFederation({
            name: "marketing",
            filename: 'remoteEntry.js',
            exposes: {
                './MarketingApp': './src/bootstrap'
            },
            shared: packageJson.dependencies
        })
    ]

}

module.exports = merge(commonConfig, prodConfig)