# God框架的用法

**God框架**是南宁侠客软件经Xposed框架修改而来的框架，拥有Xposed框架的所有功能，并且可以避免被APP检测出来。用God框架可以修改Java层任意方法的参数，返回值和修改类字段等。使用God框架，可以参考本教程。

## 配置工程

1. 打开 **Android Studio** 并创建一个工程
2. 先下载 [god-api.jar](https://guide.xky.com/god-api.jar)，然后将 **god-api.jar** 放入 **libs** 目录中
3. 以 **compileOnly** 的方式将 **god-api.jar** 引入工程
4. 创建一个类并让它实现 **IXposedHookLoadPackage** 接口，例如：

```java
public class Hook  implements IXposedHookLoadPackage{

    @Override
    public void handleLoadPackage(XC_LoadPackage.LoadPackageParam loadPackageParam)
        throws Throwable {

    }
}
```
5. 在工程的目录下创建一个名为 **xposed_init** 的文件,在里面写入实现 **IXposedHookLoadPackage** 接口的类的完整类名，例如:`com.xky.god.Hook`
6. 在 **AndroidManifest.xml** 文件的 **application** 标签下添加：
```xml
<meta-data
    android:name="xposedmodule"
    android:value="true"/>

<meta-data
    android:name="xposeddescription"
    android:value="Hook测试"/>

<meta-data
    android:name="xposedminversion"
    android:value="89"/>
```
**xposedmodule** 指定一个APP是否是 **God模块**； **xposeddescription** 指定模块的描述，这个描述将显示在 **God Installer** 里; **xposedminversion** 是我们的 **God模块** 支持的最小的God框架的版本。

## Hook方法

**handleLoadPackage** 方法将在APK被加载时调用，我们 **Hook** 方法要在这个方法里进行。调用 **findAndHookMethod** 方法来 **Hook** 一个方法。下面的例子中，我们 **Hook God Installer** 的启动方法，使 **God Installer** 在打开的时候弹出一个 **Toast**：
```java
public void handleLoadPackage(final XC_LoadPackage.LoadPackageParam loadPackageParam)
    throws Throwable {
    XposedHelpers.findAndHookMethod("com.android.god.installer.WelcomeActivity",loadPackageParam.classLoader,"onCreate",Bundle.class,new XC_MethodHook(){

        @Override
        public int compareTo(@NonNull XCallback o) {
            return XCallback.PRIORITY_DEFAULT;
        }

        @Override
        protected void afterHookedMethod(MethodHookParam param) throws Throwable {
            Activity thiz=(Activity) param.thisObject;
            Toast.makeText(thiz,"God Installer已经被Hook!",Toast.LENGTH_SHORT).show();
        }
    });
}
```
在上面的例子中， **findAndHookMethod** 方法将 **Hook WelcomeActivity** 类的 **onCreate** 方法。 **findAndHookMethod** 方法的第3个参数是 **Bundle.class** ，表明我们 **Hook** 的 **onCreate** 方法它有一个参数，这个参数的类型是 **Bundle**(如果要Hook的方法有多个参数，把它的参数类型**依次**写上)。

**findAndHookMethod** 最后一个参数是方法的回调，我们可以在方法被 **Hook** 前和 **Hook** 后做一些事情：

1. **beforeHookedMethod** 将在被 **Hook** 的方法被调用之前调用，可用于修改被 **Hook** 的方法的参数和返回值

2. **afterHookedMethod** 将在被 **Hook** 的方法被调用之后调用，可获取被 **Hook** 的方法的参数和返回值

3. **compareTo** 方法是God框架调用回调方法的优先级，返回默认值`XCallback.PRIORITY_DEFAULT`即可

## Hook字段
**XposedHelpers** 类下的以set开头方法名可以Hook类的各种字段。

假如要 **Hook android.os.Build** 类的静态字段 **MODEL**，并将该字段的值设置为 **Hooked!**，可以这样调用：

```
XposedHelpers.setStaticObjectField(Build.class,"MODEL","Hooked!");
```

## 与Xposed用法上的差异

在God框架中，XposedBridge类被GodBridge类取代，例如用GodBridge打印一条日志：

```java
GodBridge.log("I'm God.");
```


