<template>
  <div>
    <div><input type="text" placeholder="用户名"  @keydown="logins" v-model.trim="login.strusername"></div>
    {{login.strusername?login.strusername.length> 6?"长度不能大于6":"":""}}
    <div><input type="text" placeholder="密码"  @keydown="logins" v-model="login.strpassword"></div>
    <div><input type="text" placeholder="验证码"  @keydown="logins" v-model.trim="login.verifycode"></div>
    <div>  
      <img v-bind:src="imgCodes.imgbase64" v-on:click="changeImg" alt=""/>
    </div>
    <button   @click="logins">
      登录
    </button>
  </div>
</template>

<script>


export default {  
  name: 'HelloWorld',
  props: ["msg"],
  data(){    
    return {
      temp_app:this.msg,
      imgCodes:{},        
      login:{}
    }
  },
  beforeMount() {
    
    this.imgCode();
  },
  methods:{
    zjl_add(e){
      console.info(e)
    },
    // beforeMount(){
    //   console.info(123)
    //   this.imgCode();
    // },
    changeImg(){
      this.imgCode();
    },
    logins(){
      var obj ={
        strusername: this.login.strusername,
        strpassword: this.login.strpassword,
        verifycode: this.login.verifycode,
        codeId: this.imgCodes.codeId,
      }
      this.getLogin(obj);
    },
    getLogin(obj){
      var that = this;
      this.$zjl_http.post('/app/password/login',obj,(res)=>{
        var datas = res.data;
        var code = datas.code;
        if(code == 1){
          console.info(that);
          that.$router.push({
            path:"/HelloWorld2"
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">

</style>
