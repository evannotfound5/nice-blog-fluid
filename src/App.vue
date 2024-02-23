<template>
  <div class="page" ref="pageRef">
    <!-- 导航栏 -->
    <NavItem @show-board="handlerBoard"></NavItem>
    <!-- 一级路由 -->
    <router-view></router-view>
    <!-- 页脚 -->
    <FooterItem></FooterItem>
    <!-- 移动端导航菜单 -->
    <NavBoard v-if="showBoard" @hidden-board="handlerBoard"></NavBoard>
  </div>
</template>

<script setup>
  import NavItem from './views/layout/NavItem.vue'
  import FooterItem from './views/layout/FooterItem.vue'
  import NavBoard from './components/NavBoard.vue'

  import { ref } from 'vue';

  // 是否显示移动端控制台
  const showBoard = ref(false)
  const handlerBoard = (bool) => {
    showBoard.value = bool
  }
</script>

<style lang="scss">
  .page {
    overflow: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    background-color: var(--color-bg-page);
    background-image: url('./assets/img/10001.svg');
  }

  #main {
    padding: 50px 20px;
    
    .w {
      padding: 36px 56px;
      background-color: var(--color-bg-content);
      box-shadow: var(--box-shadow-card);
      border-radius: .5rem;
    }
  }

  @media screen and (max-width: 789px) {
    #main {
      padding: 0;
      position: relative;
      top: -12px;
      left: 0;
 
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