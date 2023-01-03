<template>
  <div class="header">
    <div class="collapse-btn" @click="collapseChage">
        <el-icon v-if="!collapse" size="20"><Fold /></el-icon>
        <el-icon v-else size="20"><Expand /></el-icon>
    </div>
    <span>head</span>
    <span>head</span>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const collapse = computed(() => {
  return store.state.collapse
})
const collapseChage = () => {
  store.commit('handleCollapse', !collapse.value)
}
</script>

<style lang="scss">
.header{
  border-bottom: 1px solid #D4D7DE;
  height: 64%;
  display: flex;
  align-items: center;
  justify-content: space-around;
}

</style>
