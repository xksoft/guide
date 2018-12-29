<template>
    <div id="demo">
        <template>
            <el-tabs v-model="activeName" @tab-click="getreturn()">
                <el-tab-pane label="Parameter" name="first">
                    <div style="padding-top: 10px">
                        <textarea v-model="requestjson" placeholder="请在此输入参数"></textarea>
                    </div>
                </el-tab-pane>
                <el-tab-pane label="Result" name="second">
                    <div class="language-javascript extra-class demotext">
                        <pre><code v-html="highlightCode"></code></pre>
                    </div>
                    <p>{{request_time}}</p>
                </el-tab-pane>
            </el-tabs>
        </template>

    </div>
</template>

<script>
    import axios from 'axios'
    import Prism from 'prismjs'
    import 'prismjs/themes/prism.css'

    export default {
        name: "apidemo",
        props: ['url','params','isget'],
        data(){
            return{
                requestjson: this.params,
                requestapi:this.url,
                socketio_connected: '未连接',
                socketio_response: 'ready',
                socketio_message: 'ready',
                socketio: null,
                session: '',
                get: this.isget,
                request_time: '',
                result:'',
                activeName: 'first',
                seefirst:true,
                code:''
            }
        },
        components: {
            Prism
        },
        created(){
            // if(getCookie('mysession')){
            //     let json = JSON.parse(this.params)
            //     if("session" in json){
            //         json.session = getCookie('mysession')
            //     }
            //     this.requestjson = JSON.stringify(json, null, 4)
            // }
        },
        computed:{
            highlightCode:function(){
                return Prism.highlight(this.socketio_response,Prism.languages.javascript,'javascript');
            },
        },
        methods:{
            getreturn(){
                if(this.activeName === 'second') {
                    this.submit()
                }
            },
            async submit() {
                this.request_time = '正在请求';
                let start = new Date().getTime();//起始时间
                try {
                    let json = JSON.parse(this.requestjson)
                    //这里是让服务端返回原始数据，正常通讯是返回加密数据
                    let response = this.get ? await get(this.requestapi, json) : await post(this.requestapi, json);
                    //如果是login则保存session
                    if (this.requestapi === 'https://api.xky.com/login') {
                        if (response.data.session) {
                            console.log(response.data.session)
                            this.session = response.data.session
                            // setCookie('mysession', this.session, 365)
                        }
                    }
                    this.socketio_response = JSON.stringify(response.data, null, 4)
                    this.request_time = '耗时：' + (new Date().getTime() - start) + ' 毫秒'
                }
                catch (err) {
                    this.socketio_response = '内部出错:' + err;
                    this.request_time = '耗时：' + (new Date().getTime() - start) + ' 毫秒'
                    // this.btn = '提交请求'
                }
            },
            connect() {
                let me=this
                this.socketio = io('http://hz.ws.xky.com:8080/', {
                    extraHeaders: {
                        'Cookie': '_ga=GA1.2.17432343994.1475611967; _gat=1; __cfduid=dc232334gwdsd23434542342342342475611928'
                    },
                    'transports': ['websocket'],
                    'path': '/xky',
                    'query': 'action=client&session=' + me.session + '&key=xky'
                }).on('connect', () => {
                    me.socketio_connected = '已连接'
                    me.socketio_message = '已连接服务器'
                    me.socketio_response = '已连接'

                    console.log('连接上了')
                    this.socketio.emit('hello', function (sss) {
                        console.log(sss)
                    })
                }).on('event', (json) => {
                    console.log(json);
                    me.socketio_message = JSON.stringify(json, null, 4);
                }).on('disconnect', (sdf) => {
                    console.log('断开');
                    me.socketio_connected = '已断开';
                    me.socketio_message = '已断开服务器';
                });
            },
        }
    }
    //post方法
    async function post(api, json) {
        console.log('post');
        return await axios.post(api, json, {headers: {'Content-Type': 'application/json'}});
    }

    //get方法
    async function get(api, json) {
        console.log('get');
        return await axios.get(api , {params:json})
    }
    // function setCookie(c_name, value, expiredays) {
    //     let exdate = new Date();
    //     exdate.setDate(exdate.getDate() + expiredays);
    //     document.cookie = c_name + '=' + escape(value) +
    //         ((expiredays == null) ? '' : ';expires=' + exdate.toGMTString());
    // }
    //
    // function getCookie(c_name) {
    //     if (document.cookie.length > 0) {
    //         let c_start = document.cookie.indexOf(c_name + '=');
    //         if (c_start != -1) {
    //             c_start = c_start + c_name.length + 1;
    //             let c_end = document.cookie.indexOf(';', c_start);
    //             if (c_end == -1) {
    //                 c_end = document.cookie.length;
    //             }
    //             return unescape(document.cookie.substring(c_start, c_end));
    //         }
    //     }
    //     return '';
    // }
</script>

<style scoped>
    textarea{
        font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
        width: 100%;
        box-sizing: border-box;
        padding: 15px;
        background: #f5f2f0;
        /*border-radius: 4px;*/
        border-color:  #f5f2f0;
        color: #690;
        line-height: 1.5;
        font-size: 14px;
        min-height: 180px;
        max-height: 300px;
    }
    textarea:focus{
        outline-color: #2ea5ff;
    }
    .demotext{
        /*background-color: #f8f8f8;*/
        /*border:1px solid #f8f8f8;*/
        /*padding: 20px;*/
        /*margin-top: 20px;*/
        min-height: 180px;
        max-height: 300px;
        overflow: auto;
    }
    .btn{
        background: #2ea5ff;
        border:1px solid #2ea5ff;
        color: #ffffff;
        padding: 3px 10px;
        border-radius: 4px;
    }
</style>