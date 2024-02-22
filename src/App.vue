<template>
  <div class="page">
    <!-- 导航栏 -->
    <NavItem></NavItem>
    <!-- 一级路由 -->
    <router-view></router-view>
    <!-- 页脚 -->
    <FooterItem></FooterItem>
  </div>
</template>

<script setup>
import NavItem from './views/layout/NavItem.vue'
import FooterItem from './views/layout/FooterItem.vue'
</script>

<style lang="scss" scoped>
  .page {
    overflow: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    background-color: #f7f7f7;
    // background-image: url('./assets/icon/10001.svg');
  }

</style>