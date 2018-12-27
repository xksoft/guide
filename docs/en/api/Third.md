---
pageClass: third-page
---
# Calling A Third-Party Interface

## Develop a third-party interface that can be called by the XiakeCloud

The XiakeCloud default system only provides operations under non-root privileges. Some special features may require root privileges or xposed frameworks. In this case, you can open the API to invoke the XiakeCloud according to the following specifications.

Just implement the code in your own apk or xposed module to interact with XiakeCloud,for example:
```java
    private final BroadcastReceiver mReceiver = new BroadcastReceiver() {
        @Override
        public void onReceive(Context context, Intent intent) {
            String action = intent.getStringExtra("action");
            String json = intent.getStringExtra("json");
            setResultCode(666);//666 is a success flag, required, otherwise XiakeCould not process
            JSONObject jsonObject = new JSONObject();
            String base64 = "";
            try {
                if (null != json) {
                    jsonObject = new JSONObject(new String(Base64.decode(json.getBytes(), Base64.DEFAULT), "UTF-8"));//将Handle the string solution passed by XiakeCould as a json object of java
                }

                //Processing action
                //Action is the action name, jsonObject is the pass parameter (optional)
                //Here, the required functions are implemented according to the action name.


                //Recreate the jsonObject for feedback, must include the errcode field, and fill in other fields as needed.
                jsonObject = new JSONObject();
                jsonObject.put("errcode", 0);
                jsonObject.put("msg", action + "调用成功");
       
                //Encode the json object into base64
                base64 = new String(Base64.encode(jsonObject.toString().getBytes("UTF-8"), Base64.DEFAULT)).replace("\r", "").replace("\n", "");
            } catch (Throwable e) {
                // Return pre-coded error information without modification
                base64 = "eyJlcnJjb2RlIjowLCJtc2ciOiJiYXNlNjQgZXJyb3IifQ==";
            }
            //Set feedback results
            setResultData(base64);
        }


    };
  ```
The above code is the broadcast receiver function code, you also need to register him to the app to use

  ```java
      protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        //Registered broadcast receiver
        //Note: registerReceiver must get the Content object to register, if it is in xposed, please register in the hook onCreate or onResume events.
        registerReceiver(mReceiver, new IntentFilter(getPackageName()));

        setContentView(R.layout.activity_main);
    }
```
see also:[Calling A Third-Party Interface](/api/ModuleApi.html#callapi)。
