---
pageClass: clientapi-page
---

# Client API

## login
* **Method:** `post`
* **UPL：** `https://api.xky.com/login`
* **Description:** Login
* **Arguments:**

Arguments | Type | Description
------------ | ------------- | -------------
key | string | The key of the software, the default value is 'xky'
account | string | Login primary account
subaccount | string | When the account of the sub-control is empty, log in to the main account.
password | string | Login password
source | boolean | Whether to decrypt the returned result

例子：

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

## logout
* **Method:** `post`
* **UPL：** `https://api.xky.com/logout`
* **Description:** Logout
* **Arguments:**

Arguments | Type | Description
------------ | ------------- | -------------
session | string | A login status identifier that can be obtained from the returned results of the login API.
source | boolean | Whether to decrypt the returned result

例子：

<apidemo
url="https://api.xky.com/logout"
params='{
    "session":"",
    "source": true
}'
:isget="false">
</apidemo>

## addSubaccount
* **Method:** `post`
* **UPL：** `https://api.xky.com/add_subaccount`
* **Description:** Add a sub-control account
* **Arguments:**

Arguments | Type | Description
------------ | ------------- | -------------
account | string | User name of the sub-control account
password | string | The password of the sub-control account
description | string | Remarks
session | string | A login status identifier that can be obtained from the returned results of the login API.
source | boolean | Whether to decrypt the returned result

例子：

<apidemo
url="https://api.xky.com/add_subaccount"
params='{
    "account": "xiakeyun",
    "password": "******",
    "description": "123456",
    "session":"",
    "source": true
}'
:isget="false">
</apidemo>

## getSubaccountList
* **Method:** `get`
* **UPL：** `https://api.xky.com/get_subaccount_list`
* **Description:** Get a list of sub-control accounts.
* **Arguments:**

Arguments | Type | Description
------------ | ------------- | -------------
session | string | A login status identifier that can be obtained from the returned results of the login API.
source | boolean | Whether to decrypt the returned result

例子：

<apidemo
url="https://api.xky.com/get_subaccount_list"
params='{
    "session":"",
    "source": true
}'
:isget="true">
</apidemo>

## getSubaccount
* **Method:** `get`
* **UPL：** `https://api.xky.com/get_subaccount`
* **Description:** Get information about a sub-control account.
* **Arguments:**

Arguments | Type | Description
------------ | ------------- | -------------
id | string | The id of the sub-control account can be obtained from the list of sub-control accounts.
session | string | A login status identifier that can be obtained from the returned results of the login API.
source | boolean | Whether to decrypt the returned result

例子：

<apidemo
url="https://api.xky.com/get_subaccount"
params='{
    "id":"1",
    "session":"",
    "source": true
}'
:isget="true">
</apidemo>

## setSubaccount
* **Method:** `post`
* **UPL：** `https://api.xky.com/set_subaccount`
* **Description:** Modify the sub-control account information
* **Arguments:**

Arguments | Type | Description
------------ | ------------- | -------------
 id | string| The id of the sub-control account can be obtained from the list of sub-control accounts.
password | string | The password of the sub-control account
description | string | Remarks
devices | array |An array of serial numbers of the device, the serial number can be obtained from the returned result of the getDeviceList API
session | string | A login status identifier that can be obtained from the returned results of the login API.
source | boolean | Whether to decrypt the returned result

例子：

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

## deleteSubaccount
* **Method:** `get`
* **UPL：** `https://api.xky.com/delete_subaccount`
* **Description:** Delete a sub-control account
* **Arguments:**

Arguments | Type | Description
------------ | ------------- | -------------
id | string | The id of the sub-control account can be obtained from the list of sub-control accounts.
session | string | A login status identifier that can be obtained from the returned results of the Login API.
source | boolean | Whether to decrypt the returned result

例子：

<apidemo
url="https://api.xky.com/delete_subaccount"
params='{
    "id":"1",
    "session":"",
    "source": true
}'
:isget="true">
</apidemo>


## getTempSession
* **Method:** `get`
* **UPL：** `https://api.xky.com/get_temp_session`
* **Description:** Get a temporary session with a valid time of 5 minutes.
* **Arguments:**

Arguments | Type | Description
------------ | ------------- | -------------
session | string | A login status identifier that can be obtained from the returned results of the login API.
source | boolean | Whether to decrypt the returned result

例子：

<apidemo
url="https://api.xky.com/get_temp_session"
params='{
    "session":"",
    "source": true
}'
:isget="true">
</apidemo>

## getUser
* **Method:** `get`
* **UPL：** `https://api.xky.com/get_user`
* **Description:** Get information about the login account.
* **Arguments:**

Arguments | Type | Description
------------ | ------------- | -------------
session | string | A login status identifier that can be obtained from the returned results of the login API.
source | boolean | Whether to decrypt the returned result

例子：

<apidemo
url="https://api.xky.com/get_user"
params='{
    "session":"",
    "source": true
}'
:isget="true">
</apidemo>

## addNode
* **Method:** `post`
* **UPL：** `https://api.xky.com/add_node`
* **Description:** Add a node server for XiakeCloud
* **Arguments:**

Arguments | Type | Description
------------ | ------------- | -------------
serial | string | Serial number of the node server
name | string | The name of the node server
session | string | A login status identifier that can be obtained from the returned results of the login API.
source | boolean | Whether to decrypt the returned result

例子：

<apidemo
url="https://api.xky.com/add_node"
params='{
  "serial": "12345678901234567890123456789012",
  "name": "name",
  "session":"",
  "source": true
}'
:isget="false">
</apidemo>

## getNodeList
* **Method:** `get`
* **UPL：** `https://api.xky.com/get_node_list`
* **Description:** Get a list of node servers for XiakeCloud
* **Arguments:**

Arguments | Type | Description
------------ | ------------- | -------------
session | string | A login status identifier that can be obtained from the returned results of the login API.
source | boolean | Whether to decrypt the returned result

例子：

<apidemo
url="https://api.xky.com/get_node_list"
params='{
    "session":"",
    "source": true
}'
:isget="true">
</apidemo>

## setNode
* **Method:** `post`
* **UPL：** `https://api.xky.com/set_node`
* **Description:** Modify the node server of XiakeCloud
* **Arguments:**

Arguments | Type | Description
------------ | ------------- | -------------
 id | string | The serial number of the node server can be obtained from the returned result of the getNodeList API.
name | string | The name of the node server
session | string | A login status identifier that can be obtained from the returned results of the login API.
source | boolean | Whether to decrypt the returned result

例子：

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

## delNode
* **Method:** `post`
* **UPL：** `https://api.xky.com/del_node`
* **Description:** Remove the node server of XiakeCloud
* **Arguments:**

Arguments | Type | Description
------------ | ------------- | -------------
 id | string | The id of the node server can be obtained from the returned result of the getNodeList API.
 session | string | A login status identifier that can be obtained from the returned results of the login API.
 source | boolean | Whether to decrypt the returned result

例子：

<apidemo
url="https://api.xky.com/del_node"
params='{
  "id": "11",
  "session":"",
  "source": true
}'
:isget="false">
</apidemo>

## getDeviceList
* **Method:** `get`
* **UPL：** `https://api.xky.com/get_device_list`
* **Description:** Get a list of details for all devices.
* **Arguments:**

Arguments | Type | Description
------------ | ------------- | -------------
session | string | A login status identifier that can be obtained from the returned results of the login API.
source | boolean | Whether to decrypt the returned result

例子：

<apidemo
url="https://api.xky.com/get_device_list"
params='{
    "session":"",
    "source": true
}'
:isget="true">
</apidemo>

## getDevice
* **Method:** `get`
* **UPL：** `https://api.xky.com/get_device`
* **Description:** Get detailed information about a device, including connection information for the device.
* **Arguments:**

Arguments | Type | Description
------------ | ------------- | -------------
 sn | string | The serial number of the node server can be obtained from the returned result of the getNodeList API.
 session | string | A login status identifier that can be obtained from the returned results of the login API.
 source | boolean | Whether to decrypt the returned result

例子：

<apidemo
url="https://api.xky.com/get_device"
params='{
  "sn": "7445ee3a",
  "session":"",
  "source": true
}'
:isget="true">
</apidemo>

## getDeviceDebug
* **Method:** `get`
* **UPL：** `https://api.xky.com/get_device_debug`
* **Description:** Obtain the authorization code for the debug device
* **Arguments:**

Arguments | Type | Description
------------ | ------------- | -------------
 sn | string | The serial number of the node server can be obtained from the returned result of the getNodeList API.
 session | string | A login status identifier that can be obtained from the returned results of the login API.
 source | boolean | Whether to decrypt the returned result

例子：

<apidemo
url="https://api.xky.com/get_device_debug"
params='{
  "sn": "7445ee3a",
  "session":"",
  "source": true
}'
:isget="true">
</apidemo>

## getDevDevice
* **Method:** `get`
* **UPL：** `https://api.xky.com/get_dev_device`
* **Description:** Get information about the default debugging device, including connection information for the device.
* **Arguments:** null

例子：

<apidemo
url="https://api.xky.com/get_dev_device"
params='{
    "session":"",
    "source": true
}'
:isget="true">
</apidemo>


## setDevice
* **Method:** `post`
* **UPL：** `https://api.xky.com/set_device`
* **Description:** Modify the information for the device.
* **Arguments:**

Arguments | Type | Description
------------ | ------------- | -------------
 sn | string | The serial number of the node server can be obtained from the returned result of the getNodeList API.
name | string | Name of the device
desc | string | Remarks of the device
tags | Array  | Tags of the device
session | string | A login status identifier that can be obtained from the returned results of the login API.
source | boolean | Whether to decrypt the returned result

例子：

<apidemo
url="https://api.xky.com/set_device"
params='{
  "sn": "7445ee3a",
  "name": "name",
  "desc": "Remarks",
  "tags": [
     "tag 1",
     "tag 2"
  ],
  "session":"",
  "source": true
}'
:isget="false">
</apidemo>

## delDevice
* **Method:** `post`
* **UPL：** `https://api.xky.com/del_device`
* **Description:** Delete a device
* **Arguments:**

Arguments | Type | Description
------------ | ------------- | -------------
 sn | string | The serial number of the node server can be obtained from the returned result of the getNodeList API.
session | string | A login status identifier that can be obtained from the returned results of the login API.
source | boolean | Whether to decrypt the returned result

例子：

<apidemo
url="https://api.xky.com/del_device"
params='{
  "sn": "337de7c5",
  "session":"",
  "source": true
}'
:isget="false">
</apidemo>

## setDevDevice
* **Method:** `post`
* **UPL：** `https://api.xky.com/set_dev_device`
* **Description:** Set as the default debug device
* **Arguments:**

Arguments | Type | Description
------------ | ------------- | -------------
 sn | string | The serial number of the node server can be obtained from the returned result of the getNodeList API.
session | string | A login status identifier that can be obtained from the returned results of the login API.
source | boolean | Whether to decrypt the returned result

例子：

<apidemo
url="https://api.xky.com/set_dev_device"
params='{
  "sn": "337de7c5",
  "session":"",
  "source": true
}'
:isget="false">
</apidemo>

## getMultiDevice
* **Method:** `get`
* **UPL：** `https://api.xky.com/get_multi_device`
* **Description:** Get a list of group control devices
* **Arguments:**

Arguments | Type | Description
------------ | ------------- | -------------
session | string | A login status identifier that can be obtained from the returned results of the login API.
source | boolean | Whether to decrypt the returned result

例子：

<apidemo
url="https://api.xky.com/get_multi_device"
params='{
    "session":"",
    "source": true
}'
:isget="true">
</apidemo>


## setMultiDevice
* **Method:** `post`
* **UPL：** `https://api.xky.com/set_multi_device`
* **Description:** Set the list of group control devices
* **Arguments:**

Arguments | Type | Description
------------ | ------------- | -------------
 sns | array | An array of serial numbers of the device, the serial number can be obtained from the returned result of the getMultiDevice API
session | string | A login status identifier that can be obtained from the returned results of the login API.
source | boolean | Whether to decrypt the returned result

例子：

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

## addModule
* **Method:** `post`
* **UPL：** `https://api.xky.com/add_module`
* **Description:** Add a new module
* **Arguments:**

Arguments | Type | Description
------------ | ------------- | -------------
name | string | Module name
description | string |This is the description of the module.
price | number | Module price
header | string | see also:[Module Parameter Configuration](/api/Module.html)
code | string | Module's ontology code
logo | string | Module icon
public | boolean | Whether it is public, true means public, false means private
tags | array | Module tags
session | string | A login status identifier that can be obtained from the returned results of the login API.
source | boolean | Whether to decrypt the returned result

例子：

<apidemo
url="https://api.xky.com/add_module"
params='{
   "name": "I am a new module",
   "description": "This is the description of the module.",
   "price": 50,
   "header": "//Module Arguments",
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

## setModule
* **Method:** `post`
* **UPL：** `https://api.xky.com/set_module`
* **Description:** Modify the information of a module
* **Arguments:**

Arguments | Type | Description
------------ | ------------- | -------------
id | string | The module's id can be obtained from the returned result of the getModulePackageList API.
name | string | Module name
description | string |This is the description of the module.
price | number | Module price
header | string | see also:[Module Parameter Configuration](/api/Module.html)
code | string | Module's ontology code
logo | string | Module icon
public | boolean | Whether it is public, true means public, false means private
tags | array | Module tags
session | string | A login status identifier that can be obtained from the returned results of the login API.
source | boolean | Whether to decrypt the returned result

例子：

<apidemo
url="https://api.xky.com/set_module"
params='{
   "id": "608",
   "name": "setModule",
   "description": "This is the description of the module.",
   "price": 50,
   "header": "//Module Arguments",
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

## updateModule
* **Method:** `post`
* **UPL：** `https://api.xky.com/update_module`
* **Description:** Synchronously update information about a module
* **Arguments:**

Arguments | Type | Description
------------ | ------------- | -------------
id | string | The module's id can be obtained from the returned result of the getModulePackageList API.
name | string | Module name
description | string |This is the description of the module.
price | number | Module price
header | string | see also:[Module Parameter Configuration](/api/Module.html)
code | string | Module's ontology code
logo | string | Module icon
public | boolean | Whether it is public, true means public, false means private
tags | array | Module tags
session | string | A login status identifier that can be obtained from the returned results of the login API.
source | boolean | Whether to decrypt the returned result

例子：

<apidemo
url="https://api.xky.com/update_module"
params='{
   "id": "608",
   "name": "Update",
   "description": "This is the description of the module.",
   "price": 50,
   "header": "//Module Arguments",
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

## publishModule
* **Method:** `post`
* **UPL：** `https://api.xky.com/publish_module`
* **Description:** Publish a module
* **Arguments:**

Arguments | Type | Description
------------ | ------------- | -------------
id | string | The module's id can be obtained from the returned result of the getModulePackageList API.
price | number | Module price
session | string | A login status identifier that can be obtained from the returned results of the login API.
source | boolean | Whether to decrypt the returned result

例子：

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

## delModule
* **Method:** `post`
* **UPL：** `https://api.xky.com/del_module`
* **Description:** Delete a module
* **Arguments:**

Arguments | Type | Description
------------ | ------------- | -------------
id | string | The module's id can be obtained from the returned result of the getModulePackageList API.
session | string | A login status identifier that can be obtained from the returned results of the login API.
source | boolean | Whether to decrypt the returned result

例子：

<apidemo
url="https://api.xky.com/del_module"
params='{
    "id": "608",
    "session":"",
    "source": true
}'
:isget="false">
</apidemo>

## getModuleList
* **Method:** `get`
* **UPL：** `https://api.xky.com/get_module_list`
* **Description:** Get the module list
* **Arguments:**

Arguments | Type | Description
------------ | ------------- | -------------
uid | string | Get the id of the login account in the returned result of the Login API
tag | string | Module tags
keyword | string | Keyword of module name
start | number | The starting serial number of the module id
limit | number | Limit the number
sortMode | string | The order of the module list, "desc" is descending, "asc" is ascending
sortType | string | The default value is "createTime" which means sorting by creating time.
session | string | A login status identifier that can be obtained from the returned results of the login API.
source | boolean | Whether to decrypt the returned result

例子：

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

## getModuleTags
* **Method:** `get`
* **UPL：** `https://api.xky.com/get_module_tags`
* **Description:** Get the tags of the module
* **Arguments:**

Arguments | Type | Description
------------ | ------------- | -------------
session | string | A login status identifier that can be obtained from the returned results of the login API.
source | boolean | Whether to decrypt the returned result

例子：

<apidemo
url="https://api.xky.com/get_module_tags"
params='{
    "session":"",
    "source": true
}'
:isget="true">
</apidemo>

## getModulePanel
* **Method:** `get`
* **UPL：** `https://api.xky.com/get_module_panel`
* **Description:** Get the module on the panel
* **Arguments:**

Arguments | Type | Description
------------ | ------------- | -------------
session | string | A login status identifier that can be obtained from the returned results of the login API.
source | boolean | Whether to decrypt the returned result

例子：

<apidemo
url="https://api.xky.com/get_module_panel"
params='{
    "session":"",
    "source": true
}'
:isget="true">
</apidemo>

## setModuleSort
* **Method:** `post`
* **UPL：** `https://api.xky.com/set_module_sort`
* **Description:** Update the module sort
* **Arguments:**

Arguments | Type | Description
------------ | ------------- | -------------
sort | array | Array of module ordering
session | string | A login status identifier that can be obtained from the returned results of the login API.
source | boolean | Whether to decrypt the returned result

例子：

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

## getModulePackageList
* **Method:** `get`
* **UPL：** `https://api.xky.com/get_module_package_list`
* **Description:** Get the module package list
* **Arguments:**

Arguments | Type | Description
------------ | ------------- | -------------
session | string | A login status identifier that can be obtained from the returned results of the login API.
source | boolean | Whether to decrypt the returned result

例子：

<apidemo
url="https://api.xky.com/get_module_package_list"
params='{
    "session":"",
    "source": true
}'
:isget="true">
</apidemo>

## syncModulePackage
* **Method:** `get`
* **UPL：** `https://api.xky.com/sync_module_package`
* **Description:** Synchronize all modules in the module package
* **Arguments:**

Arguments | Type | Description
------------ | ------------- | -------------
id | string | The id of the module package can be obtained from the returned result of the getModulePackageList API.
session | string | A login status identifier that can be obtained from the returned results of the login API.
source | boolean | Whether to decrypt the returned result

例子：

<apidemo
url="https://api.xky.com/sync_module_package"
params='{
    "id":"10",
    "session":"",
    "source": true
}'
:isget="true">
</apidemo>


## materialsList
* **Method:** `get`
* **UPL：** `https://api.xky.com/materials/list`
* **Description:** Get a list of material libraries
* **Arguments:**

Arguments | Type | Description
------------ | ------------- | -------------
session | string | A login status identifier that can be obtained from the returned results of the login API.
source | boolean | Whether to decrypt the returned result

例子：

<apidemo
url="https://api.xky.com/materials/list"
params='{
    "session":"",
    "source": true
}'
:isget="true">
</apidemo>

## materialsAdd
* **Method:** `post`
* **UPL：** `https://api.xky.com/materials/add`
* **Description:** Add a library
* **Arguments:**

Arguments | Type | Description
------------ | ------------- | -------------
name | string | The name of the material library
desc | string | The description of the material library
session | string | A login status identifier that can be obtained from the returned results of the login API.
source | boolean | Whether to decrypt the returned result

例子：

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

## materialsInsert
* **Method:** `post`
* **UPL：** `https://api.xky.com/materials/insert`
* **Description:** Insert clips in the specified library
* **Arguments:**

Arguments | Type | Description
------------ | ------------- | -------------
mid | string | The id of the library can be obtained from the returned results of the materialsList API
type | string |Type of material
name | string |Name of material
attribute1 | string | Material attribute
session | string | A login status identifier that can be obtained from the returned results of the login API.
source | boolean | Whether to decrypt the returned result

例子：

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

## materialsQuery
* **Method:** `post`
* **UPL：** `https://api.xky.com/materials/query`
* **Description:** Query information for a single library
* **Arguments:**

Arguments | Type | Description
------------ | ------------- | -------------
mid | string | The id of the library can be obtained from the returned results of the materialsList API
start | number | The starting value of the material id
number | number | Get the number of clips
session | string | A login status identifier that can be obtained from the returned results of the login API.
source | boolean | Whether to decrypt the returned result

例子：

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



## materialsUpdate
* **Method:** `post`
* **UPL：** `https://api.xky.com/materials/update`
* **Description:** Edit a clip
* **Arguments:**

Arguments | Type | Description
------------ | ------------- | -------------
id | string | The id of the clip can be obtained from the returned results of the materialsQuery API
type | string | Type of material
name | string |Name of material
attribute1 | string | Material properties, you can add multiple.
session | string | A login status identifier that can be obtained from the returned results of the login API.
source | boolean | Whether to decrypt the returned result

例子：

<apidemo
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

## materialsDelIds
* **Method:** `post`
* **UPL：** `https://api.xky.com/materials/del_ids`
* **Description:** Delete the specified clip of the specified clip
* **Arguments:**

Arguments | Type | Description
------------ | ------------- | -------------
mid | string | The id of the library can be obtained from the returned results of the materialsList API
ids | array |The id of the clip can be obtained from the returned results of the materialsQuery API
session | string | A login status identifier that can be obtained from the returned results of the login API.
source | boolean | Whether to decrypt the returned result

例子：

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

