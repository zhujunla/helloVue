<template>
    <div class="login_bg">
        <div class="bg_header">
            <div class="header_logo">
                <div class="fl mt15">
                    <img src="./image/logo.png" alt="">
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
                    动环监控系统
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
                        <img class="fr h35" v-bind:src="imgUrls+imgCodes" v-on:click="imgCode" alt=""/>
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
        beforeMount() {            
            this.imgCode();            
        },
        mounted(){            
            this.zjl_showEcharts();
            this.publicKeyPost();
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
                        window.sessionStorage.setItem("userData",datas);
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
