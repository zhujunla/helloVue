<template>
    <div>
        <div>
            <Menu mode="horizontal" :theme="theme1" active-name="1">
                <div class="fl clearfix" style="color:white">
                    <div class="fl ml20" style="line-height:40px">
                        <img class=" mt10" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHoAAAAiCAYAAACQhM1+AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjkyNTM0OUI0MjVDRjExRTg5Rjk1QjE3RTMwQjQ0MTkzIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjkyNTM0OUI1MjVDRjExRTg5Rjk1QjE3RTMwQjQ0MTkzIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6OTI1MzQ5QjIyNUNGMTFFODlGOTVCMTdFMzBCNDQxOTMiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6OTI1MzQ5QjMyNUNGMTFFODlGOTVCMTdFMzBCNDQxOTMiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7uAIZwAAAGt0lEQVR42uyb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" alt="">
                    </div>
                    <div class="fl ml20 f20">
                        固体废物管理信息系统（企业端）
                    </div>
                </div>
                <div class="fr">
                <MenuItem name="1">
                    <!-- <router-link tag="li" to="/main/mainIndex"> -->
                    <Icon type="ios-paper" />
                        <span>{{username}}</span>
                    <!-- </router-link> -->
                </MenuItem>
                <!-- <MenuItem name="2">
                    <router-link tag="li" to="/main/mainuserManagement">
                        <Icon type="ios-people" />
                        用户管理
                    </router-link>
                </MenuItem>
                <Submenu name="3">
                    <template slot="title">
                        <Icon type="ios-stats" />
                        统计分析
                    </template>
                    <MenuGroup title="使用">
                        <MenuItem name="3-1">新增和启动</MenuItem>
                        <MenuItem name="3-2">活跃分析</MenuItem>
                        <MenuItem name="3-3">时段分析</MenuItem>
                    </MenuGroup>
                    <MenuGroup title="留存">
                        <MenuItem name="3-4">用户留存</MenuItem>
                        <MenuItem name="3-5">流失用户</MenuItem>
                    </MenuGroup>
                </Submenu>
                <MenuItem name="4">
                    <Icon type="ios-construct" />
                    综合设置
                </MenuItem> -->
                </div>
                
            </Menu>
        </div>
        <div>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
var userData = function(){
   return window.sessionStorage.getItem("userData");
}
// console.info(userData)
export default {
    data () {
            return {
                theme1: 'primary',
                username:userData()?JSON.parse(userData()).name:"未命名"
            }
        }
    }
</script>

<style>

</style>
