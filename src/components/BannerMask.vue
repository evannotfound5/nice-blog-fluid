<template>
  <!-- 头图组件 -->
  <div id="banner">
    <div class="mask">
      <div class="title">
        {{ props.title }}
      </div>
      <div class="sub-title">
        {{ hitokoto }}
      </div>
    </div>
  </div>
</template>

<script setup>
  import axios from 'axios';
  import { ref, onMounted } from 'vue'

  const hitokoto = ref('')

  onMounted(async ()=>{
    // 一言API https://developer.hitokoto.cn/sentence/demo.html
    // 空山新雨后，天气晚来秋
    const { data } = await axios.get('https://v1.hitokoto.cn?c=d&c=i&c=j&min_length=10&max_length=20')
    hitokoto.value = data.hitokoto
  })

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
    background-color: var(--color-text-hover);
    background-image: url('../assets/img/banner/banner-1001.png');
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
      background-color: var(--color-bg-mask);
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
    
    .title {
      color: var(--color-text-nav);
      font-size: 32px;
      margin-bottom: 20px;
    }

    .sub-title {
      color: var(--color-text-nav);
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

      .sub-title {
        font-size: 14px;
      }
    }
  }
</style>