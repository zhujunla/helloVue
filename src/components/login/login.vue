<template>
    <div class="login_bg">
        <div class="bg_header">
            <div class="header_logo">
                <div class="fl mt10">
                    <img  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHoAAAAiCAYAAACQhM1+AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjkyNTM0OUI0MjVDRjExRTg5Rjk1QjE3RTMwQjQ0MTkzIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjkyNTM0OUI1MjVDRjExRTg5Rjk1QjE3RTMwQjQ0MTkzIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6OTI1MzQ5QjIyNUNGMTFFODlGOTVCMTdFMzBCNDQxOTMiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6OTI1MzQ5QjMyNUNGMTFFODlGOTVCMTdFMzBCNDQxOTMiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7uAIZwAAAGt0lEQVR42uyb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" alt="">
                </div>
                <div class="fl ml10">
                    <span class=" pl10 logo_lBorder">后台管理</span>
                </div>
            </div>
        </div>
        <div class="bg_content clearfix">
            <div class="fl mt100 h600 w500" ref="zjl_echart">

            </div>
            <div class="fr mt100 content_from mr60">
                <div class="from_title">
                    固体废物管理信息系统
                </div>
                <Form ref="formInline" :model="formInline" :rules="ruleInline" :label-width="80" >
                    <FormItem label="用户名" prop="username">
                        <Input type="text" v-model="formInline.username" placeholder="用户名">                           
                        </Input>
                    </FormItem>
                    <FormItem label="密码" prop="pwd">
                        <Input type="password" v-model="formInline.pwd" placeholder="密码">                            
                        </Input>
                    </FormItem>
                    <FormItem label="验证码" prop="registrationCode">
                        <Input type="text" v-model="formInline.registrationCode" style="width:120px" placeholder="验证码">                            
                        </Input>
                        <img class="fr h35" v-bind:src="imgUrls+imgCodes" v-on:click="imgCode" alt="点击获取验证码"/>
                    </FormItem>
                    <!-- <div class="tr">  
                        
                    </div> -->
                    <FormItem>
                        <Button class="w" type="primary" @click="handleSubmit('formInline')">登录</Button>
                    </FormItem>
                </Form>
            </div>
        </div>
    </div>	
</template>

<script>
// import {Form,Button,Input,Icon,FormItem} from "iview";
import echarts from 'echarts';
import {imgBaseUrl} from '@/axios/filePath';
import { JSEncrypt } from 'jsencrypt'
const encryptor = new JSEncrypt();
export default {
    name:"login",
    // components:{
    //     Form,
    //     Button,
    //     FormItem,
    //     Input,
    //     Icon,
    //     FormItem
    // },
    data () {
            return {
                imgUrls:imgBaseUrl+"/pcWaste/v01/htwl/waste/base/getVerificationCode?timeStr=checkCode",//图片路劲
                imgCodes:new Date().getTime(),//图片时间搓
                publicKey:"",
                userObj_pass:{},//加密东西
                formInline: {                    
                    username: '',
                    registrationCode: '',
                    pwd: ''
                },
                ruleInline: {
                    username: [
                        { required: true, message: '请输入名称', trigger: 'blur' }
                    ],
                    registrationCode: [
                        { required: true, message: '请输入验证码', trigger: 'blur' }
                    ],
                    pwd: [
                        { required: true, message: '请输入密码', trigger: 'blur' },
                        { type: 'string', min: 6, message: '密码最小为6位', trigger: 'blur' }
                    ]
                }
            }
        },        
        mounted(){            
            var _this = this;
            this.zjl_showEcharts();
            this.publicKeyPost();
            // setTimeout(function(){
            //     _this.imgCode();
            // },200)
            
        },       
        methods: {
             zjl_showEcharts:function() {
                let myChart = echarts.init(this.$refs.zjl_echart);                
                var option = {
                // backgroundColor: '#1b1b1b',
                // tooltip: {
                //     formatter: "{a} <br/>{c} {b}"
                // },
                toolbox: {
                    show: true,
                    feature: {
                        mark: { show: true },
                        // restore : {show: true},
                        // saveAsImage : {show: true}
                    }
                },
                series: [
                    {
                        name: '速度',
                        type: 'gauge',
                        min: 0,
                        max: 220,
                        splitNumber: 11,
                        radius: '50%',
                        axisLine: {            // 坐标轴线
                            lineStyle: {       // 属性lineStyle控制线条样式
                                color: [[0.09, 'lime'], [0.82, '#1e90ff'], [1, '#ff4500']],
                                width: 3,
                                shadowColor: '#fff', //默认透明
                                shadowBlur: 10
                            }
                        },
                        axisLabel: {            // 坐标轴小标记
                            textStyle: {       // 属性lineStyle控制线条样式
                                fontWeight: 'bolder',
                                color: '#fff',
                                shadowColor: '#fff', //默认透明
                                shadowBlur: 10
                            }
                        },
                        axisTick: {            // 坐标轴小标记
                            length: 15,        // 属性length控制线长
                            lineStyle: {       // 属性lineStyle控制线条样式
                                color: 'auto',
                                shadowColor: '#fff', //默认透明
                                shadowBlur: 10
                            }
                        },
                        splitLine: {           // 分隔线
                            length: 25,         // 属性length控制线长
                            lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                                width: 3,
                                color: '#fff',
                                shadowColor: '#fff', //默认透明
                                shadowBlur: 10
                            }
                        },
                        pointer: {           // 分隔线
                            shadowColor: '#fff', //默认透明
                            shadowBlur: 5
                        },
                        title: {
                            textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                                fontWeight: 'bolder',
                                fontSize: 20,
                                fontStyle: 'italic',
                                color: '#fff',
                                shadowColor: '#fff', //默认透明
                                shadowBlur: 10
                            }
                        },
                        detail: {
                            backgroundColor: 'rgba(30,144,255,0.8)',
                            borderWidth: 1,
                            borderColor: '#fff',
                            shadowColor: '#fff', //默认透明
                            shadowBlur: 5,
                            offsetCenter: [0, '50%'],       // x, y，单位px
                            textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                                fontWeight: 'bolder',
                                color: '#fff'
                            }
                        },
                        data: [{ value: 40, name: '' }]
                    },
                    {
                        name: '转速',
                        type: 'gauge',
                        center: ['25%', '55%'],    // 默认全局居中
                        radius: '30%',
                        min: 0,
                        max: 7,
                        endAngle: 45,
                        splitNumber: 7,
                        axisLine: {            // 坐标轴线
                            lineStyle: {       // 属性lineStyle控制线条样式
                                color: [[0.29, 'lime'], [0.86, '#1e90ff'], [1, '#ff4500']],
                                width: 2,
                                shadowColor: '#fff', //默认透明
                                shadowBlur: 10
                            }
                        },
                        axisLabel: {            // 坐标轴小标记
                            textStyle: {       // 属性lineStyle控制线条样式
                                fontWeight: 'bolder',
                                color: '#fff',
                                shadowColor: '#fff', //默认透明
                                shadowBlur: 10
                            }
                        },
                        axisTick: {            // 坐标轴小标记
                            length: 12,        // 属性length控制线长
                            lineStyle: {       // 属性lineStyle控制线条样式
                                color: 'auto',
                                shadowColor: '#fff', //默认透明
                                shadowBlur: 10
                            }
                        },
                        splitLine: {           // 分隔线
                            length: 20,         // 属性length控制线长
                            lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                                width: 3,
                                color: '#fff',
                                shadowColor: '#fff', //默认透明
                                shadowBlur: 10
                            }
                        },
                        pointer: {
                            width: 5,
                            shadowColor: '#fff', //默认透明
                            shadowBlur: 5
                        },
                        title: {
                            offsetCenter: [0, '-30%'],       // x, y，单位px
                            textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                                fontWeight: 'bolder',
                                fontStyle: 'italic',
                                color: '#fff',
                                shadowColor: '#fff', //默认透明
                                shadowBlur: 10
                            }
                        },
                        detail: {
                            //backgroundColor: 'rgba(30,144,255,0.8)',
                            // borderWidth: 1,
                            borderColor: '#fff',
                            shadowColor: '#fff', //默认透明
                            shadowBlur: 5,
                            width: 80,
                            height: 30,
                            offsetCenter: [0, '40%'],       // x, y，单位px
                            textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                                fontWeight: 'bolder',
                                color: '#fff'
                            }
                        },
                        data: [{ value: 1.5, name: '' }]
                    },
                    {
                        name: '油表',
                        type: 'gauge',
                        center: ['75%', '50%'],    // 默认全局居中
                        radius: '30%',
                        min: 0,
                        max: 2,
                        startAngle: 135,
                        endAngle: 45,
                        splitNumber: 2,
                        axisLine: {            // 坐标轴线
                            lineStyle: {       // 属性lineStyle控制线条样式
                                color: [[0.2, 'lime'], [0.8, '#1e90ff'], [1, '#ff4500']],
                                width: 2,
                                shadowColor: '#fff', //默认透明
                                shadowBlur: 10
                            }
                        },
                        axisTick: {            // 坐标轴小标记
                            length: 12,        // 属性length控制线长
                            lineStyle: {       // 属性lineStyle控制线条样式
                                color: 'auto',
                                shadowColor: '#fff', //默认透明
                                shadowBlur: 10
                            }
                        },
                        axisLabel: {
                            textStyle: {       // 属性lineStyle控制线条样式
                                fontWeight: 'bolder',
                                color: '#fff',
                                shadowColor: '#fff', //默认透明
                                shadowBlur: 10
                            },
                            formatter: function (v) {
                                switch (v + '') {
                                    case '0': return 'E';
                                    case '1': return 'Gas';
                                    case '2': return 'F';
                                }
                            }
                        },
                        splitLine: {           // 分隔线
                            length: 15,         // 属性length控制线长
                            lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                                width: 3,
                                color: '#fff',
                                shadowColor: '#fff', //默认透明
                                shadowBlur: 10
                            }
                        },
                        pointer: {
                            width: 2,
                            shadowColor: '#fff', //默认透明
                            shadowBlur: 5
                        },
                        title: {
                            show: false
                        },
                        detail: {
                            show: false
                        },
                        data: [{ value: 0.5, name: 'gas' }]
                    },
                    {
                        name: '水表',
                        type: 'gauge',
                        center: ['75%', '50%'],    // 默认全局居中
                        radius: '30%',
                        min: 0,
                        max: 2,
                        startAngle: 315,
                        endAngle: 225,
                        splitNumber: 2,
                        axisLine: {            // 坐标轴线
                            lineStyle: {       // 属性lineStyle控制线条样式
                                color: [[0.2, 'lime'], [0.8, '#1e90ff'], [1, '#ff4500']],
                                width: 2,
                                shadowColor: '#fff', //默认透明
                                shadowBlur: 10
                            }
                        },
                        axisTick: {            // 坐标轴小标记
                            show: false
                        },
                        axisLabel: {
                            textStyle: {       // 属性lineStyle控制线条样式
                                fontWeight: 'bolder',
                                color: '#fff',
                                shadowColor: '#fff', //默认透明
                                shadowBlur: 10
                            },
                            formatter: function (v) {
                                switch (v + '') {
                                    case '0': return 'H';
                                    case '1': return 'Water';
                                    case '2': return 'C';
                                }
                            }
                        },
                        splitLine: {           // 分隔线
                            length: 15,         // 属性length控制线长
                            lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                                width: 3,
                                color: '#fff',
                                shadowColor: '#fff', //默认透明
                                shadowBlur: 10
                            }
                        },
                        pointer: {
                            width: 2,
                            shadowColor: '#fff', //默认透明
                            shadowBlur: 5
                        },
                        title: {
                            show: false
                        },
                        detail: {
                            show: false
                        },
                        data: [{ value: 0.5, name: 'gas' }]
                    }
                ]
            };
            myChart.setOption(option);
            setInterval(function () {
                option.series[0].data[0].value = (Math.random() * 100).toFixed(2) - 0;
                option.series[1].data[0].value = (Math.random() * 7).toFixed(2) - 0;
                option.series[2].data[0].value = (Math.random() * 2).toFixed(2) - 0;
                option.series[3].data[0].value = (Math.random() * 2).toFixed(2) - 0;
                myChart.setOption(option);
            }, 2000);
            },
            handleSubmit(name) {
                var _this = this;
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        // console.info(valid)
                        var formInline = this.formInline;
                        var userObj = {
                            username: formInline.username,
                            pwd: formInline.pwd,
                            timestamp: (new Date).getTime()
                        }
                        // _this.$set()
                        _this.userObj_pass = userObj;
                        var obj ={
                            userMsg:encryptor.encrypt(JSON.stringify(userObj)),
                            token: window.sessionStorage.getItem("publicToken"),
                            registrationCode: formInline.registrationCode,
                            captchaCode:"checkCode"+ _this.imgCodes,
                        }
                        _this.getLogin(obj);
                    } else {
                        this.$Message.error('Fail!');
                    }
                })
            },
            imgCode(){
                var that = this;
                that.$set(that,'imgCodes',new Date().getTime());  
            },
            publicKeyPost(){
                var _this = this;
                this.$zjl_http.get('/pcWaste/v01/htwl/waste/base/getks',{
                    timestamp:new Date().getTime()
                },(_data)=>{                    
                    var code = _data.code;
                    var message = _data.message;
                    var data = _data.data;
                    console.info(_data)
                    if(code===1000){
                        
                        window.sessionStorage.setItem("publicToken",data.token);                        
                        encryptor.setPublicKey(data.pubk)
                    }else{
                        _this.$Message.error(message);
                    }                    
                })
            },
            getLogin(obj){
                var that = this;
                this.$zjl_http.post('/pcWaste/v01/htwl/waste/base/login',obj,(res)=>{
                    console.info(res);                    
                    var datas = res.data;
                    var code = res.code;
                    var msg = res.message;
                    if (code === 1000) {
                        encryptor.setPublicKey(datas.pubk);
                        var userMsg = encryptor.encrypt(JSON.stringify(that.userObj_pass))
                        that.$Message.success(msg);
                        that.$router.push({
                            path:"/main"
                        });
                        window.sessionStorage.setItem("userMsg",userMsg);
                        window.sessionStorage.setItem("token",datas.token);
                        window.sessionStorage.setItem("userData",JSON.stringify(datas));
                        // window.sessionStorage.setItem("publicKey",data.pubk);
                    }else{
                        that.$Message.error(msg)
                    }
                    
                })
            }            
        }
}
</script>

<style lang="less">
    .login_bg{
        position: fixed;
        width: 100%;
        height: 100%;
        overflow: auto;
        background: #000000;
        color: #d6dfea;
        .co_white{
            color: #d6dfea;
        }
        .bg_header{
            height:69px;
            border-bottom: 1px solid #d6dfea;
            .header_logo{
                width: 1190px;
                margin: 0 auto;
                line-height: 69px;
                font-size: 20px;                
                .logo_lBorder{
                    border-left: 1px solid #d6dfea;
                }
            }
        }
        .bg_content{
            width: 1190px;
            margin: 0 auto;
            .content_from{
                width: 312px;
                .from_title{
                    font-size: 30px;
                    text-align: center;
                    margin-bottom: 50px;
                    margin-top: 70px;
                }
            }
        }
    }
</style>
