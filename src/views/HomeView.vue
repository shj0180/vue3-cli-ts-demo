<template>
    <el-container>
      <el-header>
        <el-row :gutter="20">
          <el-col :span="4">
            <img src="@/assets/4.png" class="plat-logo"/>
          </el-col>
          <el-col :span="16">
            <h2>STG4应用管理平台</h2>
          </el-col>
          <el-col :span="4" class="user_info">
            用户信息
          </el-col>
        </el-row>
      </el-header>

      <el-container>
        <el-aside width="200px">
          <el-menu
            active-text-color="#ffd04b"
            background-color="#545c64"
            class="el-menu-vertical-demo"
            default-active="2"
            text-color="#fff"
            router
          >

            <el-sub-menu index="1">
              <template #title>
                <!-- <el-icon><location /></el-icon> -->
                <span >应用管理</span>
              </template>
              
              <el-menu-item :index="item.path" v-for="item in app_list" :key="item.path">
                {{ item.meta.title }}
              </el-menu-item>
              
            </el-sub-menu>

            <el-sub-menu index="2">
              <template #title>
                <!-- <el-icon><location /></el-icon> -->
                <span>数据库管理</span>
              </template>

              <el-menu-item :index="item.path" v-for="item in db_list" :key="item.path">
                {{ item.meta.title }}
              </el-menu-item>

            </el-sub-menu>

            <el-sub-menu index="3">
              <template #title>
                <!-- <el-icon><location /></el-icon> -->
                <span>Prometheus</span>
              </template>

              <el-menu-item :index="item.path" v-for="item in prometheus_list" :key="item.path">
                {{ item.meta.title }}
              </el-menu-item>
            </el-sub-menu>

            <el-sub-menu index="4">
              <template #title>
                <!-- <el-icon><location /></el-icon> -->
                <span>About</span>
              </template>

              <el-menu-item :index="item.path" v-for="item in about_list" :key="item.path">
                {{ item.meta.title }}
              </el-menu-item>
            </el-sub-menu>

          </el-menu>
        </el-aside>

        <el-main >
          Home Page
          <RouterView ></RouterView>
        </el-main>
      </el-container>
    </el-container>
</template>


<script lang="ts">
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'HomeView', 
  setup () {
    const router = useRouter()
    console.log(router.getRoutes());
    
    const app_list = router.getRoutes().filter(a => a.meta.isshow_appication)
    console.log(app_list);

    const db_list = router.getRoutes().filter(a => a.meta.isshow_db)
    console.log(db_list);

    const prometheus_list = router.getRoutes().filter(a => a.meta.isshow_prometheus)
    console.log(prometheus_list);

    const about_list = router.getRoutes().filter(a => a.meta.isshow_about)
    console.log(about_list);

    
    return {app_list, db_list, prometheus_list, about_list}
  }
})
</script>

<style lang='scss' scoped>
  
.el-header{
  height: 100px;
  background-color: rgb(153, 181, 235);
  .plat-logo{
    height: 100px;
  }
  h2, .user_info{
    text-align: center;
    height: 100px;
    line-height: 100px;
  }
}
.el-aside{
  .el-menu{
    height: calc(100vh - 100px);
  }
  
}
  
</style>