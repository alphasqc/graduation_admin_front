<template>
  <div class="home">
    <el-container style="height: 100vh;background-color: #FFFFFF;">
      <el-aside width="auto">
        <aside-view/>
      </el-aside>
      <el-container>
        <el-header style="padding: 0;" height="80px">
          <header-view/>
          <tags-view/>
        </el-header>
        <el-main>
          <!-- 路由过渡动效 -->
          <router-view v-slot="{ Component }">
          <transition name="move" mode="out-in">
              <keep-alive>
                  <component :is="Component" />
              </keep-alive>
          </transition>
          </router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts" setup>
import AsideView from '@/components/layout/AsideView.vue'
import HeaderView from '@/components/layout/HeaderView.vue'
import TagsView from '@/components/layout/TagsView.vue'
</script>

<style lang="scss">
@media screen and (max-width: 560px) {
  .el-aside{
    display: none;
  }
}
</style>
