<template>
  <div id="nav">
    <div class="w">
      <div class="logo">
        <h1>
          <a href="/">
            <img src="../../assets/img/logo-1002.png" alt="朝花夕拾">
          </a>
        </h1>
      </div>
      <div class="menu">
        <ul class="nav-menu">
          <li><a href="/">首页</a></li>
          <li><a href="/archive">归档</a></li>
          <li><a href="/friends">友链</a></li>
          <li><a href="/about">关于</a></li>
        </ul>
      </div>
      <div class="control">
        <i class="iconfont icon-dark mode"></i>
        <i class="iconfont icon-fenlei dashboard"></i>
      </div>
    </div>
  </div>
</template>

<script setup>

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
    background: rgba(47,65,84,0.7);
    // background: transparent;
    backdrop-filter: blur(3px);

    .w {
      display: flex;
      justify-content: space-between;
      align-items: center;

    }
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

  .menu {
    .nav-menu {
      display: flex;
      
      li {
        padding: 0 12px;
      }
    }
  }

  .control {
    & > * {
      padding: 0 8px;
    }
    
    .iconfont {
      font-size: 20px;
    }
  }

  @media screen and (max-width: 520px) {
    .menu,
    .control {
      display: none;
    }
  }
</style>