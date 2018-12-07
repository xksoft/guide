---
pageClass: module-page
---

# 模块参数配置
参数args是一个每一项都是由一个对象组成的数组。可以接受 `string` , `textarea` , `checkbox` , `radio` , `select` , `file` 等类型，格式为：

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
## 参数例子

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