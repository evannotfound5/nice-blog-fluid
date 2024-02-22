<template>
  <!-- 头图组件 -->
  <div id="banner">
    <div class="mask">
      <div class="title">
        {{ props.title }}
      </div>
      <div class="desc">
        忽有清风化剑气，直斩二十少年意
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    default: '朝花夕拾'
  }
})
</script>

<style lang="scss" scoped>
  #banner {
    position: relative;
    height: 400px;
    background-color: #30a9de;
    background-image: url('../assets/img/banner.png');
    background-position: center center;
    background-size: cover;
    transition: height .35s;

    // 遮罩
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0,0,0,.3);
    }
  }

  .mask {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    color: #fff;

    .title {
      font-size: 32px;
      margin-bottom: 20px;
    }

    .desc {
      font-size: 22px;
    }
  }

  @media screen and (max-width: 789px) {

    #banner {
      height: 246px;
    }

    .mask {
      .title {
        font-size: 24px;
      }

      .desc {
        font-size: 14px;
      }
    }
  }
</style>