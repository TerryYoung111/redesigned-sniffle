import _ from 'lodash';
import css from './assets/css/index.css'
import config from '../config/config.json'
import scopeTest from './test';
function component() {
    var element = document.createElement('div');

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    // console.log(css)
    console.log(config)
    // console.log('sss')
    return element;
}
function createNode(key,value){
    var element = document.createElement('div');
    element.innerHTML = `<span>${key}：</span><span>${value}</span>`;
    return element;
}
scopeTest()
document.body.appendChild(component());
for(let key in config){
    document.body.appendChild(createNode(key,config[key]));
}
