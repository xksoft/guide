---
pageClass: start-page
sidebarDepth: 2
---

# 快速开始

## 入口方法

* **方法：**
```javascript
async function main(xky, args) {
  //模块执行代码
}
```

* **说明：** 所有模块的脚本必须包含此方法，这是所有api方法调用的入口，包括自己定义的方法，也需要在这调用，否则无法运行。
* **参数：**

参数 | 值类型 | 说明
------------ | ------------- | -------------
xky| string | 默认参数，`xky` 封装了所有的api
args| Array | 可选参数，可自己配置的外部参数。

例子：

```javascript
async function main(xky, args) {
  //模块执行代码
  await log(xky, args)
  await xky.log("哈哈，我是日志2");
}

async function log(xky, args) {
  //模块执行代码
  await xky.log("哈哈，我是日志1");
}
```
## 参数配置
&emsp;&emsp;参数args是一个每一项都是由一个对象组成的数组。可以接受 `string` , `textarea` , `checkbox` , `radio` , `select` , `file` 等类型，格式为：

```javascript
[
    {
      "title" : "项目标题",
      "name"  : "识别符号",
      "type"  : "类型" // 类型可以是 string, textarea, boolean, checkbox, radio, select,

      "file": { // 文件类型必须有这个字段，其他类型会忽略
        "accept": ["jpg", ".png"],
        // 接受的文件后缀，带点和不带都可以，比如 `jpg`, `.jpg` 都能接受
        "multiple": true // 是否支持多选
      },

      "default": "默认值"
      // 类型为/bool/[indexes]/index,
      // string, textarea 为字符串，checkbox 为索引数组，radio, select 为索引值

      "validation": { "pattern": "[a-z]+", "flags": "i", "message":"只能输入字母"},
      // 校验规则，可选；
      // 会以 new RegExp(pattern, flags) 生成的正则对文本框内容进行校验，规则里 `flags` 可选。

      "values": [] // checkbox, radio 才需要提供
    },
    //...
]
```
### 参数例子

```javascript
[
  {
    "title": "字符串",
    "name": "string_name",
    "type": "string",
    "default": "我是字符串"
  },
  {
    "title": "文本框",
    "name": "textarea_name",
    "type": "textarea"
  },
  {
    "title": "布尔值",
    "name": "boolean_name",
    "type": "boolean"
  },
  {
    "title": "多选多",
    "name": "checkbox_name",
    "type": "checkbox",
    "values": ["选项一", "选项二", "选项三", "选项四"],
    "default": [0, 3]
  },
  {
    "title": "多选一",
    "name": "radio_name",
    "type": "radio",
    "values": ["选项一", "选项二", "选项三", "选项四"]
  },
  {
    "title": "多选一 (select)",
    "name": "select_name",
    "type": "select",
    "values": ["选项一", "选项二", "选项三", "选项四"],
    "default": 3
  },
  {
    "title": "选择文本文件",
    "name": "files_name",
    "type": "file",
    "file": {
      "accept": [".txt"],
      "multiple": true
    }
  },
]
```

返回一个 JSON 字典，格式为

```json
{
  "string_name": value,
  "textarea_name": value,
  "boolean_name": value, // false/true
  "checkbox_name": [value], // checkbox返回的是一个数组
  "radio_name": value
  "select_name": value
  "files_name":[value] // 文件类型返回的是一个数组
  //...
}
```

在方法里面引用：

```javascript
async function main(xky, args) {
  //模块执行代码
  xky.log(args.string_name)
}
```


## 关于异步
&emsp;&emsp;所有api均为异步方法，如需同步执行，请使用async/await，在function前面加关键字asncy,在需要同步的语句前加await即可。例：
```javascript
 //冷却10秒后弹出提示
async function main(xky, args) {
  //单位是毫秒
  await xky.sleep(10 * 1000); 
  //这里之所以不加await是因为这提示不重要，可以异步让她执行，不影响流程
  xky.toast("哈哈，我是个提示"); 
}
```
&emsp;&emsp;异步特性是很重要的一个环节，可以按需决定接口是同步模式执行还是异步，一般需要等待的方法都用同步方式，而不需要等待的方法（如提示消息、日志信息）等，可以直接异步执行，提高效率。



## 返回结果

&emsp;&emsp;所有API均有返回值。

返回参数 | 值类型 | 说明
------------ | ------------- | -------------
errcode| int | 0为正常，其他值为异常
msg| string | 正常、或出错时的提示
other | object | 其他类型返回值，不同api返回内容不一样
