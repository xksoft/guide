---
pageClass: api-page
---

# 侠客云API
所有api均属于xky这个对象下，api文档随时增删，请留意查看。

## adbCommand    
* **用法：** `xky.adbCommand(command)`
* **说明：** 执行adb指令。
* **参数：** 

参数 | 值类型 | 说明
------------ | ------------- | -------------
command| string | adb指令

例子：
```javascript
// adb指令可以是任意adb命令例如 adb shell ls
await xky.adbCommand('shell ls');
```
返回结果：
```javascript
{errcode: 0, result: "结果"}
```

## toast

* **用法：** `xky.toast(toast)`
* **说明：** 在手机上的弹出的提示信息
* **参数：** 

参数 | 值类型 | 说明
------------ | ------------- | -------------
toast| string | 提示的内容
style| int | 提示风格_可选项（可选1 2 3 4 5 6 ）

例子：
```javascript
await xky.toast('我是提示');
await xky.toast('我是提示',1);
```
返回结果：
```javascript
{msg: "toast by http", errcode: 0}
```

## sleep
* **用法：** `xky.sleep(millisecond)`
* **说明：** 等待指定时间之后再执行下个指令，此命令必须加await，否则就没什么作用了，会一跳而过。
* **参数：** 

参数 | 值类型 | 说明
------------ | ------------- | -------------
millisecond| int | 冷却时间，单位是毫秒，1秒=1000毫秒
例子：
```javascript
await xky.sleep(1000);//冷却1秒
```
返回结果：
```javascript
{errcode: 0, msg: "冷却完毕"}
```

## log
* **用法：** `xky.log(log)`
* **说明：** 在控制台打印日志
* **参数：** 

参数 | 值类型 | 说明
------------ | ------------- | -------------
log| object | 日志内容，可以是任意对象
例子：
```javascript
await xky.log('我是日志');
```
返回结果：
```javascript
{errcode: 0, msg: "日志发送完毕"}
```

## wakeup

* **用法：** `xky.wakeup()`
* **说明：** 唤醒设备
* **参数：** 无
例子：
```javascript
await xky.wakeup();
```
返回结果：
```javascript
{errcode: 0, msg: "done"}
```

## click

* **用法：** `xky.click(x,y)`
* **说明：** 点击某个位置，x y均为百分比取值范围是0-1，可配合xiakeuispy工具获取坐标点。
* **参数：** 

参数 | 值类型 | 说明
------------ | ------------- | -------------
x| double | x坐标
y| double | y坐标

例子：
```javascript
await xky.click(0.5,0.5);//点击屏幕中间位置
```
返回结果：
```javascript
{msg: "点击完毕", errcode: 0}
```

## mousedown
* **用法：** `xky.mousedown(x,y)`
* **说明：** 按下某个位置，x y均为百分比取值范围是0-1，可配合xiakeuispy工具获取坐标点。
* **参数：** 

参数 | 值类型 | 说明
------------ | ------------- | -------------
x| double | x坐标
y| double | y坐标

例子：
```javascript
await xky.mousedown(0.5,0.5);//按下屏幕中间位置
```
返回结果：
```javascript
{msg: "鼠标按下", errcode: 0}
```

## mouseup
* **用法：** `xky.mouseup(x,y)`
* **说明：** 先执行按下坐标为(x1,y1)的位置的方法，再执行释放坐标为(x2,y2)的位置，x y均为百分比取值范围是0-1，可配合xiakeuispy工具获取坐标点。
* **参数：** 

参数 | 值类型 | 说明
------------ | ------------- | -------------
x| double | x坐标
y| double | y坐标

例子：
```javascript
await xky.mousedown(0.5,0.5);//按下屏幕中间位置
await xky.mouseup(0.5,0.5);//从这个位置释放屏幕中间位置
```
返回结果：
```javascript
{msg: "鼠标释放", errcode: 0}
```

## mousedrag

* **用法：** `xky.mousedrag(x,y)`
* **说明：** 先执行按下坐标为(x1,y1)的位置的方法，再执行移动坐标为(x2,y2)的位置，x y均为百分比取值范围是0-1，可配合xiakeuispy工具获取坐标点。
* **参数：** 

参数 | 值类型 | 说明
------------ | ------------- | -------------
x| double | x坐标
y| double | y坐标

例子：
```javascript
await xky.mousedown(0.1,0.1);//按下这个位置
await xky.mousedrag(0.5,0.5);//移动到这个位置
```
返回结果：
```javascript
{msg: "鼠标移动", errcode: 0}
```

## wheel

* **用法：** `xky.wheel(x, y, updown, leftright)`
* **说明：** 从坐标为(x,y)的位置开始滚动界面，x y均为百分比取值范围是0-1，可配合xiakeuispy工具获取坐标点。
* **参数：** 

参数 | 值类型 | 说明
------------ | ------------- | -------------
x| double | x坐标
y| double | y坐标
updown| int | 垂直滚动量 可选，默认值0
leftright| int |水平滚动量 可选，默认值0

例子：
```javascript
await xky.wheel(0.5,0.5,-2);//往下滚动-2个位置
```
返回结果：
```javascript
{msg: "鼠标滚动", errcode: 0}
```


## pressKey

* **用法：** `xky.pressKey(key)`
* **说明：** 按下某个按键，更多请参考[安卓按键对应keycode](/document/Keycode.html)。
* **参数：** 

参数 | 值类型 | 说明
------------ | ------------- | -------------
key| int | 按键代码 [安卓按键代码参考](/document/Keycode.html)

例子：
```javascript
await xky.pressKey(3);//按下home键
```
返回结果：
```javascript
{msg: "按键操作成功", errcode: 0}
```


## setClipboardText

* **用法：** `xky.setClipboardText(value)`
* **说明：** 设置剪贴板内容
* **参数：** 

参数 | 值类型 | 说明
------------ | ------------- | -------------
value| string| 要设置的剪贴板内容

例子:
```javascript
await xky.setClipboardText('你好，侠客云！');//把剪贴板内容设置为 你好，侠客云！
```
返回结果：
```javascript
{msg: "剪贴板赋值完成", errcode: 0}
```

## getClipboardText

* **用法：** `xky.getClipboardText()`
* **说明：** 读取剪贴板内容
* **参数：** 无

例子：
```javascript
let cb=await xky.getClipboardText();
xky.log(cb)
```
返回结果：
```javascript
{msg: "剪贴板读值完成", errcode: 0, value: "3"}
```

## copy

* **用法：** `xky.copy()`
* **说明：** 复制，将选定内容复制到剪贴板，类似Windows下的ctrl+c。
* **参数：** 无

例子：
```javascript
await xky.copy();
```
返回结果：
```javascript
{msg: "按键操作成功", errcode: 0}
```

## cut

* **用法：** `xky.cut()`
* **说明：** 剪切，将选定内容剪切到剪贴板，类似Windows下的ctrl+x。
* **参数：** 

例子：
```javascript
await xky.cut();
```
返回结果：
```javascript
{msg: "按键操作成功", errcode: 0}
```

## paste

* **用法：** `xky.paste()`
* **说明：** 粘贴，剪贴板中的内容粘贴出来，类似Windows下的ctrl+v。
* **参数：** 无

例子：
```javascript
await xky.paste();
```
返回结果：
```javascript
{msg: "按键操作成功", errcode: 0}
```

## setClientClipboardText

* **用法：** `xky.setClientClipboardText(value)`
* **说明：** 设置客户端剪贴板
* **参数：** 

参数 | 值类型 | 说明
------------ | ------------- | -------------
value| string| 剪贴板内容

例子：
```javascript
await xky.setClientClipboardText('剪贴板内容');
```
返回结果：
```javascript
{errcode: 0, result: "发送完毕"}
```

## findUiObjects

* **用法：** `xky.findUiObjects(name, option)`
* **说明：** 查找控件元素，控件元素id可配合xiakeyunuispy工具获取。
* **参数：**

参数 | 值类型 | 说明
------------ | ------------- | -------------
name| string| 查找条件，可以是字符串或者正则表达式
option| json | 可选参数：<br /> `regex` &emsp;类型：`bool` &emsp;用途：是否启用正则模式； <br /> `timeout`  类型：`number` 用途：动作超时时间。

例子：
```javascript
//查找文字为 微信 的控件
await xky.findUiObjects('微信',{regex:false,timeout:1000});
```
返回结果：
```javascript
{uiObjects: Array(0), errcode: 0}
```


## findAndClick

* **用法：** `xky.findAndClick(name, option)`
* **说明：** 查找并点击一个元素，控件元素id可配合xiakeyunuispy工具获取。
* **参数：** 

参数 | 值类型 | 说明
------------ | ------------- | -------------
name| string| 查找条件，可以是字符串或者正则表达式
option| json | 可选参数：<br /> `regex` &emsp;类型：`bool` &emsp;用途：是否启用正则模式； <br /> `timeout`  类型：`number` 用途：动作超时时间; <br /> `index` &emsp;类型：`number` 用途：点击第几个元素。


例子：
```javascript
//查找文字为 微信 的控件 并点击
await xky.findAndClick('微信');
//正则方式查找，这里是所有包含 微 的控件 并点击
await xky.findAndClick('微',{regex:true});
//查找文字为 微信 的控件 并点击，并点击第2个控件（计算机数数从0开始）
await xky.findAndClick('微信',{regex:false,index:1});
```
返回结果：
```javascript
{msg: "点击成功", errcode: 0}
```



## findAndInput

* **用法：** `xky.findAndInput(name, value, option)`
* **说明：** 查找某个控件并输入指定文本，控件元素id可配合xiakeyunuispy工具获取。
* **参数：** 

参数 | 值类型 | 说明
------------ | ------------- | -------------
name| string| 查找条件，可以是字符串或者正则表达式
value| string| 要输入的内容
option| json |可选参数：<br /> `regex` &emsp;类型：`bool` &emsp;用途：是否启用正则模式； <br /> `timeout`  类型：`number` 用途：动作超时时间; <br /> `index` &emsp;类型：`number` 用途：点击第几个元素。


例子：
```javascript
//查找控件并输入 你好，侠客云！
await xky.findAndInput('com.android.messaging:id/recipient_text_view','你好，侠客云！');
```
返回结果：
```javascript
{msg: "赋值成功", errcode: 0}
```


## restartApp

* **用法：**  `xky.restartApp(pkname)`
* **说明：**  重新启动APP，没启动则启动，已启动了就重启。
* **参数：** 

参数 | 值类型 | 说明
------------ | ------------- | -------------
pkname| string| app包名

例子：
```javascript
await xky.restartApp('com.tencent.mm');//启动微信
```
返回结果：
```javascript
{msg: "指令完成", errcode: 0}
```

## killApp

* **用法：** `xky.killApp(pkname)`
* **说明：** 结束在运行的APP
* **参数：** 

参数 | 值类型 | 说明
------------ | ------------- | -------------
pkname| string| app包名

例子：
```javascript
await xky.killApp('com.tencent.mm');//结束在运行的微信
```
返回结果：
```javascript
{errcode: 0, result: ""}
```

## clearApp

* **用法：** `xky.clearApp(pkname)`
* **说明：** 清空APP所有数据，这样就相当于重装了这个app，所有数据将会都清空，且不可恢复。
* **参数：** 

参数 | 值类型 | 说明
------------ | ------------- | -------------
pkname| string| app包名

例子：
```javascript
await xky.clearApp('com.tencent.mm');//清空微信所有数据
```
返回结果：
```javascript
{errcode: 0, result: ""}
```

## callApi

* **用法：** `xky.callApi(pkname,action,json)`
* **说明：** 调用第三方接口Api，更多请参考[调用第三方接口Api开发文档](/document/Third.html)。
* **参数：** 

参数 | 值类型 | 说明
------------ | ------------- | -------------
pkname| string| 第三方app包名或自定义字符串
action| string| 动作名
json| json| json格式参数（可选）

例子：
```javascript
await xky.callApi('com.tencent.mm','sendTextMsg',{wxid:'wxid_xxx',msg:'xxxxxx'});
```
返回结果：
```javascript
{errcode: 0, result: "发送成功"}
```

## input

* **用法：** `xky.input(text)`
* **说明：** 通过输入法输入文本，能在任意有焦点的地方输入文本。
* **参数：** 

参数 | 值类型 | 说明
------------ | ------------- | -------------
text| string| 输入的内容

例子：
```javascript
await xky.input('无敌最寂寞');
```
返回结果：
```javascript
{errcode: 0, msg: "输入操作完毕"}
```

## showInputMethod

* **用法：** `xky.showInputMethod()`
* **说明：** 打开输入法选择界面
* **参数：** 无

例子：
```javascript
await xky.showInputMethod(});
```
返回结果：
```javascript
{errcode: 0}
```

## setInputMethod

* **用法：** `xky.setInputMethod()`
* **说明：** 设置侠客云X输入法
* **参数：** 无

例子：
```javascript
await xky.setInputMethod();
```
返回结果：
```javascript
{errcode: 0}
```
## showNotification

* **用法：** `xky.showNotification(title,message,level)`
* **说明：** 弹出客户端提示信息
* **参数：** 

参数 | 值类型 | 说明
------------ | ------------- | -------------
title| string| 弹出框的标题
message| string| 弹出框的内容
level| string| 弹出框格式 可选 succuss error warning info

例子：
```javascript
await xky.showNotification('成功','恭喜，快照成功','success');
```
返回结果：
```javascript
{errcode: 0, result: "client_notification发送完毕"}
```

## swipe

* **用法：** `xky.swipe(startx,starty,endx,endy,steps)`
* **说明：** 从(startx,starty)的位置滑动steps次到达(endx,endy)的位置，x y均为百分比取值范围是0-1，可配合xiakeuispy工具获取坐标点。
* **参数：** 

参数 | 值类型 | 说明
------------ | ------------- | -------------
startx| double| 开始x坐标
starty| double| 开始y坐标
endx| double| 结束x坐标
endy| double| 结束y坐标
steps| int| 步骤数量 可选 （默认10） 这个值是决定这个滑动的速度，越大越慢

例子:
```javascript
await await xky.swipe(0.6,0.8,0.6,0.2,10);//模拟抖音翻下一个视频（从下往上滑）
```
返回结果：
```javascript
{errcode: 0, result: "滑动完成"}
```

## installApkFromUrl

* **用法：** `xky.installApkFromUrl(url,newdown)`
* **说明：** 从url地址安装apk
* **参数：** 

参数 | 值类型 | 说明
------------ | ------------- | -------------
url| string| apk的url地址
newdown| bool| 可选 默认否 表示是否全新下载（否则如果有缓存文件，则直接用缓存文件安装）。

例子：
```javascript
//安装微信667
await xky.installApkFromUrl('http://dldir1.qq.com/weixin/android/weixin667android1320.apk');
```
返回结果：
```javascript
{errcode: 0, result: "apk安装完成"}
```

## sendEditorAction

* **用法：** `xky.sendEditorAction(code)`
* **说明：** 参考[安卓输入法动作代码](/document/Input.html)，执行输入法动作指令。
* **参数：** 

参数 | 值类型 | 说明
------------ | ------------- | -------------
code| int| 动作编号 [输入法动作参考](/document/Input.html)

例子：
```javascript
await xky.sendEditorAction(4);//发送
```
返回结果：
```javascript
{errcode: 0, msg: "输入法指令输入完毕"}
```

## createHardware

* **用法：** `xky.createHardware(model)`
* **说明：** 创建一个全息硬件信息，仅侠客云矿机可用。
* **参数：** 

参数 | 值类型 | 说明
------------ | ------------- | -------------
model| string| 可选条件，值为需要指定的机型，例如 mi5 nexus6等（具体参考支持列表);

例子：
```javascript
await xky.createHardware('nexus6');//生成一个nexus6的硬件全息信息
```
返回结果：
```javascript
{
  errcode: 0,
  model: "Nexus 6",
  key: "c009047c" //返回值 key 请自行记录，这个表示当前全息信息的唯一值（不变）
}
```


## getHardwareKey

* **用法：** `xky.getHardwareKey()`
* **说明：** 获取当前设备的硬件全息KEY，仅侠客云矿机可用。
* **参数：** 

参数 | 值类型 | 说明
------------ | ------------- | -------------
key| string| 这个key为createHardware方法返回的key

例子：
```javascript
await xky.getHardwareKey();
```
返回结果：
```javascript
{
  errcode: 0,
  key: "c009047c" //返回值 key 请自行记录，这个表示当前全息信息的唯一值（不变）
}
```


## restoreHardware

* **用法：** `xky.restoreHardware(key)`
* **说明：** 还原一个全息硬件信息，仅侠客云矿机可用。
* **参数：** 

参数 | 值类型 | 说明
------------ | ------------- | -------------
key| string| 这个key为createHardware方法返回的key

例子：
```javascript
await xky.restoreHardware('c009047c');//还原key=c009047c的硬件全息信息
```
返回结果：
```javascript
{
  errcode: 0,
  model: "Nexus 6",
  key: "c009047c" //返回值 key 请自行记录，这个表示当前全息信息的唯一值（不变）
}
```

## createAppSnapshot

* **用法：** `xky.createAppSnapshot(packName,name)`
* **说明：**  创建一个APP的全息快照插座，仅侠客云矿机可用。
* **参数：** 

参数 | 值类型 | 说明
------------ | ------------- | -------------
packName| string| app包名
name| string| 快照名称


例子：
```javascript
await xky.createAppSnapshot( "com.tencent.mm","01");
```
返回结果：
```javascript
{errcode: 0, msg: "快照创建成功", path: "01"}
```
>注意，每次创建新的快照插座，都会清空当前app所有数据，每次创建都会生成一个新的硬件全息信息

## setAppSnapshot

* **用法：** `xky.setAppSnapshot(packName,name)`
* **说明：**  切换一个APP的全息快照插座，仅侠客云矿机可用。
* **参数：** 

参数 | 值类型 | 说明
------------ | ------------- | -------------
packName| string| app包名
name| string| 快照名称


例子：
```javascript
await xky.setAppSnapshot( "com.tencent.mm","01");
```
返回结果：
```javascript
{errcode: 0, msg: "快照切换成功", path: "02"}
```

## getCurrentAppSnapshot

* **用法：** `xky.getCurrentAppSnapshot(packName)`
* **说明：**  获取当前APP的全息快照插座信息，仅侠客云矿机可用。
* **参数：** 

参数 | 值类型 | 说明
------------ | ------------- | -------------
packName| string| app包名


例子：
```javascript
await xky.getCurrentAppSnapshot( "com.tencent.mm");
```
返回结果：
```javascript
{errcode: 0, name: "02"}
```

## getAppSnapshotList
   
   * **用法：** `xky.getAppSnapshotList(packName)`
   * **说明：**  获取当前APP的全息快照插座列表信息，仅侠客云矿机可用。
   * **参数：** 
   
   参数 | 值类型 | 说明
   ------------ | ------------- | -------------
   packName| string| app包名
   
   
   例子：
   ```javascript
   await xky.getAppSnapshotList( "com.tencent.mm");
   ```
   返回结果：
   ```javascript
   {errcode: 0, list: Array(3)}
   ```

## delAppSnapshot

* **用法：** `xky.delAppSnapshot(packName,name)`
* **说明：**  删除指定的快照，仅侠客云矿机可用。
* **参数：** 

参数 | 值类型 | 说明
------------ | ------------- | -------------
packName| string| app包名
name| string| 快照名 >当name=all时，则删除所有快照


例子：
```javascript
await xky.delAppSnapshot("com.tencent.mm","01");//删除01
await xky.delAppSnapshot("com.tencent.mm","all");//删除所有
```
返回结果：
```javascript
{ errcode: 0, msg: "快照删除成功"}
```

## uploadFile

* **用法：** `xky.uploadFile(filepath,savepath)`
* **说明：** 上传一个文件到云端网盘
* **参数：** 
参数 | 值类型 | 说明
------------ | ------------- | -------------
filepath| string| 文件在手机上的路径(如果filepath是一个base64字符串，则直接解析成Buffer上传)
savepath| string| 文件在网盘里的路径

例子：
```javascript
await xky.uploadFile("/sdcard/xbak/6406.tar", "wedata/6406.tar");
```
返回结果：
```javascript
{
  errcode: 0,
  name: "files/anj68vkk9tqmmxb38myg/wedata/6406.tar",  // 网盘路径
  url: "https://static.xky.com/files/anj68vkk9tqmmxb38myg/wedata/6406.tar" //下载地址
}
```

## downloadFile

* **用法：** `xky.downloadFile(filepath,savepath)`
* **说明：** 从侠客云端网盘下载一个文件
* **参数：** 

参数 | 值类型 | 说明
------------ | ------------- | -------------
filepath| string| 网盘上的路径
savepath| string| 手机上的路径

例子：
```javascript
await xky.downloadFile("wedata/6406.tar", "/sdcard/xbak/6406.tar");
```
返回结果：
```javascript
{
  errcode: 0,
  name: "/sdcard/xbak/6406.tar" //保存路径
}
```

## writeString

* **用法：** `xky.writeString(filepath,content)`
* **说明：** 将字符串上传到云端网盘
* **参数：** 

参数 | 值类型 | 说明
------------ | ------------- | -------------
filepath| string| 网盘上的路径
content| string| 文本内容

例子：
```javascript
await xky.writeString("wedata/6406.txt", "我是一个字符串");
```
返回结果：
```javascript
{
  errcode: 0,
  name: "/sdcard/xbak/6406.txt" //保存路径
}
```
> 路径是相对于云端网盘的路径，字符串编码都是utf8

## readString

* **用法：** `xky.readString(filepath)`
* **说明：** 从侠客云端网盘读取一个字符串
* **参数：** 

参数 | 值类型 | 说明
------------ | ------------- | -------------
filepath| string| 网盘上的路径

例子：
```javascript
await xky.readString("wedata/6406.txt");
```
返回结果：
```javascript
{
  errcode: 0,
  value: "我是一个字符串" //保存路径
}
```
> 路径是相对于云端网盘的路径，字符串编码都是utf8

## delString

* **用法：** `xky.delString(filepath)`
* **说明：** 从侠客云端网盘删除一个字符串
* **参数：** 

参数 | 值类型 | 说明
------------ | ------------- | -------------
filepath| string| 网盘上的路径

例子：
```javascript
await xky.delString("wedata/6406.txt");
```
返回结果：
```javascript
{
  errcode: 0,
  msg:"删除成功"
}
```
> 路径是相对于云端网盘的路径，字符串编码都是utf8

## lockScreen

* **用法：** `xky.lockScreen()`
* **说明：** 锁屏
* **参数：** 无

例子：
```javascript
await xky.lockScreen();
```
返回结果：
```javascript
{errcode: 0, msg: "锁屏完成"}
```

## getContacts

* **用法：** `xky.getContacts()`
* **说明：** 读取联系人
* **参数：** 无

例子：
```javascript
await xky.getContacts();
```
返回结果：
```javascript
{errcode: 0, msg: "获取到1个联系人", contracts: Array(1)}
```

## insertContacts

* **用法：** `xky.insertContacts(contracts)`
* **说明：** 添加联系人
* **参数：** 

参数 | 值类型 | 说明
------------ | ------------- | -------------
contracts| JSON数组| 要添加的联系人列表，格式是json数组

例子：
```javascript
await xky.insertContacts([
    { name: "aaa", number: "17877777777" },
    { name: "bbb", number: "18888888888" }
]);
```
返回结果：
```javascript
{done: 2, errcode: 0, msg: "成功添加2个联系人"}
```

## clearContacts

* **用法：** `xky.clearContacts()`
* **说明：** 清空所有联系人
* **参数：** 无

例子：
```javascript
await xky.clearContacts();
```
返回结果：
```javascript
{errcode: 0, msg: "清空联系人完毕"}
```

## insertImage

* **用法：** `xky.insertImage(path)`
* **说明：** 添加图片到系统图库
* **参数：** 

参数 | 值类型 | 说明
------------ | ------------- | -------------
path| string| 图片、视频在手机上的路径

例子：
```javascript
  let aaa = await xky.insertImage("/sdcard/aaa.jpg");
```
返回结果：
```javascript
{errcode: 0, msg: "刷新相册完成"}
```