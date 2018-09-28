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
        <div class="bg_content">
            <div class="fr mt100 content_from">
                <div class="from_title">
                    动环监控系统
                </div>
                <Form ref="formInline" :model="formInline" :rules="ruleInline":label-width="80" >
                    <FormItem label="用户名" prop="strusername">
                        <Input type="text" v-model="formInline.strusername" placeholder="用户名">                           
                        </Input>
                    </FormItem>
                    <FormItem label="密码" prop="strpassword">
                        <Input type="password" v-model="formInline.strpassword" placeholder="密码">                            
                        </Input>
                    </FormItem>
                    <FormItem label="验证码" prop="verifycode">
                        <Input type="text" v-model="formInline.verifycode" style="width:150px" placeholder="验证码">                            
                        </Input>
                        <img class="fr h35" v-bind:src="imgCodes.imgbase64" v-on:click="changeImg" alt=""/>
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
                imgCodes:{},
                formInline: {                    
                    strusername: '',
                    verifycode: '',
                    strpassword: ''
                },
                ruleInline: {
                    strusername: [
                        { required: true, message: '请输入名称', trigger: 'blur' }
                    ],
                    verifycode: [
                        { required: true, message: '请输入验证码', trigger: 'blur' }
                    ],
                    strpassword: [
                        { required: true, message: '请输入密码', trigger: 'blur' },
                        { type: 'string', min: 6, message: '密码最小为6位', trigger: 'blur' }
                    ]
                }
            }
        },
        beforeMount() {
    
            this.imgCode();
        },
        methods: {
            handleSubmit(name) {
                var _this = this;
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        var formInline = this.formInline;
                        var obj ={
                            strusername: formInline.strusername,
                            strpassword: formInline.strpassword,
                            verifycode: formInline.verifycode,
                            codeId: _this.imgCodes.codeId,
                        }
                        _this.getLogin(obj);
                    } else {
                        this.$Message.error('Fail!');
                    }
                })
            },
            changeImg(){
                this.imgCode();
            },
            getLogin(obj){
                var that = this;
                this.$zjl_http.post('/app/password/login',obj,(res)=>{
                    var datas = res.data;
                    var code = datas.code;
                    var msg = datas.msg;
                    if(code == 1){
                    // console.info(that);
                    that.$Message.success(msg);
                    that.$router.push({
                        path:"/main"
                    })
                    }
                })
            },
            imgCode(){
                var that = this;
                this.$zjl_http.get('/app/getverifycode',{},(res)=>{
                    var datas = res.data;
                    // console.info(data.data);
                    var data = datas.data;
                    // console.info(that.imgCodes);
                    that.$set(that,'imgCodes',data);
                    // console.info(that.imgCodes)
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
