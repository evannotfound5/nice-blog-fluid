<template>
  <div id="nav" :class="{ top: props.navTransparent }">
    <div class="w">
      <div class="logo">
        <h1>
          <a href="/">
            朝花夕拾
          </a>
        </h1>
      </div>
      <div class="menu">
        <ul class="nav-menu">
          <li><router-link to="/"><i class="iconfont icon-zhuye"></i><span>首页</span></router-link></li>
          <li><router-link to="/archive"><i class="iconfont icon-_wenjianjia"></i><span>归档</span></router-link></li>
          <li><router-link to="/friends"><i class="iconfont icon-lianjie"></i><span>友链</span></router-link></li>
          <li><router-link to="/about"><i class="iconfont icon-zuozhe"></i><span>关于</span></router-link></li>
        </ul>
      </div>
      <div class="control">
        <i @click="toggleMode" class="iconfont icon-liangdu mode"></i>
        <i @click="showConsoleBoard" class="iconfont icon-fenlei dashboard"></i>
      </div>
    </div>
  </div>
  <!-- 手机端导航栏 -->
  <div id="nav-mobile" :class="{ top: props.navTransparent }">
    <div class="logo">
      <h1>
        <a href="/">
          朝花夕拾
        </a>
      </h1>
    </div>
    <div class="control">
      <i @click="showBoard" class="iconfont icon-gengduo"></i>
    </div>
  </div>
</template>

<script setup>
  import { ref, onMounted } from 'vue'
  
  // 导航栏是否透明
  const props = defineProps({
    navTransparent: {
      type: Boolean,
      default: true
    }
  })

  // 切换亮暗模式
  const toggleMode = () => {
    document.documentElement.classList.toggle('dark')
  }
  
  // 控制移动端控制台的显示
  const emit = defineEmits(['show-board','show-console-board'])
  const showBoard = () => {
    emit('show-board', true)
  }
  const showConsoleBoard = () => {
    emit('show-console-board', true)
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
    background-color: var(--color-bg-nav);
    backdrop-filter: blur(3px);
    font-family: var(--font-series1);
    box-shadow: var(--box-shadow-nav);
    transition: background-color .35s ease-in-out, height .35s ease-in-out;

    &.top {
      height: 66px;
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
        font-size: 1.4rem;

        a {
          color: var(--color-text-nav);
        }
      }
    }

    .menu {
      .nav-menu {
        display: flex;
        font-size: 1.2rem;
        
        li {
          padding: 0 8px;

          a {
            color: var(--color-text-nav);
          }

          .iconfont {
            font-size: 1.2rem;
            margin-right: 4px;
          }
        }
      }
    }

    .control {
      .iconfont {
        padding: 0 8px;
        color: var(--color-text-nav);
        font-size: 1.2rem;

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
    box-shadow: var(--box-shadow-nav);
    backdrop-filter: blur(3px);
    font-family: var(--font-series1);
    transition: background-color .35s ease-in-out, height .35s ease-in-out;

    &.top {
      height: 66px;
      background-color: transparent;
      box-shadow: var(--box-shadow-nav);
    }

    .logo {
      h1 {
        font-size: 1.2rem;

        a {
          color: var(--color-text-nav);
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