<template>
  <div @scroll="handlerScroll" class="page">
    <!-- 导航栏 -->
    <NavItem :navTransparent="navTransparent" @show-board="handlerBoard" @show-console-board="handlerConsoleBoard">
    </NavItem>
    <!-- 头图 -->
    <BannerItem title="朝花夕拾"></BannerItem>
    <div id="main" :class="{ 'scroll-up': scrollUP }">
      <div class="w">
        <!-- 一级路由 -->
        <router-view :scrollUP="scrollUP"></router-view>
      </div>
    </div>
    <!-- 页脚 -->
    <FooterItem></FooterItem>
  </div>
  <div class="board">
    <!-- 移动端侧边栏 -->
    <NavBoard v-if="showBoard" @hidden-board="handlerBoard"></NavBoard>
    <!-- 总控制台 -->
    <ConsoleBoard v-if="showConsoleBoard"></ConsoleBoard>
  </div>
</template>

<script setup>
  import NavItem from './views/layout/NavItem.vue'
  import BannerItem from './views/layout/BannerItem.vue';
  import FooterItem from './views/layout/FooterItem.vue'
  import NavBoard from './components/NavBoard.vue'
  import ConsoleBoard from './components/ConsoleBoard.vue'

  import { ref } from 'vue';

  // 导航栏是否透明
  const navTransparent = ref(true)
  // 是否将主体区域上移
  const scrollUP = ref(false)
  const handlerScroll = (e) => {
    if (e.target.scrollTop === 0) {
      navTransparent.value = true
      scrollUP.value = false
    } else if (e.target.scrollTop > 0 && navTransparent.value) {
      navTransparent.value = false
      scrollUP.value = true
    }
  }

  // 是否显示移动端控制台
  const showBoard = ref(false)
  const handlerBoard = (bool) => {
    showBoard.value = bool
  }

  // 是否显示总控制台
  const showConsoleBoard = ref(false)
  const handlerConsoleBoard = (bool) => {
    showConsoleBoard.value = !showConsoleBoard.value
  }


</script>

<style lang="scss" scoped>
  .page {
    overflow: auto;
    height: 100%;
    background-color: var(--color-bg-page);
  }

  #main {
    padding: 50px 20px;
    transition: padding .35s ease-in, transform .35s ease-out;
    
    .w {
      padding: 36px 56px;
      background-color: var(--color-bg-content);
      box-shadow: var(--box-shadow-card);
      border-radius: .5rem;
    }
  }

  @media screen and (min-width: 789px) {
    #main {
      &.scroll-up {
        padding: 0;
        transform: translateY(-66px);
      }
    }
  }

  @media screen and (max-width: 789px) {
    #main {
      padding: 0;
      transform: translateY(-12px);

      .w {
        padding: 36px 44px;
      }
    }
  }

  @media screen and (max-width: 520px) {
    #main {   
      .w {
        padding: 36px 20px;
      }
    }
  }

</style>