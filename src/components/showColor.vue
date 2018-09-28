<template>
    <div>
        <span @click="conflicting">
            {{values}}
        </span>
        <span @click="foo">
            mixin
        </span>
        <input type="text" v-fous v-model="values">
        <!-- <el-row>
            <el-button>默认按钮</el-button>
            <el-button @click="btn" type="primary">主要按钮</el-button>
            <el-button  @click="btn" type="success">成功按钮</el-button>
            <el-button  @click="btn"  type="info">信息按钮</el-button>
            <el-button  @click="btn"  type="warning">警告按钮</el-button>
            <el-button  @click="btn"  type="danger">危险按钮</el-button>
        </el-row> -->
        <div>
            <slot name="header"></slot>
        </div>
    </div>
</template>

<script>
var mixin = {
  methods: {
    foo: function () {
      console.log('foo')
    },
    conflicting: function () {
      console.log('from mixin')
    }
  }
}


export default {
    mixins:[mixin],
    name:"showColor",
    props:["vals"],
    data:function() {
        return {
            values:this.vals
        }
    },
    directives:{
        fous:{
            inserted(el){
                el.focus()
            }
        }
    },
    created(){
      console.info(this)  
    },
    // components:{
    //     header:this.$slots.header
    // },
    methods:{
        btn(e){
            this.values = e.target.innerText;
        }
    }
}
</script>
<style lang="less">

</style>
