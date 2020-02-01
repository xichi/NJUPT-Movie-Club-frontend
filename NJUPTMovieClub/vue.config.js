/* // see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path');

const devProxy = ['/pc','/weixin','android',...];  // 代理
var proEnv = require('./config/pro.env');  // 生产环境
var uatEnv = require('./config/uat.env');  // 测试环境
var devEnv = require('./config/dev.env');  // 本地环境
const env = process.env.NODE_ENV;
let target = '';
// 默认是本地环境
if(env==='production'){  // 生产环境
    target = proEnv.hosturl;
}else if(env==='test'){ // 测试环境
    target = uatEnv.hosturl;
}else{  // 本地环境
    target = devEnv.hosturl;
}
// 生成代理配置对象
let proxyObj = {};
devProxy.forEach((value, index) => {
    proxyObj[value] = {
        target: target,
        changeOrigin: true,
        pathRewrite: {
            [`^${value}`]: value
        }
    };
});

module.exports = {
    baseUrl: '/',
    outputDir: 'dist',
    devServer: {
        // open: process.platform === 'darwin',
        host: '0.0.0.0',
        port: 8080,
        https: false,
        hotOnly: false,
        disableHostCheck: true,
        // See https://github.com/vuejs/vue-cli/blob/dev/docs/cli-service.md#configuring-proxy
        proxy: proxyObj, // string | Object
        before: app => {}
    }
}; */