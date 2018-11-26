# 模块参数配置

```json
[
    {
      "title" : "项目标题",
      "name"  : "识别符号",
      "type"  : "类型" // 可以是 string, textarea, boolean, checkbox, radio, select,
      "default": "默认值"/bool/[indexes]/index, // string, textarea 为字符串，checkbox 为索引数组，radio, select 为索引值
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
  }
]
```

返回一个 JSON 字典，格式为

```json
{
  "识别符号1": value,
  "识别符号2": [value], //Checkbox 会返回数组
  //...
}
```