# API文档

baseUrl: https://www.xichi.xyz/api

## 目录

[1、用户登录](#1用户登录)<br/>
[2、用户退出登录](#2用户退出登录)<br/>
[3、获取用户信息](#3获取用户信息)<br/>
[4、用户注册](#4用户注册)<br/>
[5、获取用户列表](#获取用户列表)<br/>
[6、获取邮箱验证码](#获取邮箱验证码)<br/>

## 接口列表:

### 1、用户登录

#### 请求URL：

```
/admin/login
```

#### 示例：


#### 请求方式：
```
POST
```

#### 参数类型：params

|参数|是否必选|类型|说明|
|:-----|:-------:|:-----|:-----|
|username      |Y       |string   | 用户名 |
|password      |Y       |string  | 密码 |



#### 返回示例：

```javascript

{
  status: 1,
  success: '登录成功'
}
```

### 2、用户退出登录

#### 请求URL：

```
/admin/signout
```

#### 示例：


#### 请求方式：
```
GET
```

#### 参数类型：

|参数|是否必选|类型|说明|
|:-----|:-------:|:-----|:-----|



#### 返回示例：

```javascript

{
  status: 1,
  success: '退出成功'
}
```


### 3、获取用户信息

#### 请求URL：

```
/admin/info
```

#### 示例：


#### 请求方式：
```
GET
```

#### 参数类型：

|参数|是否必选|类型|说明|
|:-----|:-------:|:-----|:-----|



#### 返回示例：

```javascript

{
  status: 1,
  data: {
    username: "admin",
    password: "123",
    email: "474504964@qq.com",
    admin: 2
  }
}
```

### 4.用户注册

#### 请求URL：

```
/admin/register
```

#### 示例：


#### 请求方式：
```
POST
```

#### 参数类型：params

|参数|是否必选|类型|说明|
|:-----|:-------:|:-----|:-----|
|username      |Y       |string   | 用户名 |
|password      |Y       |string  | 密码 |
|code      |Y       |string  | 验证码 |
|email     |Y       |string  | 邮箱 |


#### 返回示例：

```javascript

{
  status: 1,
  success: '注册成功'
}
```

### 5、获取用户列表

#### 请求URL：
```
/admin/all
```

#### 示例：

#### 请求方式：
```
GET
```

#### 参数类型：query

|参数|是否必选|类型|说明|
|:-----|:-------:|:-----|:-----|
|limit      |N       |int | 获取数据数量，默认 20 |
|offset      |N       |int | 跳过数据条数 默认 0 |


#### 返回示例：

```javascript
{
    "status": 1,
    "data": {
        "count": 3,
        "allAdmin": [
            {
                "id": 1,
                "username": "admin",
                "password": "123",
                "email": "474504964@qq.com",
                "admin": 2
            },
            {
                "id": 2,
                "username": "admin01",
                "password": "123456",
                "email": "474504964@qq.com",
                "admin": 1
            },
            {
                "id": 3,
                "username": "user",
                "password": "abcdef",
                "email": "474504964@qq.com",
                "admin": 0
            }
        ]
    }
}
```

### 6、获取邮箱验证码

#### 请求URL：

```
/admin/code
```

#### 示例：


#### 请求方式：
```
POST
```

#### 参数类型：params

|参数|是否必选|类型|说明|
|:-----|:-------:|:-----|:-----|
|email      |Y       |string   | 邮箱 |




#### 返回示例：

```javascript
{
    "status": 1,
    "data": {
        "code": 422094,
        "email": "474504964@qq.com"
    }
}
```
