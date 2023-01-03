<template>
  <div class="login">
    <div class="loginbox">
        <el-button type="primary" @click="loginjump()">login</el-button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import router from '@/router'

const loginjump = () => {
  router.push('/home')
}
</script>

<style lang="scss" scoped>
$inCenter: 50%;

.loginbox{
    position: absolute;
    left: $inCenter;
    top: $inCenter;
    transform: translate(-$inCenter, -$inCenter);
}
</style>
