---
pageClass: third-page
---
# 第三方模块接口

## 开发可供侠客云调用的第三方接口

侠客云默认系统只提供非root权限下的操作，有一些特殊功能可能需要root权限或者xposed框架，这种情况下可以按照以下规范开放api给侠客云调用

只需要在自己的apk或者xposed模块中实现实现一下代码即可跟侠客云交互
```java
    private final BroadcastReceiver mReceiver = new BroadcastReceiver() {
        @Override
        public void onReceive(Context context, Intent intent) {
            String action = intent.getStringExtra("action");
            String json = intent.getStringExtra("json");
            setResultCode(666);//666是成功标记，必填，否则侠客云不作处理
            JSONObject jsonObject = new JSONObject();
            String base64 = "";
            try {
                if (null != json) {
                    jsonObject = new JSONObject(new String(Base64.decode(json.getBytes(), Base64.DEFAULT), "UTF-8"));//将侠客云传过来的字符串解实例成java的json对象
                }


         
                //处理动作
                //action是动作名，jsonObject是传参（可选）
                //这里根据动作名自行实现需要的功能


                //重新创建jsonObject，用于反馈结果 必须包含errcode字段，其他字段按需填充
                jsonObject = new JSONObject();
                jsonObject.put("errcode", 0);
                jsonObject.put("msg", action + "调用成功");
       

                base64 = new String(Base64.encode(jsonObject.toString().getBytes("UTF-8"), Base64.DEFAULT)).replace("\r", "").replace("\n", "");//将json对象编码成base64
            } catch (Throwable e) {
                base64 = "eyJlcnJjb2RlIjowLCJtc2ciOiJiYXNlNjQgZXJyb3IifQ==";//返回预编码好的错误信息，无需修改
            }
            //设置反馈结果
            setResultData(base64);
        }


    };
  ```
以上代码为广播接收器功能代码，你还需要将他注册到app中才能使用
  ```java
      protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        //注册广播接收器
        //注意：registerReceiver必须获取到Content对象才能注册，如果在xposed中，请在hook onCreate或者onResume 事件中注册
        registerReceiver(mReceiver, new IntentFilter(getPackageName()));

        setContentView(R.layout.activity_main);
    }
```
侠客云模块中调用方法可参考[callApi调用第三方模块接口](/document/#callapi)。
