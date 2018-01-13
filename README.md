weex-session
=================

weex-session是一个session代替的中间件,可用来替换local-storage,方便使用，且不占资源。

感谢Zaaksam的技术分享!

Weex-session is a session replacement middleware that can be used to replace local-storage, easy to use, and not to take up resources.

Thanks to Zaaksam's technology sharing!

## Install

`npm install weex-session --save`

## Usage

```ts

import session from "weex-session";

```

## Options

- `set<T>(key: string, value: T)` 设置session，需要传值的类型 set the session, need to pass the type of value
- `get<T>(key: string)` 获取session  get session
- `content` 全部记录内容 all records
- `keys` 全部记录的键值数组 All recorded array of key values
- `has(key: string)` 是否存在这个key  whether the existence of this key
- `del(key: string)` 删除这个key  delete this key
- `reset()` 清空全部记录  clear all the records

## Example

```ts

    session.set<string>("str", "string");
    session.set<number>("num", 100);
    this.content += "str:" + session.get("str") + "<br/>";
    this.content += "num:" + session.get("num") + "<br/>";
    this.content += "content:" + JSON.stringify(session.content()) + "<br/>";

    session.del("str");
    session.del("num");
    this.content +=
      "content is clear:" + JSON.stringify(session.content()) + "<br/>";

    session.set<string>("str", "string");
    session.set<number>("num", 200);
    this.content +=
      "content show keys:" + JSON.stringify(session.keys()) + "<br/>";
      
    session.reset();
    this.content +=
      "content is reset:" + JSON.stringify(session.content()) + "<br/>";

```    

## Result

```

-----------run-------------
str:string
num:100
content:{"str":"string","num":100}
content is clear:{}
content show keys:["str","num"]
content is reset:{}
-----------END run-------------

```

## Other

生成的JS文件在dist目录中，可使用JS调用，调用方式雷同，不再重复。

The generated JS file can be called in the dist directory using the JS call, and the call is identical and no longer repeats.

## Licences

[MIT]
