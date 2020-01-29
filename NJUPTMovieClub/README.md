master分支上是用vue写的，dev分支上是用jquery写的。（做特效还是jQuery方便）

## 技术栈：Vue

## How to start?

1.  `yarn install` 安装依赖
2.  `yarn serve` 本地运行

## 结构目录

    ├── babel.config.js 
    ├── yarn.lock
    ├── README.md                   
    ├── package-lock.json
    ├── package.json                    npm包配置文件，里面定义了项目的npm脚本，依赖包等信息
    ├── src                             项目源码目录    
    │   ├── main.js                         入口js文件
    │   ├── app.vue                         根组件
    │   ├── components                      公共组件目录
    │   │   └── HelloWorld.vue
    │   ├── assets                          资源目录，这里的资源会被wabpack构建
    │   │   └── images
    │   │       └── logo.png
    │   ├── routes.js                        前端路由
    │   ├── store.js                         应用级数据（state）
    │   └── pages                           页面目录
    │       └── index.vue
    └── public                          纯静态资源，不会被wabpack构建。
        ├── index.html
        ├── logo.jpg                         
        └── favicon.ico   
