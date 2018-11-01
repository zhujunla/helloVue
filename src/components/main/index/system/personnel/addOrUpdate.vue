<template>
    <div>       
        <Modal       
            :mask-closable="false"     
            :closable="false"     
            v-model="addAndChangeShow"
            :title="addAndChange?'新增':'修改'"
            >
            <Form ref="formCustom" :model="formCustom" :rules="ruleCustom" :label-width="80">
                <FormItem label="登录名" prop="username">
                    <Input type="text" v-model="formCustom.username" placeholder="请输入登录名称"></Input>
                </FormItem>
                <FormItem label="人员姓名" prop="name">
                    <Input type="text" v-model="formCustom.name" placeholder="请输入员工姓名"></Input>
                </FormItem>
                <FormItem label="工作电话" prop="telephone">
                    <Input type="text" v-model="formCustom.telephone" placeholder="请输入工资电话"></Input>
                </FormItem>
                <FormItem label="排序序号" prop="sequence">
                    <Input type="text" v-model="formCustom.sequence" placeholder="请输入排序序号"></Input>
                </FormItem>
                
            </Form>
            <div slot="footer">
                 <!-- <FormItem> -->

                    <Button @click="zjl_cancel('formCustom')">取消</Button>
                    <Button type="primary" class="ml10" @click="zjl_submit('formCustom')">确定</Button>
                <!-- </FormItem> -->
                </div>
        </Modal>
    </div>
</template>

<script>
export default {
        name:"addOrUpdate",
        props:{
            changeList:{
                type: Function,
                default: null
            }
        },
        data () {
            return {
                addAndChangeShow:false,
                addAndChange:true,//默认新增
                objectId:"",
                formCustom: {
                    username: '',
                    name: '',
                    telephone: '',
                    sequence:''
                },
                ruleCustom: {
                    username: [
                        { required: true, message: '请输入登录名称', trigger: 'blur' }
                    ],
                    name: [
                        { required: true, message: '请输入人员姓名', trigger: 'blur' }
                    ],
                    telephone: [
                        { required: true, message: '请输入正确的手机号', trigger: 'blur' }
                    ],
                    sequence: [
                        { required: true, message: '请输入排序序号', trigger: 'blur' }
                    ]
                }
            }
        },  
        mounted(){
            // if(!this.addAndChange){
            //     this.queryUserById_ajax({
            //         objectId:this.objectId
            //     })
            // }
        },      
        methods:{                    
            zjl_submit(){//提交确定                                
                this.$refs["formCustom"].validate((valid) => {
                    if (valid) {
                        // console.log(this.formCustom)
                        const {formCustom,addUser_ajax,updateUser_ajax} = this;
                        
                        var obj = {};
                        for(var i in formCustom){
                            obj[i] = formCustom[i]
                        };
                        console.log(obj)
                        if(this.addAndChange){
                            addUser_ajax(obj);
                        }else{
                            updateUser_ajax(obj);
                        }                        
                        this.addAndChangeShow=false; 
                        this.$refs['formCustom'].resetFields();                       
                    } else {
                        // this.clickSureIfClose = true;
                        this.$Message.error('Fail!');
                        
                    }
                })
            },
            zjl_cancel(){//提交取消
                this.$refs["formCustom"].resetFields();
                this.addAndChangeShow = false;                
            },                      
            addUser_ajax(obj){
                const _this = this;
                this.$zjl_http.post('/pcWaste/v01/htwl/waste/userManage/addUser',obj,(res)=>{
                    var rs_data = res.data;
                    var code = res.code;
                    var message = res.message;
                    if (code == 1000) {
                        _this.$Message.success({
                            content:message                            
                        });
                        if (this.changeList) {//调用父组件方法
                            this.changeList()
                        }
                    } 
                })
            },
            updateUser_ajax(obj){
                const _this = this;
                this.$zjl_http.post('/pcWaste/v01/htwl/waste/userManage/updateUser',obj,(res)=>{
                    var rs_data = res.data;
                    var code = res.code;
                    var message = res.message;
                    if (code == 1000) {
                        _this.$Message.success({
                            content:message                            
                        });
                        if (this.changeList) {//调用父组件方法
                            this.changeList()
                        }
                    } 
                })
            },
            queryUserById_ajax(obj){
                const _this = this;
                this.$zjl_http.post('/pcWaste/v01/htwl/waste/userManage/queryUserById',obj,(res)=>{
                    var rs_data = res.data;
                    var code = res.code;
                    var message = res.message;
                    if (code == 1000) {
                        _this.formCustom = {
                            objectid:rs_data.objectid,
                            username: rs_data.username,
                            name:  rs_data.name,
                            telephone:  rs_data.telephone,
                            sequence: rs_data.sequence,
                        }; 
                        // _this.$Message.success({
                        //     content:message                            
                        // });
                    } else{
                        
                        
                    }
                })
            },
        }
    }
</script>

<style>
    
</style>
