<template>
    <div>
        <Layout>
                <Sider hide-trigger :style="{background: '#fff'}">
                    <Menu active-name="1-1" theme="light" width="auto" :open-names="['1']">
                        <Submenu name="1">
                            <template slot="title">
                                <Icon type="ios-navigate"></Icon>
                                系统管理
                            </template>
                            <MenuItem name="1-1">
                            <router-link tag="li" to="/main/mainIndex/systemPersonnel">
                                <Icon type="ios-paper" />
                                人员管理
                            </router-link>
                            </MenuItem>
                            <MenuItem name="1-2">
                            <router-link tag="li" to="/main/mainIndex">
                                <Icon type="ios-paper" />
                                角色管理
                            </router-link>
                            </MenuItem>
                            <MenuItem name="1-3">Option 3</MenuItem>
                        </Submenu>
                        <Submenu name="2">
                            <template slot="title">
                                <Icon type="ios-keypad"></Icon>
                                Item 2
                            </template>
                            <MenuItem name="2-1">Option 1</MenuItem>
                            <MenuItem name="2-2">Option 2</MenuItem>
                        </Submenu>
                        <Submenu name="3">
                            <template slot="title">
                                <Icon type="ios-analytics"></Icon>
                                Item 3
                            </template>
                            <MenuItem name="3-1">Option 1</MenuItem>
                            <MenuItem name="3-2">Option 2</MenuItem>
                        </Submenu>
                    </Menu>
                </Sider>
                <Layout>                    
                    <Content>
                        <router-view></router-view>
                    </Content>
                </Layout>
            </Layout>
    </div>
</template>

<script>
export default {
    data () {
            return {
                theme2: 'dark'
            }
        }
}
</script>

<style>

</style>
