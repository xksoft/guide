```json5
[
    {
      "title" : "项目标题",
      "name"  : "识别符号",
      "type"  : "类型", // 可以是 string, textarea, boolean, checkbox, radio, select, file, map

      "file": { // 文件类型必须有这个字段，其他类型会忽略
        "accept": ["jpg", ".png"], // 接受的文件后缀，带点和不带都可以，比如 `jpg`, `.jpg` 都能接受
        "multiple": true // 是否支持多选
      },

      // 以下字段， `file` 类型会忽略掉
      
      "default": "默认值"/bool/[indexes]/index, 
      // string, textarea, map 类型的值为字符串，checkbox 为索引数组，radio, select 为索引值

      "validation": { "pattern": "[a-z]+", "flags": "i", "message":"只能输入字母"},
      // 校验规则，可选；
      // 会以 new RegExp(pattern, flags) 生成的正则对文本框内容进行校验，规则里 `flags` 可选。

      "values": [
        // checkbox, radio 才需要提供
      ]
    },
    //...
]
```

具体例子：
```json
[
  {
    "title": "字符串",
    "name": "string_name",
    "type": "string",
    "default": "我是字符串"
  },
  {
    "title": "数值",
    "name": "int_name",
    "type": "string",
    "default": "我是整数",
    "validation": { "pattern": "\\d+", "message":"只能输入数字"}
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
    "title": "来啊，选择文本文件啊",
    "name": "files",
    "type": "file",
    "file": {
      "accept": [".txt"],
      "multiple": true
    }
  },
  {
    "title": "地图坐标",
    "name": "location",
    "type": "map",
    "default": "22.4,33.5"
  }
]
```

返回一个 JSON 字典，格式为

```json5
{
  "识别符号1": value,
  "识别符号2": [value], // Checkbox 会返回数组
  "识别符号3": [base64] // 文件选择，传递的是 base64
  //...
}
```
