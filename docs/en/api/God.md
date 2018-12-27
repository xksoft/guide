# God Framework Usage

**God Framework** is a framework modified by the Xposed framework of Nanning Xiake Software. It has all the features of the Xposed framework and can be avoided by the APP. Use the God framework to modify the parameters of any method in the Java layer, return values and modify class fields. Use the God framework to refer to this tutorial.

## Configuration project

1.Open **Android Studio** and create a project
2. First download [god-api.jar] (https://guide.xky.com/god-api.jar) and then put **god-api.jar** in the **libs** directory.
3. Introduce **god-api.jar** to the project with **compileOnly**
4. Create a class and let it implement the **IXposedHookLoadPackage** interface, for example:

```java
public class Hook  implements IXposedHookLoadPackage{

    @Override
    public void handleLoadPackage(XC_LoadPackage.LoadPackageParam loadPackageParam)
        throws Throwable {

    }
}
```
5. Create a file called **xposed_init** in the project directory and write the full class name of the class that implements the **IXposedHookLoadPackage** interface, for example: `com.xky.god.Hook`
6. Add under the **application** tab of the **AndroidManifest.xml** file:
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
**xposedmodule** specifies whether an app is a **God module**; **xposeddescription** specifies a description of the module, this description will be displayed in **God Installer**; **xposedminversion** is our ** God module** The version of the smallest God framework supported.

## Hook method

The **handleLoadPackage** method will be called when the APK is loaded, and our **Hook** method will be done in this method. Call the **findAndHookMethod** method to **Hook** a method. In the following example, our **Hook God Installer** launch method causes **God Installer** to pop up a **Toast** when it opens:

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
In the above example, the **findAndHookMethod** method will **Hook the WelcomeActivity** class's **onCreate** method. The third parameter of the **findAndHookMethod** method is **Bundle.class** , which indicates that our **Hook** **onCreate** method has a parameter, the type of this parameter is **Bundle**( If you want the Hook method to have multiple parameters, put its parameter type ** in order **.

**findAndHookMethod** The last parameter is the callback of the method. We can do something before the method is **Hook** and after **Hook**:

1. **beforeHookedMethod** will be called before being called by the **Hook** method, which can be used to modify the parameters and return values of the method being **Hook**

2. **afterHookedMethod** will be called after the **Hook** method is called to get the parameters and return values of the method being **Hook**

3. The **compareTo** method is the priority of the God Framework callback method, returning the default value of `XCallback.PRIORITY_DEFAULT`

## Hook field
**The XposedHelpers** class under the set method name can be Hook class various fields.

If you want to **Hook the static field of the android.os.Build** class **MODEL** and set the value of this field to **Hooked!**, you can call it like this:

```
XposedHelpers.setStaticObjectField(Build.class,"MODEL","Hooked!");
```

## Differences with Xposed usage

In the God framework, the XposedBridge class is replaced by the GodBridge class, such as printing a log with Godbridge:

```java
GodBridge.log("I'm God.");
```


