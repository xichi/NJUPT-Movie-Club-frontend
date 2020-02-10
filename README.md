# NJUPT-Movie-Club
电影协会宣传页面

## 1.demo:
+ NJUPT Movie Club: vue + node  
测试地址：[南邮影协](http://xichi.xyz/test) 
+ website Design: jquery  
原demo地址：[南邮影协](http://xichi.xyz/NJUPTMovieClub) 

## 2.技术栈：Vue

## 3.How to start?

1.  `yarn install` 安装依赖
2.  `yarn start:dev` 本地运行

## 4.结构目录

    ├── babel.config.js 
    ├── yarn.lock
    ├── README.md   
    ├── vue.config.js                  环境配置                 
    ├── package-lock.json
    ├── package.json                    npm包配置文件，里面定义了项目的npm脚本，依赖包等信息
    ├── src                             项目源码目录    
    │   ├── main.js                         入口js文件
    │   ├── app.vue                         根组件
    │   ├── css                            公共样式   
    │   │   └── common.css
    │   ├── icons                           复杂的svg库
    │   │   └── svg   
    │   ├── api                             接口
    │   │   └── index.js    
    │   ├── mock                            模拟数据
    │   │   └── index.js            
    │   ├── utils                           狭存放自己封装的工具类函数
    │   │   └── index.js    
    │   ├── components                      公共组件目录
    │   │   └── Header.vue
    │   ├── assets                          资源目录，这里的资源会被wabpack构建
    │   │   └── images
    │   │       └── logo.png
    │   ├── routes.js                        前端路由
    │   ├── store.js                         应用级数据（state）
    │   └── pages                           页面目录
    │       └── index.vue
    ├── developer-diary                    开发者日记    
    │   ├── inspiration                      灵感
    │   └── wesiteDesign                    参赛原作品        
    └── public                          纯静态资源，不会被wabpack构建。
        ├── index.html
        ├── logo.jpg                         
        └── favicon.ico   

