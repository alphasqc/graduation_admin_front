<template>
  <div class="aside">
    <el-menu
        :default-active="$route.path"
        class="el-menu-vertical-demo"
        :ellipsis="false"
        :collapse="isCollapse"
        active-text-color="#337ECC"
        text-color="#C0C4CC"
        background-color="rgb(48, 65, 86)"
        :unique-opened="true"
        router
    >
        <template v-for="item in leftList" :key="item.index">
          <template v-if="item.index">
            <el-menu-item :index="item.index">
              <el-icon :size="isCollapse ? 18 : 16">
                <component :is="item.icon" />
              </el-icon>
              <span>{{ item.title }}</span>
            </el-menu-item>
          </template>
          <template v-else>
            <el-sub-menu v-for="subs in item.sub" :key="subs.index" :index="subs.index">
              <template #title>
                <el-icon :size="isCollapse ? 18 : 16">
                  <component :is="item.icon" />
                </el-icon>
                <span>{{ item.title }}</span>
              </template>
              <el-menu-item :index="subs.index">
                <el-icon :size="isCollapse ? 18 : 16" color="#C0C4CC">
                  <component :is="subs.icon" />
                </el-icon>
                <span>{{ subs.title }}</span>
              </el-menu-item>
            </el-sub-menu>
          </template>
        </template>
    </el-menu>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useStore } from 'vuex'

const leftList: { index: string; title: string; icon: string; sub: { index: string; title: string; icon: string; }[] }[] = [
  {
    index: '/primary',
    title: '首页',
    icon: 'HomeFilled',
    sub: []
  },
  {
    index: '',
    title: '表格',
    icon: 'Grid',
    sub: [
      {
        index: '/user',
        title: '用户',
        icon: 'UserFilled'
      }
    ]
  }
]

const store = useStore()
const isCollapse = computed(() => {
  return store.state.collapse
})
</script>

<style lang="scss">
$asideFontweigth: 700;

.aside{
  overflow-x: hidden;
//   overflow-y: hidden;
  height: 100%;
  background-color: rgb(48, 65, 86);
}

.aside * {
  font-weight: $asideFontweigth;
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 100vh;
}

.el-menu--collapse{
  min-height: 100vh;
}
</style>
