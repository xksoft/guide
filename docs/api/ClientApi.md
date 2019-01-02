---
pageClass: clientapi-page
---

# 客户端API

## login
* **方法：** `post`
* **UPL：** `https://api.xky.com/login`
* **说明：** 登录
* **参数：**

参数 | 值类型 | 说明
------------ | ------------- | -------------
key | string | 软件的key，默认值'xky'
account | string | 登录的主帐号
subaccount | string | 分控账号，可选参数，可不填，不填时则登录主帐号
password | string | 登录的密码
source | boolean | 返回的结果是否解密

* **例子：**

<div id="demo1">
<apidemo
url="https://api.xky.com/login"
params='{
  "key": "xky",
  "account": "",
  "subaccount":"",
  "password": "",
  "source": true
}'
:isget="false">
</apidemo>
</div>

## logout
* **方法：** `post`
* **UPL：** `https://api.xky.com/logout`
* **说明：** 注销
* **参数：**

参数 | 值类型 | 说明
------------ | ------------- | -------------
session | string | 登录标识，在登录接口获取
source | boolean | 返回的结果是否解密

* **例子：**

<div id="demo2">
<apidemo
url="https://api.xky.com/logout"
params='{
    "session":"",
    "source": true
}'
:isget="false">
</apidemo>
</div>

## addSubaccount
* **方法：** `post`
* **UPL：** `https://api.xky.com/add_subaccount`
* **说明：** 添加分控帐号
* **参数：**

参数 | 值类型 | 说明
------------ | ------------- | -------------
account | string | 分控的帐号
password | string | 分控的密码
description | string | 备注
session | string | 登录标识，在登录接口获取
source | boolean | 返回的结果是否解密

* **例子：**

<div id="demo3">
<apidemo
url="https://api.xky.com/add_subaccount"
params='{
    "account": "xiakeyun",
    "password": "******",
    "description": "备注",
    "session":"",
    "source": true
}'
:isget="false">
</apidemo>
</div>

## getSubaccountList
* **方法：** `get`
* **UPL：** `https://api.xky.com/get_subaccount_list`
* **说明：** 获取分控帐号列表
* **参数：**

参数 | 值类型 | 说明
------------ | ------------- | -------------
session | string | 登录标识，在登录接口获取
source | boolean | 返回的结果是否解密

* **例子：**

<div id="demo4">
<apidemo
url="https://api.xky.com/get_subaccount_list"
params='{
    "session":"",
    "source": true
}'
:isget="true">
</apidemo>
</div>

## getSubaccount
* **方法：** `get`
* **UPL：** `https://api.xky.com/get_subaccount`
* **说明：** 获取一个分控帐号的信息
* **参数：**

参数 | 值类型 | 说明
------------ | ------------- | -------------
id | string | 分控账号的id，可在分控账号列表里获取
session | string | 登录标识，在登录接口获取
source | boolean | 返回的结果是否解密

* **例子：**

<div id="demo5">
<apidemo
url="https://api.xky.com/get_subaccount"
params='{
    "id":"1",
    "session":"",
    "source": true
}'
:isget="true">
</apidemo>
</div>

## setSubaccount
* **方法：** `post`
* **UPL：** `https://api.xky.com/set_subaccount`
* **说明：** 修改分控帐号信息
* **参数：**

参数 | 值类型 | 说明
------------ | ------------- | -------------
 id | string| 分控账号的id，可在分控账号列表里获取
password | string | 分控的密码
description | string | 备注
devices | array | 可操控的设备的序列号数组，可在我的设备列表里获取
session | string | 登录标识，在登录接口获取
source | boolean | 返回的结果是否解密

* **例子：**

<div id="demo6">
<apidemo
url="https://api.xky.com/set_subaccount"
params='{
     "id": "1",
     "password": "aaaaaa",
     "description": "123456",
     "devices":[
         "aaaabbbb",
         "ccccdddd"
     ],
    "session":"",
    "source": true
}'
:isget="false">
</apidemo>
</div>

## deleteSubaccount
* **方法：** `get`
* **UPL：** `https://api.xky.com/delete_subaccount`
* **说明：** 删除一个分控帐号
* **参数：**

参数 | 值类型 | 说明
------------ | ------------- | -------------
id | string | 分控账号的id，可在分控账号列表里获取
session | string | 登录标识，在登录接口获取
source | boolean | 返回的结果是否解密

* **例子：**

<div id="demo7">
<apidemo
url="https://api.xky.com/delete_subaccount"
params='{
    "id":"1",
    "session":"",
    "source": true
}'
:isget="true">
</apidemo>
</div>


## getTempSession
* **方法：** `get`
* **UPL：** `https://api.xky.com/get_temp_session`
* **说明：** 获取临时的session,有效时间为5分钟。
* **参数：**

参数 | 值类型 | 说明
------------ | ------------- | -------------
session | string | 登录标识，在登录接口获取
source | boolean | 返回的结果是否解密

* **例子：**

<div id="demo8">
<apidemo
url="https://api.xky.com/get_temp_session"
params='{
    "session":"",
    "source": true
}'
:isget="true">
</apidemo>
</div>

## getUser
* **方法：** `get`
* **UPL：** `https://api.xky.com/get_user`
* **说明：** 获取登录帐号的信息。
* **参数：**

参数 | 值类型 | 说明
------------ | ------------- | -------------
session | string | 登录标识，在登录接口获取
source | boolean | 返回的结果是否解密

* **例子：**

<div id="demo9">
<apidemo
url="https://api.xky.com/get_user"
params='{
    "session":"",
    "source": true
}'
:isget="true">
</apidemo>
</div>

## addNode
* **方法：** `post`
* **UPL：** `https://api.xky.com/add_node`
* **说明：** 添加侠客云的节点服务器
* **参数：**

参数 | 值类型 | 说明
------------ | ------------- | -------------
serial | string | 节点服务器的序列号
name | string | 节点服务器的名称
session | string | 登录标识，在登录接口获取
source | boolean | 返回的结果是否解密

* **例子：**

<div id="demo10">
<apidemo
url="https://api.xky.com/add_node"
params='{
  "serial": "12345678901234567890123456789012",
  "name": "名字",
  "session":"",
  "source": true
}'
:isget="false">
</apidemo>
</div>

## getNodeList
* **方法：** `get`
* **UPL：** `https://api.xky.com/get_node_list`
* **说明：** 获取侠客云的节点服务器列表信息
* **参数：**

参数 | 值类型 | 说明
------------ | ------------- | -------------
session | string | 登录标识，在登录接口获取
source | boolean | 返回的结果是否解密

* **例子：**

<div id="demo11">
<apidemo
url="https://api.xky.com/get_node_list"
params='{
    "session":"",
    "source": true
}'
:isget="true">
</apidemo>
</div>

## setNode
* **方法：** `post`
* **UPL：** `https://api.xky.com/set_node`
* **说明：** 修改侠客云的节点服务器
* **参数：**

参数 | 值类型 | 说明
------------ | ------------- | -------------
 id | string | 节点服务器的序号，可获取列表信息获得
name | string | 节点服务器的名称
session | string | 登录标识，在登录接口获取
source | boolean | 返回的结果是否解密

* **例子：**

<div id="demo12">
<apidemo
url="https://api.xky.com/set_node"
params='{
  "id": "11",
  "name": "名字",
  "session":"",
  "source": true
}'
:isget="false">
</apidemo>
</div>

## delNode
* **方法：** `post`
* **UPL：** `https://api.xky.com/del_node`
* **说明：** 删除侠客云的节点服务器
* **参数：**

参数 | 值类型 | 说明
------------ | ------------- | -------------
 id | string | 节点服务器的序号，可获取列表信息获得
 session | string | 登录标识，在登录接口获取
 source | boolean | 返回的结果是否解密

* **例子：**

<div id="demo13">
<apidemo
url="https://api.xky.com/del_node"
params='{
  "id": "11",
  "session":"",
  "source": true
}'
:isget="false">
</apidemo>
</div>

## getDeviceList
* **方法：** `get`
* **UPL：** `https://api.xky.com/get_device_list`
* **说明：** 获取设备列表
* **参数：**

参数 | 值类型 | 说明
------------ | ------------- | -------------
session | string | 登录标识，在登录接口获取
source | boolean | 返回的结果是否解密

* **例子：**

<div id="demo14">
<apidemo
url="https://api.xky.com/get_device_list"
params='{
    "session":"",
    "source": true
}'
:isget="true">
</apidemo>
</div>

## getDevice
* **方法：** `get`
* **UPL：** `https://api.xky.com/get_device`
* **说明：** 获取设备的信息,包括设备的连接信息
* **参数：**

参数 | 值类型 | 说明
------------ | ------------- | -------------
 sn | string | 设备的序列号，可在获取设备列表中获取
 session | string | 登录标识，在登录接口获取
 source | boolean | 返回的结果是否解密

* **例子：**

<div id="demo15">
<apidemo
url="https://api.xky.com/get_device"
params='{
  "sn": "7445ee3a",
  "session":"",
  "source": true
}'
:isget="true">
</apidemo>
</div>

## getDeviceDebug
* **方法：** `get`
* **UPL：** `https://api.xky.com/get_device_debug`
* **说明：** 获取设备调试信息的授权码
* **参数：**

参数 | 值类型 | 说明
------------ | ------------- | -------------
 sn | string | 设备的序列号，可在获取设备列表中获取
 session | string | 登录标识，在登录接口获取
 source | boolean | 返回的结果是否解密

* **例子：**

<div id="demo16">
<apidemo
url="https://api.xky.com/get_device_debug"
params='{
  "sn": "7445ee3a",
  "session":"",
  "source": true
}'
:isget="true">
</apidemo>
</div>

## getDevDevice
* **方法：** `get`
* **UPL：** `https://api.xky.com/get_dev_device`
* **说明：** 获取默认调试设备的信息,包括设备的连接信息
* **参数：** null

* **例子：**

<div id="demo17">
<apidemo
url="https://api.xky.com/get_dev_device"
params='{
    "session":"",
    "source": true
}'
:isget="true">
</apidemo>
</div>


## setDevice
* **方法：** `post`
* **UPL：** `https://api.xky.com/set_device`
* **说明：** 修改设备的信息
* **参数：**

参数 | 值类型 | 说明
------------ | ------------- | -------------
 sn | string | 设备的序列号，可在获取设备列表中获取
name | string | 设备的名称
desc | string | 设备的描述
tags | Array  | 设备的标签
session | string | 登录标识，在登录接口获取
source | boolean | 返回的结果是否解密

* **例子：**

<div id="demo18">
<apidemo
url="https://api.xky.com/set_device"
params='{
  "sn": "7445ee3a",
  "name": "新名字",
  "desc": "设备的描述",
  "tags": [
     "标签1",
     "标签2"
  ],
  "session":"",
  "source": true
}'
:isget="false">
</apidemo>
</div>

## delDevice
* **方法：** `post`
* **UPL：** `https://api.xky.com/del_device`
* **说明：** 删除该设备
* **参数：**

参数 | 值类型 | 说明
------------ | ------------- | -------------
 sn | string | 设备的序列号，可在获取设备列表中获取
session | string | 登录标识，在登录接口获取
source | boolean | 返回的结果是否解密

* **例子：**

<div id="demo19">
<apidemo
url="https://api.xky.com/del_device"
params='{
  "sn": "337de7c5",
  "session":"",
  "source": true
}'
:isget="false">
</apidemo>
</div>

## setDevDevice
* **方法：** `post`
* **UPL：** `https://api.xky.com/set_dev_device`
* **说明：** 设置为默认的调试设备
* **参数：**

参数 | 值类型 | 说明
------------ | ------------- | -------------
 sn | string | 设备的序列号，可在获取设备列表中获取
session | string | 登录标识，在登录接口获取
source | boolean | 返回的结果是否解密

* **例子：**

<div id="demo20">
<apidemo
url="https://api.xky.com/set_dev_device"
params='{
  "sn": "337de7c5",
  "session":"",
  "source": true
}'
:isget="false">
</apidemo>
</div>

## getMultiDevice
* **方法：** `get`
* **UPL：** `https://api.xky.com/get_multi_device`
* **说明：** 获取群控设备列表
* **参数：**

参数 | 值类型 | 说明
------------ | ------------- | -------------
session | string | 登录标识，在登录接口获取
source | boolean | 返回的结果是否解密

* **例子：**

<div id="demo21">
<apidemo
url="https://api.xky.com/get_multi_device"
params='{
    "session":"",
    "source": true
}'
:isget="true">
</apidemo>
</div>


## setMultiDevice
* **方法：** `post`
* **UPL：** `https://api.xky.com/set_multi_device`
* **说明：** 设置群控设备列表
* **参数：**

参数 | 值类型 | 说明
------------ | ------------- | -------------
 sns | array | 设备的序列号数组，序列号可在获取设备列表中获取
session | string | 登录标识，在登录接口获取
source | boolean | 返回的结果是否解密

* **例子：**

<div id="demo22">
<apidemo
url="https://api.xky.com/set_multi_device"
params='{
   "sns": [
          "sn1",
          "sn2"
   ],
  "session":"",
  "source": true
}'
:isget="false">
</apidemo>
</div>

## addModule
* **方法：** `post`
* **UPL：** `https://api.xky.com/add_module`
* **说明：** 新增一个模块
* **参数：**

参数 | 值类型 | 说明
------------ | ------------- | -------------
name | string | 模块的名字
description | string | 模块的说明
price | number | 模块的价格
header | string | 写法可参考[模块参数配置](/api/Module.html)
code | string | 模块的本体代码
logo | string | 模块的图标
public | boolean | 是否公开，true表示公开，false表示私有
tags | array | 模块的标签
session | string | 登录标识，在登录接口获取
source | boolean | 返回的结果是否解密

* **例子：**

<div id="demo23">
<apidemo
url="https://api.xky.com/add_module"
params='{
   "name": "我是一个新模块",
   "description": "这是模块的说明",
   "price": 50,
   "header": "//模块参数",
   "code": "async function main(xky, args){let a =1;xky.log(a);}",
   "public": true,
   "tags": [
        "微信",
        "weixin"
   ],
  "session":"",
  "source": true
}'
:isget="false">
</apidemo>
</div>

## setModule
* **方法：** `post`
* **UPL：** `https://api.xky.com/set_module`
* **说明：** 修改一个模块的信息
* **参数：**

参数 | 值类型 | 说明
------------ | ------------- | -------------
id | string | 模块的id,可在模块列表里面获取
name | string | 模块的名字
description | string | 模块的说明
price | number | 模块的价格
header | string | 写法可参考 [模块参数配置](/api/Module.html)
code | string | 模块的本体代码
logo | string | 模块的图标
public | boolean | 是否公开，true表示公开，false表示私有
tags | array | 模块的标签
session | string | 登录标识，在登录接口获取
source | boolean | 返回的结果是否解密

* **例子：**

<div id="demo24">
<apidemo
url="https://api.xky.com/set_module"
params='{
   "id": "608",
   "name": "修改模块",
   "description": "这是模块的说明",
   "price": 50,
   "header": "//模块参数",
   "code": "async function main(xky, args){let a =1;xky.log(a);}",
   "public": true,
   "tags": [
        "微信",
        "weixin"
   ],
  "session":"",
  "source": true
}'
:isget="false">
</apidemo>
</div>

## updateModule
* **方法：** `post`
* **UPL：** `https://api.xky.com/update_module`
* **说明：** 同步更新一个模块的信息
* **参数：**

参数 | 值类型 | 说明
------------ | ------------- | -------------
id | string | 模块的id,可在模块列表里面获取
name | string | 模块的名字
description | string | 模块的说明
price | number | 模块的价格
header | string | 写法可参考[模块参数配置](/api/Module.html)
code | string | 模块的本体代码
logo | string | 模块的图标
public | boolean | 是否公开，true表示公开，false表示私有
tags | array | 模块的标签
session | string | 登录标识，在登录接口获取
source | boolean | 返回的结果是否解密

* **例子：**

<div id="demo25">
<apidemo
url="https://api.xky.com/update_module"
params='{
   "id": "608",
   "name": "更新模块",
   "description": "这是模块的说明",
   "price": 50,
   "header": "//模块参数",
   "code": "async function main(xky, args){let a =1;xky.log(a);}",
   "public": true,
   "tags": [
        "微信",
        "weixin"
   ],
  "session":"",
  "source": true
}'
:isget="false">
</apidemo>
</div>

## publishModule
* **方法：** `post`
* **UPL：** `https://api.xky.com/publish_module`
* **说明：** 发布一个模块
* **参数：**

参数 | 值类型 | 说明
------------ | ------------- | -------------
id | string | 模块的id,可在模块列表里面获取
price | number | 模块的价格
session | string | 登录标识，在登录接口获取
source | boolean | 返回的结果是否解密

* **例子：**

<div id="demo26">
<apidemo
url="https://api.xky.com/publish_module"
params='{
    "id": "1",
    "price": 50,
    "session":"",
    "source": true
}'
:isget="false">
</apidemo>
</div>

## delModule
* **方法：** `post`
* **UPL：** `https://api.xky.com/del_module`
* **说明：** 删除一个模块
* **参数：**

参数 | 值类型 | 说明
------------ | ------------- | -------------
id | string | 模块的id,可在模块列表里面获取
session | string | 登录标识，在登录接口获取
source | boolean | 返回的结果是否解密

* **例子：**

<div id="demo27">
<apidemo
url="https://api.xky.com/del_module"
params='{
    "id": "608",
    "session":"",
    "source": true
}'
:isget="false">
</apidemo>
</div>

## getModuleList
* **方法：** `get`
* **UPL：** `https://api.xky.com/get_module_list`
* **说明：** 获取我的模块
* **参数：**

参数 | 值类型 | 说明
------------ | ------------- | -------------
uid | string | 自己的用户id，在登录接口获取
tag | string | 模块的标签
keyword | string | 模块名称的关键词
start | number | 模块id的起始位置
limit | number | 限制个数
sortMode | string | "desc"：降序，"asc":升序
sortType | string | "createTime"：通过创建时间来排序
session | string | 登录标识，在登录接口获取
source | boolean | 返回的结果是否解密

* **例子：**

<div id="demo28">
<apidemo
url="https://api.xky.com/get_module_list"
params='{
    "uid":"934",
    "tag":"微信",
    "keyword":"我是",
    "start":0,
    "limit":5,
    "sortMode":"desc",
    "sortType":"createTime",
    "session":"",
    "source": true
}'
:isget="true">
</apidemo>
</div>

## getModuleTags
* **方法：** `get`
* **UPL：** `https://api.xky.com/get_module_tags`
* **说明：** 获取模块的标签
* **参数：**

参数 | 值类型 | 说明
------------ | ------------- | -------------
session | string | 登录标识，在登录接口获取
source | boolean | 返回的结果是否解密

* **例子：**

<div id="demo29">
<apidemo
url="https://api.xky.com/get_module_tags"
params='{
    "session":"",
    "source": true
}'
:isget="true">
</apidemo>
</div>

## getModulePanel
* **方法：** `get`
* **UPL：** `https://api.xky.com/get_module_panel`
* **说明：** 获取面板上的模块
* **参数：**

参数 | 值类型 | 说明
------------ | ------------- | -------------
session | string | 登录标识，在登录接口获取
source | boolean | 返回的结果是否解密

* **例子：**

<div id="demo30">
<apidemo
url="https://api.xky.com/get_module_panel"
params='{
    "session":"",
    "source": true
}'
:isget="true">
</apidemo>
</div>

## setModuleSort
* **方法：** `post`
* **UPL：** `https://api.xky.com/set_module_sort`
* **说明：** 更新我的模块排序
* **参数：**

参数 | 值类型 | 说明
------------ | ------------- | -------------
sort | array | 模块排列顺序的数组
session | string | 登录标识，在登录接口获取
source | boolean | 返回的结果是否解密

* **例子：**

<div id="demo31">
<apidemo
url="https://api.xky.com/set_module_sort"
params='{
     "sort": [
         4,
         2,
         3,
         1
     ],
    "session":"",
    "source": true
}'
:isget="false">
</apidemo>
</div>

## getModulePackageList
* **方法：** `get`
* **UPL：** `https://api.xky.com/get_module_package_list`
* **说明：** 获取我的模块包列表
* **参数：**

参数 | 值类型 | 说明
------------ | ------------- | -------------
session | string | 登录标识，在登录接口获取
source | boolean | 返回的结果是否解密

* **例子：**

<div id="demo32">
<apidemo
url="https://api.xky.com/get_module_package_list"
params='{
    "session":"",
    "source": true
}'
:isget="true">
</apidemo>
</div>

## syncModulePackage
* **方法：** `get`
* **UPL：** `https://api.xky.com/sync_module_package`
* **说明：** 同步模块包中的所有模块
* **参数：**

参数 | 值类型 | 说明
------------ | ------------- | -------------
id | string | 模块包的id,可在模块包列表里面获取
session | string | 登录标识，在登录接口获取
source | boolean | 返回的结果是否解密

* **例子：**

<div id="demo33">
<apidemo
url="https://api.xky.com/sync_module_package"
params='{
    "id":"10",
    "session":"",
    "source": true
}'
:isget="true">
</apidemo>
</div>


## materialsList
* **方法：** `get`
* **UPL：** `https://api.xky.com/materials/list`
* **说明：** 获取素材库列表
* **参数：**

参数 | 值类型 | 说明
------------ | ------------- | -------------
session | string | 登录标识，在登录接口获取
source | boolean | 返回的结果是否解密

* **例子：**

<div id="demo34">
<apidemo
url="https://api.xky.com/materials/list"
params='{
    "session":"",
    "source": true
}'
:isget="true">
</apidemo>
</div>

## materialsAdd
* **方法：** `post`
* **UPL：** `https://api.xky.com/materials/add`
* **说明：** 添加素材库
* **参数：**

参数 | 值类型 | 说明
------------ | ------------- | -------------
name | string | 素材库的库名
desc | string | 素材库的描述
session | string | 登录标识，在登录接口获取
source | boolean | 返回的结果是否解密

* **例子：**

<div id="demo35">
<apidemo
url="https://api.xky.com/materials/add"
params='{
    "name": "test",
    "desc": "new test",
    "session":"",
    "source": true
}'
:isget="false">
</apidemo>
</div>

## materialsInsert
* **方法：** `post`
* **UPL：** `https://api.xky.com/materials/insert`
* **说明：** 在指定素材库插入素材
* **参数：**

参数 | 值类型 | 说明
------------ | ------------- | -------------
mid | string | 素材库的id,可在素材库列表里获取
type | string | 素材的类型
name | string | 素材名称
attribute1 | string | 素材属性
session | string | 登录标识，在登录接口获取
source | boolean | 返回的结果是否解密

* **例子：**

<div id="demo36">
<apidemo
url="https://api.xky.com/materials/insert"
params='{
    "mid": "97",
    "type": 1,
    "name": "test",
    "attribute1": "属性1",
    "session":"",
    "source": true
}'
:isget="false">
</apidemo>
</div>

## materialsQuery
* **方法：** `post`
* **UPL：** `https://api.xky.com/materials/query`
* **说明：** 查询单个素材库的信息
* **参数：**

参数 | 值类型 | 说明
------------ | ------------- | -------------
mid | string | 素材库的id,可在素材库列表里获取
start | number | 素材id的开始值
number | number | 获取素材的个数
session | string | 登录标识，在登录接口获取
source | boolean | 返回的结果是否解密

* **例子：**

<div id="demo37">
<apidemo
url="https://api.xky.com/materials/query"
params='{
    "mid": "97",
    "start": 0,
    "number": 20,
    "session":"",
    "source": true
}'
:isget="false">
</apidemo>
</div>



## materialsUpdate
* **方法：** `post`
* **UPL：** `https://api.xky.com/materials/update`
* **说明：** 修改某个素材
* **参数：**

参数 | 值类型 | 说明
------------ | ------------- | -------------
id | string | 素材的id,可在查询单个素材列表里获取
type | string | 素材的类型
name | string | 素材名称
attribute1 | string | 素材属性，可以添加多个
session | string | 登录标识，在登录接口获取
source | boolean | 返回的结果是否解密

* **例子：**

<div id="demo38">
url="https://api.xky.com/materials/update"
params='{
    "id": "119",
    "type": 1,
    "name": "test",
    "attribute1": "属性1",
    "attribute2": "属性2",
    "session":"",
    "source": true
}'
:isget="false">
</apidemo>
</div>

## materialsDelIds
* **方法：** `post`
* **UPL：** `https://api.xky.com/materials/del_ids`
* **说明：** 删除指定素材库的指定素材
* **参数：**

参数 | 值类型 | 说明
------------ | ------------- | -------------
mid | string | 素材库的id,可在素材库列表里获取
ids | array | 素材的id,可在查询单个素材列表里获取
session | string | 登录标识，在登录接口获取
source | boolean | 返回的结果是否解密

* **例子：**

<div id="demo39">
<apidemo
url="https://api.xky.com/materials/del_ids"
params='{
    "mid": "97",
    "ids": [119],
    "session":"",
    "source": true
}'
:isget="false">
</apidemo>
</div>

