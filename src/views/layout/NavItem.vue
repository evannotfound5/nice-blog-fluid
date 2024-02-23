<template>
  <div id="nav" :class="{ top: isTop }">
    <div class="w">
      <div class="logo">
        <h1>
          <a href="/">
            <img src="../../assets/img/logo/logo-1002.png" alt="朝花夕拾">
          </a>
        </h1>
      </div>
      <div class="menu">
        <ul class="nav-menu">
          <li><router-link to="/"><i class="iconfont icon-zhuye"></i><span>首页</span></router-link></li>
          <li><router-link to="/archive"><i class="iconfont icon-_wenjianjia"></i><span>归档</span></router-link></li>
          <li><router-link to="/friends"><i class="iconfont icon-lianjie"></i><span>友链</span></router-link></li>
          <li><router-link to="/about"><i class="iconfont icon-guanyu"></i><span>关于</span></router-link></li>
        </ul>
      </div>
      <div class="control">
        <i @click="toggleMode" class="iconfont icon-liangdu mode"></i>
        <i class="iconfont icon-fenlei dashboard"></i>
      </div>
    </div>
  </div>
  <!-- 手机端导航栏 -->
  <div id="nav-mobile">
    <div class="logo">
      <h1>
        <a href="/">
          <img src="../../assets/img/logo/logo-1002.png" alt="朝花夕拾">
        </a>
      </h1>
    </div>
    <div class="control">
      <i @click="showBoard" class="iconfont icon-grouping"></i>
    </div>
  </div>
</template>

<script setup>
  import { ref } from 'vue'
  
  // TODO 监听页面滚动
  const isTop = ref(false)

  // 切换亮暗模式
  const toggleMode = () => {
    document.documentElement.classList.toggle('dark')
  }
  
  // 控制移动端控制台的显示
  const emit = defineEmits(['show-board'])
  const showBoard = () => {
    emit('show-board', true)
  }
</script>

<style lang="scss" scoped>
  #nav {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    width: 100%;
    height: 50px; 
    padding: 0 20px;
    background: var(--color-bg-nav);
    backdrop-filter: blur(3px);

    &.top {
      height: 80px;
      background-color: transparent;
      box-shadow: var(--box-shadow-nav);
    }

    .w {
      display: flex;
      justify-content: space-between;
      align-items: center;

    }
  }

  #nav {
    .logo {
      h1 {
        font-size: 18px;

        img {
          width: 138px;
          height: 28px;
        }
      }
    }

    .menu {
      .nav-menu {
        display: flex;
        font-size: .9rem;
        
        li {
          padding: 0 8px;

          a {
            color: var(--color-text-nav);
          }

          .iconfont {
            font-size: .8rem;
            margin-right: 4px;
          }
        }
      }
    }

    .control {
      .iconfont {
        padding: 0 8px;
        color: var(--color-text-nav);

        &:hover {
          color: var(--color-text-hover);
          cursor: pointer;
        }
      } 
    }
  }

  #nav-mobile {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    display: none;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 50px; 
    padding: 0 10px;
    background: var(--color-bg-nav);
    backdrop-filter: blur(3px);

    &.top {
      height: 80px;
      background-color: transparent;
      box-shadow: var(--box-shadow-nav);
    }

    .logo {
      h1 {
        font-size: 18px;

        img {
          width: 138px;
          height: 28px;
        }
      }
    }

    .control {
      .iconfont {
        padding: 0 8px;
        color: var(--color-text-nav);
        font-size: 1.5rem;

        &:hover {
          color: var(--color-text-hover);
          cursor: pointer;
        }
      } 
    }
  }

  @media screen and (max-width: 520px) {
    #nav {
      display: none;
    }

    #nav-mobile {
      display: flex;
    }
  }
</style>