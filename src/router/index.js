import Vue from 'vue';
import VueRouter from 'vue-router';
import login from '@/components/login/login.vue';//登录界面
import main from '@/components/main/main.vue';//后台主要框架
import mainIndex from '@/components/main/index/index.vue';//内容管理
import mainuserManagement from '@/components/main/userManagement/userManagement.vue';//用户管理
import HelloWorld2 from '@/components/HelloWorld2.vue';

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
            {
            path: '/',
            redirect: '/login'
            },
            { path: '/login', component: login },//登录界面
            { path: '/main',
                component: main,
                redirect: '/main/mainIndex',
                children:[
                    {
                        path:"mainIndex",
                        component:mainIndex
                    },
                    {
                        path:"mainuserManagement",
                        component:mainuserManagement
                    }
                ]
            },
        ]
});
