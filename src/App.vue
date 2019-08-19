<template>
  <div id="app" style="display: flex;justify-self: left">
      <div :style="contentStyleObj" class="left-menu" >
              <div style="width: 100%;height: 60px;background: #515a6e;text-align: center">
                     <p style="color: black;font-size: 20px;padding: 20px">Iview后台管理</p>
              </div>
              <Menu  mode="vertical" width="200px" accordion :theme="theme1" :open-names="['1']">
                  <Submenu name="1">
                      <template slot="title">
                          <Icon type="ios-paper" />
                          内容管理
                      </template>
                      <MenuItem name="1-1" to="/hello">文章管理</MenuItem>
                      <MenuItem name="1-2">评论管理</MenuItem>
                      <MenuItem name="1-3">举报管理</MenuItem>
                  </Submenu>
                  <Submenu name="2">
                      <template slot="title">
                          <Icon type="ios-people" />
                          用户管理
                      </template>
                      <MenuItem name="2-1">新增用户</MenuItem>
                      <MenuItem name="2-2">活跃用户</MenuItem>
                  </Submenu>
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
              </Menu>
          </div>
      <div class="app-header" style="flex: 1">
         <div style="display: flex;flex-direction: column">
             <Menu  mode="horizontal" theme="light" active-name="1">
                 <MenuItem name="1">
                     <Icon type="ios-paper" />
                     内容管理
                 </MenuItem>
                 <MenuItem name="2">
                     <Icon type="ios-people" />
                     用户管理
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
                 </MenuItem>
                 <div style="float: right;padding-right: 30px;padding-top:10px">
                     <Dropdown>
                         <a href="javascript:void(0)" >
                             <div style="display: flex;justify-content: flex-start">
                                 <div style="width: 40px;height: 40px;background: red;border-radius: 20px">
                                 </div>
                                 <Icon style="padding-top:20px;padding-left: 5px" type="ios-arrow-down">
                                 </Icon>
                             </div>
                         </a>
                         <DropdownMenu slot="list">
                             <DropdownItem>个人资料</DropdownItem>
                             <DropdownItem>登入记录</DropdownItem>
                             <DropdownItem>退出登录</DropdownItem>
                         </DropdownMenu>
                     </Dropdown>
                 </div>
             </Menu>
             <div :style="contentStyleObj1">
                  <div style="height: 100%;width: 100%;padding: 5px;overflow-y:auto">
                          <router-view>

                          </router-view>
                  </div>
             </div>
             <div class="footer" style="height: 40px;width: 100%;background: #fff;text-align: center">
                  <p style="font-size: 15px;margin-top: 5px">copynight 2019</p>
             </div>
         </div>
      </div>

  </div>
</template>

<script>

export default {
  name: 'app',
  components: {

  },
    data () {
        return {
            theme1: 'dark',
            contentStyleObj:{
                height:'',
                width: '200px',
                background:"#515a6e"
            },
            contentStyleObj1:{
                height:'',
                width: '100%',
                background:'#ccc'
            }

        }
    },
    created(){
        window.addEventListener('resize', this.getHeight)
        this.getHeight()
    },
    methods:{
        getHeight(){
            this.contentStyleObj.height=window.innerHeight+'px';
            this.contentStyleObj1.height=window.innerHeight-100+'px';
        }
    }
}
</script>

<style>
#app{
    overflow-y: hidden;
    overflow-x: hidden;
}

</style>
