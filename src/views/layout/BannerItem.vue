<template>
  <div id="banner">
    <div class="site-title">
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
  import { ref, onMounted, onUpdated } from 'vue'

  const hitokoto = ref('加载中...')

  onMounted(async ()=>{
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
    background-image: url('https://wyun521-top-oss.oss-cn-beijing.aliyuncs.com/wallpaper/202402271751098.png');
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

  .site-title {
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
      font-size: 2.5rem;
      font-family: var(--font-series1);
      margin-bottom: 20px;
    }

    .sub-title {
      color: var(--color-text-nav);
      font-size: 1.5rem;
      font-family: var(--font-series1);
    }
  }

  @media screen and (max-width: 789px) {

    #banner {
      height: 246px;
    }

    .site-title {
      .title {
        font-size: 1.8rem;
      }

      .sub-title {
        font-size: 1.2rem;
      }
    }
  }
</style>