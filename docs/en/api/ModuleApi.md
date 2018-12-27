---
pageClass: api-page
---

# Module API
All apis belong to the `xky` object, and the api file can be added or deleted at any time. Please pay attention to the view.

## adbCommand
* **Method:** `xky.adbCommand(command)`
* **Description:** Any adb instruction can be executed.
* **Arguments:**

Arguments | Type | Description
------------ | ------------- | -------------
command| string | Any adb instruction

Usage：
```javascript
// Any adb instruction can be executed，such as `adb shell ls`
await xky.adbCommand('shell ls');
```
Will result in：
```javascript
{errcode: 0, result: "结果"}
```


## adbShell
>The api is similar to adbCommand, but it is executed inside the phone without the need for a shell command, and adbCommand is equivalent to executing an adb shell command on the node server.
* **Method:** `xky.adbShell(command)`
* **Description:** Execute the adb shell command.
* **Arguments:**


Arguments | Type | Description
------------ | ------------- | -------------
command| string | Any adb instruction

例子：
```javascript
// Any adb instruction can be executed，such as `adb shell ls`
await xky.adbShell('ls');
```
返回结果：
```javascript
{errcode: 0, result: "结果"}
```


## toast

* **Method:** `xky.toast(toast)`
* **Description:** Pop-up message on the phone
* **Arguments:**

Arguments | Type | Description
------------ | ------------- | -------------
toast| string | message
style| int | style, optional (optional 1 2 3 4 5 6 )

Usage：
```javascript
await xky.toast('I am a message');
await xky.toast('I am a message',1);
```
Will result in：
```javascript
{msg: "toast by http", errcode: 0}
```

## sleep
* **Method:** `xky.sleep(millisecond)`
* **Description:** After the specified time of sleep, execute the next instruction. This command must use the synchronization method, that is, add await in front of the method, otherwise it will have no effect and will jump over.
* **Arguments:**

Arguments | Type | Description
------------ | ------------- | -------------
millisecond| int | Sleep time, in milliseconds, 1 second = 1000 milliseconds
Usage：
```javascript
await xky.sleep(1000);//Sleep 1 second
```
Will result in：
```javascript
{errcode: 0, msg: "冷却完毕"}
```

## log
* **Method:** `xky.log(log)`
* **Description:** Print logs in the console
* **Arguments:**

Arguments | Type | Description
------------ | ------------- | -------------
log| object | Printed content
Usage：
```javascript
await xky.log('Printed content');
```
Will result in：
```javascript
{errcode: 0, msg: "日志发送完毕"}
```

## wakeup

* **Method:** `xky.wakeup()`
* **Description:** Wake up device

Usage：
```javascript
await xky.wakeup();
```
Will result in：
```javascript
{errcode: 0, msg: "done"}
```

## click

* **Method:** `xky.click(x,y)`
* **Description:** Click on a location on the device screen, x and y are percentages, ranging from 0 to 1, and can be used with the `xiakeuispy` tool to get coordinate points.
* **Arguments:**

Arguments | Type | Description
------------ | ------------- | -------------
x| double | X axis
y| double | Y axis

Usage：
```javascript
await xky.click(0.5,0.5);// Click on the middle of the device screen
```
Will result in：
```javascript
{msg: "点击完毕", errcode: 0}
```

## mousedown
* **Method:** `xky.mousedown(x,y)`
* **Description:** Press a location on the device screen, x and y are percentages, ranging from 0 to 1, and can be used with the `xiakeuispy` tool to get coordinate points.
* **Arguments:**

Arguments | Type | Description
------------ | ------------- | -------------
x| double | X axis
y| double | Y axis

Usage：
```javascript
await xky.mousedown(0.5,0.5);//Press the middle of the device screen
```
Will result in：
```javascript
{msg: "鼠标按下", errcode: 0}
```

## mouseup
* **Method:** `xky.mouseup(x,y)`
* **Description:** First, execute the method of pressing the position of the coordinate (x1, y1), and then execute the method of releasing the position of the coordinate (x2, y2).x and y are percentages, ranging from 0 to 1, and can be used with the `xiakeuispy` tool to get coordinate points.
* **Arguments:**

Arguments | Type | Description
------------ | ------------- | -------------
x| double | X axis
y| double | Y axis

Usage：
```javascript
await xky.mousedown(0.5,0.5); // Press the middle of the device screen
await xky.mouseup(0.5,0.5); // Release the middle position of the screen
```
Will result in：
```javascript
{msg: "鼠标释放", errcode: 0}
```

## mousedrag

* **Method:** `xky.mousedrag(x,y)`
* **Description:** Move from the position of (x1, y1) to the position of coordinates (x2, y2). x and y are percentages, ranging from 0 to 1, and can be used with the `xiakeuispy` tool to get coordinate points.
* **Arguments:**

Arguments | Type | Description
------------ | ------------- | -------------
x| double | X axis
y| double | Y axis

Usage：
```javascript
await xky.mousedown(0.1,0.1);// Press the position of (0.1,0.1)
await xky.mousedrag(0.5,0.5);//Move to the position of (0.5,0.5)
```
Will result in：
```javascript
{msg: "鼠标移动", errcode: 0}
```

## wheel

* **Method:** `xky.wheel(x, y, updown, leftright)`
* **Description:** Start scrolling interface from the position with coordinates (x, y), x and y are percentages, ranging from 0 to 1, and can be used with the `xiakeuispy` tool to get coordinate points.
* **Arguments:**

Arguments | Type | Description
------------ | ------------- | -------------
x| double | X axis
y| double | Y axis
updown| int | Vertical scrolling amount, optional, default value is 0
leftright| int |Horizontal scrolling, optional, default value is 0

Usage：
```javascript
await xky.wheel(0.5,0.5,-2); // From the middle of the device screen, scroll down -2 units
```
Will result in：
```javascript
{msg: "鼠标滚动", errcode: 0}
```


## pressKey

* **Method:** `xky.pressKey(key)`
* **Description:** Press a keyboard key, See also:[Android KEYCODE](/api/Keycode.html).
* **Arguments:**

Arguments | Type | Description
------------ | ------------- | -------------
key| int | See also:[Android KEYCODE](/api/Keycode.html)

Usage：
```javascript
await xky.pressKey(3);//Press the `home` key
```
Will result in：
```javascript
{msg: "按键操作成功", errcode: 0}
```


## setClipboardText

* **Method:** `xky.setClipboardText(value)`
* **Description:** Set the contents of the clipboard on your device.
* **Arguments:**

Arguments | Type | Description
------------ | ------------- | -------------
value| string| the contents of the clipboard

Usage:
```javascript
await xky.setClipboardText('Hi, XiakeCloud!');// Set the clipboard content to 'Hi, XiakeCloud!'
```
Will result in：
```javascript
{msg: "剪贴板赋值完成", errcode: 0}
```

## getClipboardText

* **Method:** `xky.getClipboardText()`
* **Description:** Get the contents of the clipboard on your device.

Usage：
```javascript
let cb=await xky.getClipboardText();
xky.log(cb)
```
Will result in：
```javascript
{msg: "剪贴板读值完成", errcode: 0, value: "3"}
```

## copy

* **Method:** `xky.copy()`
* **Description:** Copy the selection to the clipboard on your device., similar to `ctrl+c` under Windows。

Usage：
```javascript
await xky.copy();
```
Will result in：
```javascript
{msg: "按键操作成功", errcode: 0}
```

## cut

* **Method:** `xky.cut()`
* **Description:** Cut the selection to the clipboard on your device., similar to `ctrl+x` under Windows.

Usage：
```javascript
await xky.cut();
```
Will result in：
```javascript
{msg: "按键操作成功", errcode: 0}
```

## paste

* **Method:** `xky.paste()`
* **Description:** Paste the contents of the clipboard on your device., similar to ctrl+v under Windows.

Usage：
```javascript
await xky.paste();
```
Will result in：
```javascript
{msg: "按键操作成功", errcode: 0}
```

## setClientClipboardText

* **Method:** `xky.setClientClipboardText(value)`
* **Description:** Set the clipboard content on the client(pc)
* **Arguments:**

Arguments | Type | Description
------------ | ------------- | -------------
value| string| the contents of the clipboard

Usage：
```javascript
await xky.setClientClipboardText('the contents of the clipboard');
```
Will result in：
```javascript
{errcode: 0, result: "发送完毕"}
```

## findUiObjects

* **Method:** `xky.findUiObjects(name, option)`
* **Description:** Find the control element, the id of the control element can be obtained with the `xiakeyunuispy` tool.
* **Arguments:**

Arguments | Type | Description
------------ | ------------- | -------------
name| string| Find the condition of the control, either a string or a regular expression.
option| json | Optional Arguments：<br /> `regex` &emsp;Type：`bool` &emsp;Description：Whether to enable regular expression; <br /> `timeout`  Type：`number` Description：Action timeout.

Usage：
```javascript
// Find a control with the text '微信' without using a regular expression.
// If the control has not been found for more than 1000 milliseconds, skip and execute the next step.
await xky.findUiObjects('微信',{regex:false,timeout:1000});
```
Will result in：
```javascript
{uiObjects: Array(0), errcode: 0}
```


## findAndClick

* **Method:** `xky.findAndClick(name, option)`
* **Description:** Find and click on a control element， the id of the control element can be obtained with the `xiakeyunuispy` tool.
* **Arguments:**

Arguments | Type | Description
------------ | ------------- | -------------
name| string| Find the condition of the control, either a string or a regular expression.
option| json | Optional Arguments：<br /> `regex` &emsp;Type：`bool` &emsp;Description：Whether to enable regular expression; <br /> `timeout`  Type：`number` Description：Action timeout; <br /> `index` &emsp;Type：`number` Description：Which element to click on.


Usage：
```javascript
//Find and click on the control element with the text '微信'.
await xky.findAndClick('微信');
//Use regular expressions to find all control elements including with the text '微' and click on the first by default.
await xky.findAndClick('微',{regex:true});
//Use regular expressions to find all control elements including with the text '微' and click on the second.
await xky.findAndClick('微信',{regex:false,index:1});
```
Will result in：
```javascript
{msg: "点击成功", errcode: 0}
```

## findAndInput

* **Method:** `xky.findAndInput(name, value, option)`
* **Description:** Find an input control and enter the specified text, the id of the control element can be obtained with the `xiakeyunuispy` tool.
* **Arguments:**

Arguments | Type | Description
------------ | ------------- | -------------
name| string| Find the condition of the control, either a string or a regular expression.
value| string| Input content
option| json |Optional Arguments：<br /> `regex` &emsp;Type：`bool` &emsp;Description：Whether to enable regular expression; <br /> `timeout`  Type：`number` Description：Action timeout; <br /> `index` &emsp;Type：`number` Description：Which element to click on.

Usage：
```javascript
//Find the specified control and enter 'Hello,the XiakeCloud!'
await xky.findAndInput('com.android.messaging:id/recipient_text_view','Hello,the XiakeCloud!');
```
Will result in：
```javascript
{msg: "赋值成功", errcode: 0}
```


## restartApp

* **Method:**  `xky.restartApp(pkname)`
* **Description:**  Restart the app, start it if it doesn't start, and restart if it's already started.
* **Arguments:**

Arguments | Type | Description
------------ | ------------- | -------------
pkname| string| App package name

Usage：
```javascript
await xky.restartApp('com.tencent.mm');//Start a App
```
Will result in：
```javascript
{msg: "指令完成", errcode: 0}
```

## killApp

* **Method:** `xky.killApp(pkname)`
* **Description:** Kill the running app
* **Arguments:**

Arguments | Type | Description
------------ | ------------- | -------------
pkname| string| App package name

Usage：
```javascript
await xky.killApp('com.tencent.mm');//Kill the running app
```
Will result in：
```javascript
{errcode: 0, result: ""}
```

## clearApp

* **Method:** `xky.clearApp(pkname)`
* **Description:** Clear all the data of the app, this is equivalent to reinstalling the app, all data will be emptied, and can not be restored, so please be careful.
* **Arguments:**

Arguments | Type | Description
------------ | ------------- | -------------
pkname| string| App package name

Usage：
```javascript
await xky.clearApp('com.tencent.mm');//Clear all the data of the app
```
Will result in：
```javascript
{errcode: 0, result: ""}
```

## callApi

* **Method:** `xky.callApi(pkname,action,json)`
* **Description:** See also:[Calling A Third-Party Interface](/api/Third.html).
* **Arguments:**

Arguments | Type | Description
------------ | ------------- | -------------
pkname| string|Third-party app package name or custom string
action| string| Action name
json| Json| Json Or Arguments(optional)

Usage：
```javascript
await xky.callApi('com.tencent.mm','sendTextMsg',{wxid:'wxid_xxx',msg:'xxxxxx'});
```
Will result in：
```javascript
{errcode: 0, result: "发送成功"}
```

## input

* **Method:** `xky.input(text)`
* **Description:** Enter text in any input box by input.
* **Arguments:**

Arguments | Type | Description
------------ | ------------- | -------------
text| string| Input content

Usage：
```javascript
await xky.input('Input content');
```
Will result in：
```javascript
{errcode: 0, msg: "输入操作完毕"}
```

## showInputMethod

* **Method:** `xky.showInputMethod()`
* **Description:** Open the interface for selecting the input.

Usage：
```javascript
await xky.showInputMethod();
```
Will result in：
```javascript
{errcode: 0}
```

## setInputMethod

* **Method:** `xky.setInputMethod()`
* **Description:** Set the XiakeCloud X input.
* **Arguments:** 无

Usage：
```javascript
await xky.setInputMethod();
```
Will result in：
```javascript
{errcode: 0}
```
## showNotification

* **Method:** `xky.showNotification(title,message,level)`
* **Description:** Pop up client prompt message.
* **Arguments:**

Arguments | Type | Description
------------ | ------------- | -------------
title| string| The title of notification box.
message| string| The content of notification box.
level| string| The style of notification box.(optional:`succuss` `error` `warning` `info`)

Usage：
```javascript
await xky.showNotification('成功','恭喜，快照成功','success');
```
Will result in：
```javascript
{errcode: 0, result: "client_notification发送完毕"}
```

## swipe

* **Method:** `xky.swipe(startx,starty,endx,endy,steps)`
* **Description:** Sliding from the position of (startx, starty) to the position of (endx, endy),x and y are percentages, ranging from 0 to 1, and can be used with the xiakeuispy tool to get coordinate points.
* **Arguments:**

Arguments | Type | Description
------------ | ------------- | -------------
startx| double| The x coordinate of the starting position
starty| double| The y coordinate of the starting position
endx| double| The x coordinate of the end position
endy| double| The y coordinate of the end position
steps| int| Number of steps, Optional(default 10), this value determines the speed of this slide, the bigger the slower.

Usage:
```javascript
await await xky.swipe(0.6,0.8,0.6,0.2,10);//Slide 10 times from the position of (0.6,0.8) to the position of (0.6,0.2).
```
Will result in：
```javascript
{errcode: 0, result: "滑动完成"}
```

## installApkFromUrl

* **Method:** `xky.installApkFromUrl(url,newdown)`
* **Description:** Install apk by installation address
* **Arguments:**

Arguments | Type | Description
------------ | ------------- | -------------
url| string| Apk installation address
newdown| bool| This optional parameter indicates whether you want to install the latest version.The default value is false, that is, if there is a cache file, install it directly with the cache file.

Usage：
```javascript
// Install the 667 version of WeChat
await xky.installApkFromUrl('http://dldir1.qq.com/weixin/android/weixin667android1320.apk');
```
Will result in：
```javascript
{errcode: 0, result: "apk安装完成"}
```

## installApkFromCloud

* **Method:** `xky.installApkFromCloud(file_path,newdown)`
* **Description:** Install apk from the XiakeCloud disk.
* **Arguments:**

Arguments | Type | Description
------------ | ------------- | -------------
file_path| string| Relative path of the XiakeCloud disk.
newdown| bool| This optional parameter indicates whether you want to install the latest version.The default value is false, that is, if there is a cache file, install it directly with the cache file.

Usage：
```javascript
//Install the 667 version of WeChat
await xky.installApkFromCloud('apk/weixin.apk');
```
Will result in：
```javascript
{errcode: 0, result: "apk安装完成"}
```

## sendEditorAction

* **Method:** `xky.sendEditorAction(code)`
* **Description:** Execute input text by input action command,see also:[Android Input Code](/api/Input.html).
* **Arguments:**

Arguments | Type | Description
------------ | ------------- | -------------
code| int| Number of the action instruction, see also:[Android Input Code](/api/Input.html).

Usage：
```javascript
await xky.sendEditorAction(4);//Send
```
Will result in：
```javascript
{errcode: 0, msg: "输入法指令输入完毕"}
```

## createHardware
>This API is only available for XiakeCloud devices.
* **Method:** `xky.createHardware(model)`
* **Description:** Create a holographic hardware message.
* **Arguments:**

Arguments | Type | Description
------------ | ------------- | -------------
model| string| Optional, the value is the model that needs to be specified, for example: mi5, nexus6, etc. (refer to the support list for details);

Usage：
```javascript
await xky.createHardware('nexus6');//Generate a hardware holographic information for nexus6
```
Will result in：
```javascript
{
  errcode: 0,
  model: "Nexus 6",
  key: "c009047c" //Return value key is the unique value of the current holographic information, please write it down.
}
```


## getHardwareKey
>This API is only available for XiakeCloud devices.
* **Method:** `xky.getHardwareKey()`
* **Description:** Get the hardware holographic KEY of the current device.
* **Arguments:**

Arguments | Type | Description
------------ | ------------- | -------------
key| string| This key is the key returned by the createHardware method.

Usage：
```javascript
await xky.getHardwareKey();
```
Will result in：
```javascript
{
  errcode: 0,
  key: "c009047c" //Return value key is the unique value of the current holographic information, please write it down.
}
```


## restoreHardware
>This API is only available for XiakeCloud devices.
* **Method:** `xky.restoreHardware(key)`
* **Description:** Restore a holographic hardware information。
* **Arguments:**

Arguments | Type | Description
------------ | ------------- | -------------
key| string| This key is the key returned by the createHardware method.

Usage：
```javascript
await xky.restoreHardware('c009047c');//Restore hardware holographic information of key='c009047c'
```
Will result in：
```javascript
{
  errcode: 0,
  model: "Nexus 6",
  key: "c009047c" //Return value key is the unique value of the current holographic information, please write it down.
}
```

## createAppSnapshot
>This API is only available for XiakeCloud devices.
* **Method:** `xky.createAppSnapshot(packName,name)`
* **Description:**  Create an hologram snapshot socket for your app.
* **Arguments:**

Arguments | Type | Description
------------ | ------------- | -------------
packName| string| App package name
name| string| Snapshot name


Usage：
```javascript
await xky.createAppSnapshot( "com.tencent.mm","01");
```
Will result in：
```javascript
{errcode: 0, msg: "快照创建成功", path: "01"}
```
>Note that each time you create a new snapshot socket, all data for the current app will be erased, and a new hardware hologram will be generated each time you create it.

## setAppSnapshot
>This API is only available for XiakeCloud devices.
* **Method:** `xky.setAppSnapshot(packName,name)`
* **Description:**  Switch the hologram snapshot socket of an app.
* **Arguments:**

Arguments | Type | Description
------------ | ------------- | -------------
packName| string| App package name
name| string| Snapshot name


Usage：
```javascript
await xky.setAppSnapshot( "com.tencent.mm","01");
```
Will result in：
```javascript
{errcode: 0, msg: "快照切换成功", path: "02"}
```

## getCurrentAppSnapshot
>This API is only available for XiakeCloud devices.
* **Method:** `xky.getCurrentAppSnapshot(packName)`
* **Description:**  Get the holographic snapshot socket information of the current APP.
* **Arguments:**

Arguments | Type | Description
------------ | ------------- | -------------
packName| string| App package name


Usage：
```javascript
await xky.getCurrentAppSnapshot( "com.tencent.mm");
```
Will result in：
```javascript
{errcode: 0, name: "02"}
```

## getAppSnapshotList
>This API is only available for XiakeCloud devices.
* **Method:** `xky.getAppSnapshotList(packName)`
* **Description:**  Get a list of holographic snapshot socket information for the current app.
* **Arguments:**

Arguments | Type | Description
------------ | ------------- | -------------
packName| string| App package name

Usage：
```javascript
   await xky.getAppSnapshotList( "com.tencent.mm");
```
Will result in：
```javascript
   {errcode: 0, list: Array(3)}
```

## delAppSnapshot
>This API is only available for XiakeCloud devices.
* **Method:** `xky.delAppSnapshot(packName,name)`
* **Description:**  Delete the specified snapshot.
* **Arguments:**

Arguments | Type | Description
------------ | ------------- | -------------
packName| string| App package name
name| string| Snapshot name >Delete all snapshots when name=all


Usage：
```javascript
await xky.delAppSnapshot("com.tencent.mm","01");//Delete 01
await xky.delAppSnapshot("com.tencent.mm","all");//Delete all
```
Will result in：
```javascript
{ errcode: 0, msg: "快照删除成功"}
```

## updateCameraFromUrl
>This API is only available for XiakeCloud devices.
* **Method:** `xky.updateCameraFromUrl(url)`
* **Description:** Update a remote picture to the camera.
* **Arguments:**

Arguments | Type | Description
------------ | ------------- | -------------
url| string| Image file url path


Usage：
```javascript
await xky.updateCameraFromUrl("https://www.xky.com/static/main/img/weixin.jpg");
```
Will result in：
```javascript
{errcode: 0, msg: "写入完毕"}
```

## updateCameraFromText
>This API is only available for XiakeCloud devices.
* **Method:** `xky.updateCameraFromText(text)`
* **Description:** Generate a QR code based on text and submit it to the camera.
* **Arguments:**

Arguments | Type | Description
------------ | ------------- | -------------
text| string| QR code content


Usage：
```javascript
await xky.updateCameraFromText("123123");
```
Will result in：
```javascript
{errcode: 0, msg: "写入完毕"}
```

## updateCameraFromFile
>This API is only available for XiakeCloud devices.
* **Method:** `xky.updateCameraFromFile(base64)`
* **Description:** Submit a local image to the camera
* **Arguments:**

Arguments | Type | Description
------------ | ------------- | -------------
base64| string| Base64 code for image files


Usage：
```javascript
await xky.updateCameraFromFile("/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wgARCAAPAA8DASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAEG/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAH/2gAMAwEAAhADEAAAAd4hP//EABQQAQAAAAAAAAAAAAAAAAAAACD/2gAIAQEAAQUCH//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQMBAT8Bf//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQIBAT8Bf//EABQQAQAAAAAAAAAAAAAAAAAAACD/2gAIAQEABj8CH//EABQQAQAAAAAAAAAAAAAAAAAAACD/2gAIAQEAAT8hH//aAAwDAQACAAMAAAAQP//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQMBAT8Qf//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQIBAT8Qf//EABQQAQAAAAAAAAAAAAAAAAAAACD/2gAIAQEAAT8QH//Z");
```
Will result in：
```javascript
{errcode: 0, msg: "写入完毕"}
```

## uploadBase64

* **Method:** `xky.uploadBase64(base64,savepath)`
* **Description:** Upload a base64d code to the XiakeCloud network disk
* **Arguments:**

Arguments | Type | Description
------------ | ------------- | -------------
base64| string| The base64 code of the file
savepath| string| The path of the file in the XiakeCloud network disk

Usage：
```javascript
await xky.uploadBase64("base64","aaa.jpb");
```
Will result in：
```javascript
{
  errcode: 0,
  name: "files/anj68vkk9tqmmxb38myg/wedata/6406.tar"  // The path of the file in the XiakeCloud network disk
}
```

## uploadFile

* **Method:** `xky.uploadFile(filepath,savepath)`
* **Description:** Upload a file to the XiakeCloud network disk
* **Arguments:**

Arguments | Type | Description
------------ | ------------- | -------------
filepath| string| Path of the file on the phone
savepath| string| Path of the file in the XiakeCloud network disk

Usage：
```javascript
await xky.uploadFile("/sdcard/xbak/6406.tar", "wedata/6406.tar");
```
Will result in：
```javascript
{
  errcode: 0,
  name: "files/anj68vkk9tqmmxb38myg/wedata/6406.tar",  // Path of the file in the XiakeCloud network disk
  url: "https://static.xky.com/files/anj68vkk9tqmmxb38myg/wedata/6406.tar" //download link
}
```

## downloadFile

* **Method:** `xky.downloadFile(filepath,savepath)`
* **Description:** Download a file from the XiakeCloud network disk
* **Arguments:**

Arguments | Type | Description
------------ | ------------- | -------------
filepath| string| Path of the file in the XiakeCloud network disk
savepath| string| Path of the file on the phone

Usage：
```javascript
await xky.downloadFile("wedata/6406.tar", "/sdcard/xbak/6406.tar");
```
Will result in：
```javascript
{
  errcode: 0,
  name: "/sdcard/xbak/6406.tar" //Save the path on your phone
}
```

## writeString

* **Method:** `xky.writeString(key,value)`
* **Description:** Save the string as a text file and upload it to the XiakeCloud network disk
* **Arguments:**

Arguments | Type | Description
------------ | ------------- | -------------
key| string| Path of the file in the XiakeCloud network disk
value| string| Text content

Usage：
```javascript
await xky.writeString("wedata/6406.txt", "I am a string");
```
Will result in：
```javascript
{
  errcode: 0,
  key: "/sdcard/xbak/6406.txt" //Save path on the XiakeCloud network disk
}
```
> The path is relative to the path of the XiakeCloud network disk, the string encoding is utf8.

## readString

* **Method:** `xky.readString(key)`
* **Description:** Read a text file from the XiakeCloud network disk
* **Arguments:**

Arguments | Type | Description
------------ | ------------- | -------------
key| string| Path of the file in the XiakeCloud network disk

Usage：
```javascript
await xky.readString("wedata/6406.txt");
```
Will result in：
```javascript
{
  errcode: 0,
  value: "I am a string" // Text content
}
```
>  The path is relative to the path of the XiakeCloud network disk, the string encoding is utf8.

## delString

* **Method:** `xky.delString(key)`
* **Description:** Delete a text file from the XiakeCloud network disk,
* **Arguments:**

Arguments | Type | Description
------------ | ------------- | -------------
key| string| Path of the file in the XiakeCloud network disk

Usage：
```javascript
await xky.delString("wedata/6406.txt");
```
Will result in：
```javascript
{
  errcode: 0,
  msg:"删除成功"
}
```
>  The path is relative to the path of the XiakeCloud network disk, the string encoding is utf8.

## lockScreen

* **Method:** `xky.lockScreen()`
* **Description:** Lock screen.

Usage：
```javascript
await xky.lockScreen();
```
Will result in：
```javascript
{errcode: 0, msg: "锁屏完成"}
```

## getContacts

* **Method:** `xky.getContacts()`
* **Description:** Read the phone's contacts list.

Usage：
```javascript
await xky.getContacts();
```
Will result in：
```javascript
{errcode: 0, msg: "获取到1个联系人", contracts: Array(1)}
```

## insertContacts

* **Method:** `xky.insertContacts(contracts)`
* **Description:** Add contacts in your phone
* **Arguments:**

Arguments | Type | Description
------------ | ------------- | -------------
contracts| Array | The list of contacts to be added, Each item is a json.

Usage：
```javascript
await xky.insertContacts([
    { name: "aaa", number: "17877777777" },
    { name: "bbb", number: "18888888888" }
]);
```
Will result in：
```javascript
{done: 2, errcode: 0, msg: "成功添加2个联系人"}
```

## clearContacts

* **Method:** `xky.clearContacts()`
* **Description:** Clear all contacts in your phone.

Usage：
```javascript
await xky.clearContacts();
```
Will result in：
```javascript
{errcode: 0, msg: "清空联系人完毕"}
```

## insertImage

* **Method:** `xky.insertImage(path)`
* **Description:** Add image to system gallery
* **Arguments:**

Arguments | Type | Description
------------ | ------------- | -------------
path| string| The path of pictures and videos on the phone.

Usage：
```javascript
  let aaa = await xky.insertImage("/sdcard/aaa.jpg");
```
Will result in：
```javascript
{errcode: 0, msg: "刷新相册完成"}
```