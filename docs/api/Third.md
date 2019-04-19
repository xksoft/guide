---
pageClass: third-page
---
# 第三方模块接口

## 开发可供侠客云调用的第三方接口

侠客云默认系统只提供非root权限下的操作，有一些特殊功能可能需要root权限或者xposed框架，这种情况下可以按照以下规范开放api给侠客云调用

只需要在自己的apk或者xposed模块中实现实现以下代码即可跟侠客云交互
```java
    //获取当前设备sn号
    public static String getSn() throws IOException {
        File file = new File("/data/local/tmp/sn");
        InputStreamReader read = new InputStreamReader(new FileInputStream(file));
        BufferedReader bufferedReader = new BufferedReader(read);
        String lineTxt = bufferedReader.readLine();
        read.close();
        return lineTxt;
    }

    //socketio对象
    private Socket SocketIO;

    //连接事件服务器
    private void connectEventServer(final String name) throws IOException {
        if (SocketIO != null)
            return;
        final String sn = getSn();
        IO.Options opts = new IO.Options();
        opts.forceNew = true;
        opts.path = "/xky";
        opts.query = "action=android_event&sn=" + sn + "&name=" + name;
        opts.reconnection = true;
        opts.multiplex = true;
        opts.reconnectionDelay = 3 * 1000;
        opts.reconnectionAttempts = 99999999;
        opts.transports = new String[]{"websocket"};
        try {
            SocketIO = IO.socket("http://127.0.0.1:8888/", opts);
        } catch (URISyntaxException e) {
            e.printStackTrace();
        }
        SocketIO.on(com.github.nkzawa.socketio.client.Socket.EVENT_CONNECT, new Emitter.Listener() {
            @Override
            public void call(Object... args) {
                log("连接成功 当前sn：" + sn + " 会话：" + name);
            }
        }).on(com.github.nkzawa.socketio.client.Socket.EVENT_DISCONNECT, new Emitter.Listener() {
            @Override
            public void call(Object... args) {
                log("断开了");
            }
        }).on(com.github.nkzawa.socketio.client.Socket.EVENT_CONNECT_ERROR, new Emitter.Listener() {
            @Override
            public void call(Object... args) {
                log("连接出错" + args[0].toString());
            }
        }).on("event", new Emitter.Listener() {
            @Override
            public void call(Object... args) {
                if (args.length == 2) {
                    JSONObject json = (org.json.JSONObject) args[0];
                    Ack ack = (Ack) args[1];
                    String type = json.optString("type", "none");
                    JSONObject result = new JSONObject();
                    log("收到指令:" + type);
                    switch (type) {
                        //根据不同的type实现你不同的接口
                        case "hello": {
                            try {
                                result.put("msg", "world");
                                result.put("errcode", 0);
                            } catch (JSONException e) {
                                e.printStackTrace();
                            }
                            ack.call(result);
                            break;
                        }
                        default:
                            try {
                                result.put("msg", "没有找到这个动作指令");
                                result.put("errcode", 1);
                            } catch (JSONException e) {
                                e.printStackTrace();
                            }
                            ack.call(result);
                            break;
                    }
                }
            }
        });
        SocketIO.connect();
    }

    //日志数组
    private List<String> logs = new ArrayList<>();

    //文本日志
    private void log(String log) {
        logs.add(log);
        if (logs.size() > 10) {
            logs.remove(0);
        }
        final StringBuilder sb = new StringBuilder();
        for (int i = 0; i < logs.size(); i++) {
            sb.append(logs.get(i));
            sb.append("\n");
        }
        runOnUiThread(new Runnable() {
            public void run() {
                TextView usernameTxt = findViewById(R.id.mytxt);
                usernameTxt.setText(sb.toString());
            }
        });
        Log.i("mylog", log);
    }

    //连接 (测试按钮)
    public void btn_click(View view) {
        try {
            connectEventServer("test01");
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    //发送广播 (测试按钮)
    public void btn_click2(View view) {
        if (SocketIO.connected()) {
            JSONObject json = new JSONObject();
            try {
                json.put("msg", "testtest");
                json.put("errcode", 0);
            } catch (JSONException e) {
                e.printStackTrace();
            }
            log("发送了一个事件");
            SocketIO.emit("event", json);
        } else {
            log("发送事件失败，原因：未连接");
        }
    }
  ```

## 实现原理
运行在侠客云系统下的安卓设备默认会开放一个8888端口，这是设备与节点服务器沟通的桥梁，通过socketio方式连接可以实现信息交互和广播，主要用于hook及第三方app与侠客云通讯。

测试app源码 : https://static.xky.com/download/MyApplication3.rar

![avatar](https://static.xky.com/download/test01.png)

侠客云模块中调用方法可参考[callApi调用第三方模块接口](/api/ModuleApi.html#callapi)。
