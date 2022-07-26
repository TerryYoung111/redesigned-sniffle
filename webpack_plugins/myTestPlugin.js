const pluginName = 'MyTestPlugin';
const { RawSource } = require('webpack-sources');
const path = require('path')
// __dirname   当前文件所在文件夹得绝对路径
// path.resolve() 拼接了各个path片段和工作目录的路径
// path.join() 只是拼接各个path片段， 
class MyTestPlugin {
    options;
    constructor(options){
        this.options = options;
    }
    apply(compiler) {
        const {filename,content} = this.options;
        compiler.hooks.run.tap(pluginName, (compilation) => {
            console.log('webpack run 构建正在启动！***************************');
         
            // console.log(compilation)
        });
        compiler.hooks.emit.tap(pluginName, (compilation) => {
            console.log('webpack emit 构建正在启动！');
            // console.log(compilation)
            compilation.assets[filename] = new RawSource(content)
        });
    }
}

module.exports = MyTestPlugin;