<template>
  <div id="nav-board">
    <div class="board-hd">
      <div class="control-btns">
        <i @click="toggleMode" class="iconfont icon-liangdu"></i>
        <i @click="hiddenBoard" class="iconfont icon-grouping"></i>
      </div>
    </div>
    <div class="board-bd">
      <div class="author-box">
        <img class="avatar" src="../assets/img/avatar.png" alt="奈思">
        <div class="intro">
          <div class="name">奈思</div>
          <div class="desc">空山新雨后，天气晚来秋</div>
        </div>
      </div>
      <div class="menu-box">
        <ul class="nav-menu">
          <li><router-link to="/"><i class="iconfont icon-zhuye"></i><span>首页</span></router-link></li>
          <li><router-link to="/archive"><i class="iconfont icon-_wenjianjia"></i><span>归档</span></router-link></li>
          <li><router-link to="/friends"><i class="iconfont icon-lianjie"></i><span>友链</span></router-link></li>
          <li><router-link to="/about"><i class="iconfont icon-guanyu"></i><span>关于</span></router-link></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { ref } from 'vue';

  // 切换亮暗模式
  const toggleMode = () => {
    document.documentElement.classList.toggle('dark')
  }

  // 控制移动端控制台的显示
  const emit = defineEmits(['hidden-board'])
  const hiddenBoard = () => {
    emit('hidden-board', false)
  }
</script>

<style lang="scss" scoped>
  #nav-board {
    position: fixed;
    top: 0;
    right: 0;
    z-index: 9999;
    width: 80vw;
    height: 100vh;
    background-color: var(--color-bg-page);

    .board-hd {
      height: 25vh;
      background-image: url(../assets/img/cover/cover-1002.png);
      background-position: center;
      background-size: cover;

      .control-btns {
        display: flex;
        justify-content: flex-end;
        padding: 20px;

        .iconfont {
          margin-left: 12px;
          color: var(--color-text-nav);
          font-size: 2rem;

          &:hover {
            color: var(--color-text-hover);
          }
        }
      }
    }

    .board-bd {
      height: 75vh;
      padding: 0 12px;

      .author-box {
        display: flex;
        align-items: center;
        height: 80px;
        padding: 10px;
        background-color: var(--color-bg-content);
        border-radius: 4px;
        transform: translateY(-38%);

        .avatar {
          width: 50px;
          height: 50px;
          border-radius: 6px;
        }

        .intro {
          padding-left: 16px;
          .name {
            font-size: 1rem;
            font-weight: 700;
          }

          .desc {
            font-size: .8rem;
          }
        }
      }

      .menu-box {
        background-color: var(--color-bg-content);
        border-radius: 4px;
        transform: translateY(-16px);

        .nav-menu {
          padding: 20px 16px;

          li {
            a {
              display: block;
              padding: 4px 20px;
              margin-bottom: 4px;
              border-radius: 4px;
              font-size: 1.2rem;

              .iconfont {
                margin-right: 12px;
                font-size: 1.2rem;
              }

              &:hover {
                background-color: var(--color-bg-hover);
              }
            }
          }
        }
      }
    }
  }
</style>