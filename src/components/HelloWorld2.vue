<template>
    <div class="header">
        <!-- <span class="demonstration">默认</span>
            <el-date-picker
            v-model="inputValue"
            type="date"
            placeholder="选择日期">
            </el-date-picker> -->
        <input type="text" v-model="inputValue">
       <span @click="getValue">
           {{inputValue}}
       </span>
       <hr/>
       <showHtml ref="whateverName" :vals='inputValue' style="color:red"><div slot="header"> {{inputValue}}</div></showHtml>
       <!-- <showHtml/> -->
    </div>
</template>

<script>
import showColor from './showColor.vue';
export default {
        data() {
            return {
                isActive:true,
                inputValue:'2018',
                
            }
        },
        created(){
            console.info(this)
        },
        components:{
            showHtml:showColor,
            
        },
        methods: {
            getValue:function(){
                console.info(this.$refs.whateverName.values)
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
    .active{
        color: red;
    }
</style>
