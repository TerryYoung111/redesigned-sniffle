const Webpack  = require('webpack')
const WebpackDevServer = require('webpack-dev-server')
const webpackConfig = require('./webpack.config')

const compiler = Webpack(webpackConfig)
const devServerOption = {...webpackConfig.devServer,open:true}
const server = new WebpackDevServer(devServerOption,compiler)
const runServer = async ()=>{
    console.log('Starting server')
    await server.start()
}
runServer()