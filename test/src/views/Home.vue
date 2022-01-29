<template>
  <div>
    <el-container>
      <el-header class="homeTitle">
        <!--标题-->
        <div class="title">疫情管理系统</div>
        <!--下拉菜单-->
        <el-dropdown trigger="hover" class="userInfo" @command="handleCommand">
          <span class="el-dropdown-link">
            <i><img src="../assets/cyy.jpg" alt=""></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command = "1">个人中心</el-dropdown-item>
            <el-dropdown-item command = "2">设置</el-dropdown-item>
            <el-dropdown-item command = "3">注销登录</el-dropdown-item>
          </el-dropdown-menu> 
        </el-dropdown>
      </el-header>
      <el-container>
        <!--导航栏-->
        <el-aside width="200px">
          <el-col :span="20">
            <el-menu default-active="1" @select="menuClick">
              <el-menu-item index="/Test1">
                <i class="el-icon-user-solid"></i>
                <span slot="title">系统用户管理</span>
              </el-menu-item>
              <el-menu-item index="/Test2">
                <i class="el-icon-s-data"></i>
                <span slot="title">统计数据管理</span>
              </el-menu-item>
              <el-menu-item index="/Test3">
                <i class="el-icon-s-claim"></i>
                <span slot="title">接种记录管理</span>
              </el-menu-item>
              <el-menu-item index="/Test4">
                <i class="el-icon-s-promotion"></i>
                <span slot="title">通知信息查询</span>
              </el-menu-item>
            </el-menu>
          </el-col>
        </el-aside>
        <!--内容页面-->
        <el-main>
          <!--面包屑-->
          <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/Home' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>{{this.$router.currentRoute.name}}</el-breadcrumb-item>
          </el-breadcrumb>
          <div class="container" v-if="this.$router.currentRoute.path=='/Home'">
            <!--个人信息-->
            <div class="person" >
              <div class = "person_title">
                <img src="../assets/cyy.jpg" alt="" class="avatar">
                <div class = "person_title_text">
                  <p style="16px">Admin</p>
                  <el-tag size="mini">系统管理员</el-tag>
                </div>
              </div>
              <div class="line"></div>
              <el-empty></el-empty>
            </div>
            <div class="content_container">
              <div class="content">
                <el-empty></el-empty>
              </div>
            </div>
          </div>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "Home",
  methods: {
    handleCommand(command) {
      if(command == "2") {
        this.$message("暂未开发，敬请期待！");
      } else if(command == "3"){
        this.$router.replace('/');
      } else {
        this.$router.push('/Home')
      }
    },
    menuClick(index) {
      this.$router.push(index);
    }
  }
};
</script>

<style>
  .homeTitle {
    background: #03A9F4;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0;
  }
  .homeTitle .title {
    font-family: PingFang SC;
    font-size: 25px;
    color: #fff;
  }
  .homeTitle .userInfo {
    cursor: pointer;
  }
  .el-dropdown-link {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .el-dropdown-link img{
    width: 44px;
    height: 44px;
    border-radius: 22px;
    margin: 0 8px;
  }
  .container {
    display: flex;
  }
  .person {
    width: 20vw;
    height: 75vh;
    box-shadow:  0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
    margin-top: 20px;
    padding: 20px;
  }
  .person_title {
    display: flex;
  }
  .person_title_text {
    padding: 15px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .avatar {
    width: 80px;
    height: 80px;
    border-radius: 40px;
    border: 1px solid #B0BEC5;
    margin-right: 20px;
  }
  .line {
    margin-top: 10px;
    height: 1px;
    width: 100%;
    background-color: #B0BEC5;
  }
  .content_container {
    margin-left: 20px;
  }
  .content {
    width: 100vh;
    height: 75vh;
    box-shadow:  0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
    margin-top: 20px;
  }
</style>
