<template>
    <div class="allBox">
        <div>
            人员管理
        </div>
        <div>
            
        </div>	
        <div class="mt10 mb10">
            <Button type="primary">查询</Button>
            <Button type="primary" @click="addAndChangeShow=true" class="ml10">新增人员</Button>
        </div>	
        <div class="redText mb10">
            *注 意 : 新增人员后，需要将新增人员加入到企业的角色才能登陆。重置密码后，默认密码为：a123456
        </div>
        <Table :columns="columns1" :data="data2.rows"></Table>
        <Page class="fr mt10" :current="paginationObj.pageNumber" :page-size="paginationObj.pageSize" @on-change="pagePlation" :total="data2.total" />
        <!-- 新增，修改弹框 -->
        <!--  ok-text="确定"
            cancel-text="取消"
            :loading="clickSureIfClose"
            @on-ok="zjl_submit"
            @on-cancel="zjl_cancel " -->
        <Modal
            v-model="addAndChangeShow"
            :title="addAndChange?'新增':'修改'"
            >
            <Form ref="formCustom" :model="formCustom" :rules="ruleCustom" :label-width="80">
                <FormItem label="Password" prop="passwd">
                    <Input type="password" v-model="formCustom.passwd"></Input>
                </FormItem>
                <FormItem label="Confirm" prop="passwdCheck">
                    <Input type="password" v-model="formCustom.passwdCheck"></Input>
                </FormItem>
                <FormItem label="Age" prop="age">
                    <Input type="text" v-model="formCustom.age" number></Input>
                </FormItem>
                
                
            </Form>
            <div slot="footer">
                 <!-- <FormItem> -->
                    <Button type="primary" @click="zjl_submit('formCustom')">确定</Button>
                    <Button @click="zjl_cancel('formCustom')" style="margin-left: 8px">取消</Button>
                <!-- </FormItem> -->
                </div>
        </Modal>
    </div>
</template>

<script>
export default {
        data () {
            return {
                addAndChangeShow:false,
                clickSureIfClose:true,//点击确定按钮是否关闭弹框
                addAndChange:true,//默认新增
                formCustom: {
                    passwd: '',
                    passwdCheck: '',
                    age: ''
                },
                ruleCustom: {
                    passwd: [
                        { required: true, message: 'The name cannot be empty', trigger: 'blur' }
                    ],
                    passwdCheck: [
                        { required: true, message: 'The name cannot be empty', trigger: 'blur' }
                    ],
                    age: [
                        { required: true, message: 'The name cannot be empty', trigger: 'blur' }
                    ]
                },
                columns1: [
                    {
                        title:"序号",
                        key:"index",
                        render:(h,row)=>{
                            var _this= this;
                            let i = row.index+1+(_this.paginationObj.pageNumber-1)*10;
                            return h("span",i)
                           
                        }
                    },
                   {
                        title: '登录名',
                        key: 'username',                
                    },
                    {
                        title: '人员姓名',
                        key: 'name',
                    },
                    {
                        title: '工作电话',
                        key: 'telephone',
                    },
                    {
                        title: '状态',
                        key: 'statusName',
                    }, {
                        title: '操作',
                        key: 'action',
                        width: 250,
                        render:(h, params)=>{
                            var statusnam = params.row.status==0?"禁用":"启用"
                            return h('div', [
                                h('Button', {
                                    props: {
                                        type: 'primary',
                                        size: 'small'
                                    },
                                    style: {
                                        marginRight: '5px'
                                    },
                                    on: {
                                        click: () => {
                                            this.show(params.index)
                                        }
                                    }
                                }, '详情'),
                                h('Poptip',{
                                    props: {
                                        confirm	:true,
                                        "ok-text": '确定',
                                        "cancel-text": '取消',
                                        title:"确认"+statusnam+"?"
                                    },
                                    style: {
                                        marginRight: '5px'
                                    },
                                    on: {
                                        "on-ok": () => {
                                            console.info(params)
                                            var value = params.row;
                                             this.updateUserStatus_Ajax({
                                                 objectid:value.objectid,
                                                 status:value.status==0?"1":"0"
                                            })
                                        },
                                    }
                                },[ h('Button',{
                                    props: {
                                        type: params.row.status==0?"warning":"primary",
                                        size: 'small'
                                    },
                                    style: {
                                        marginRight: '5px'
                                    }                                    
                                },statusnam)]),
                                h('Poptip',{
                                    props: {
                                        confirm	:true,
                                        "ok-text": '确定',
                                        "cancel-text": '取消',
                                        title:"确认重置密码?"
                                    },
                                    style: {
                                        marginRight: '5px'
                                    },
                                    on: {
                                        "on-ok": () => {
                                            // console.info(params)
                                            var value = params.row;
                                             this.resetPassword_ajax({
                                                 objectid:value.objectid
                                            })
                                        },
                                    }
                                },[ h('Button',{
                                    props: {
                                        type: "error",
                                        size: 'small'
                                    },
                                    style: {
                                        marginRight: '5px'
                                    }                                    
                                },重置密码)]),
                                h('Button', {
                                    props: {
                                        type: 'primary',
                                        size: 'small'
                                    },
                                    on: {
                                        click: () => {
                                            this.remove(params.index)
                                        }
                                    }
                                }, '编辑')
                            ]);
                        }
                    }
                ],  
                data2:{
                    rows:[]
                },              
                paginationObj:{
                    pageSize: 10,
                    pageNumber: 1
                }                 
                
            }
        },
        beforeMount(){
            this.Pagination(this.paginationObj);
        },
        methods:{
            pagePlation(pageNumber){
                console.info(pageNumber);
                this.$set(this.paginationObj,"pageNumber",pageNumber);
                this.Pagination(this.paginationObj);
            },
            zjl_submit(){//提交确定
                console.info("确定");
                
                this.$refs["formCustom"].validate((valid) => {
                    if (valid) {
                        this.$Message.success('Success!');
                    } else {
                        this.clickSureIfClose = false;
                        // this.clickSureIfClose = true;
                        this.$Message.error('Fail!');
                        
                    }
                })
            },
            zjl_cancel(){//提交取消
                console.info("取消")
            },
            resetPassword_ajax(obj){
                const _this = this;
                this.$zjl_http.post('/pcWaste/v01/htwl/waste/userManage/resetPassword',obj,(res)=>{
                    var rs_data = res.data;
                    var code = res.code;
                    var message = res.message;
                    if (code == 1000) {
                        _this.$Message.success({
                            content:message                            
                        });
                    } else{
                        _this.$Message.error(message);
                        
                    }
                })
            },
            updateUserStatus_Ajax(obj){
                const _this = this;
                this.$zjl_http.post('/pcWaste/v01/htwl/waste/userManage/updateUserStatus',obj,(res)=>{
                    var rs_data = res.data;
                    var code = res.code;
                    var message = res.message;
                    if (code == 1000) {
                        _this.$Message.success({
                            content:message,
                            onClose:function(){
                            _this.Pagination(_this.paginationObj)
                        }
                        });
                    } else{
                        _this.$Message.error(message);
                        
                    }
                })
            },
            Pagination (obj){ //查询列表              
                const _this = this;
                this.$zjl_http.post('/pcWaste/v01/htwl/waste/userManage/queryUserForPage',obj,(res)=>{
                    var rs_data = res.data;
                    var code = res.code;
                    var message = res.message;
                    if (code == 1000) {
                        var _Data = rs_data;
                        console.info(_Data)
                        // console.info(_Data)
                        _this.data2 = rs_data;
                        // _this.iTotalrecords
                    } else if (code === -8) {
                        // message.error(msg, 1,function(){
                        _this.data2 = [];
                        // });
                    }else{
                        _this.$Message.error(message);
                        
                    }
                })              

            }
        }
    }
</script>

<style>
    .allBox{
        padding: 20px;
    }
    .redText{
        color: red;
    }
</style>
