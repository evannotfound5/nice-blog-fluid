<template>
  <div class="home-page">
    <BannerMask></BannerMask>
    <div id="main">
      <div class="w">
        <div class="article-list">
          <div class="article-item" v-for="item in 3">
            <div class="cover-box">
              <a href="#">
                <img src="../assets/img/cover/cover-1005.png" alt="">
              </a>
            </div>
            <div class="article-box">
              <div class="article-title">
                <a href="#">Hello NiceBlogFluid!</a>
              </div>
              <div class="article-intro">
                <a href="#">
                  欢迎体验 Fluid ，这是一款 Material Design 风格的 Hexo 主题，以简约的设计帮助你专注于写作，本篇文章可预览主题的样式及功能。
                  欢迎体验 Fluid ，这是一款 Material Design 风格的 Hexo 主题，以简约的设计帮助你专注于写作，本篇文章可预览主题的样式及功能。
                </a>
              </div>
              <div class="article-metas">
                <div class="article-meta">
                  <i class="iconfont icon-riqi"></i>
                  <span>2024-02-22</span>
                </div>
                <div class="article-meta">
                  <i class="iconfont icon-fenlei2"></i>
                  <span>前端</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import BannerMask from '@/components/BannerMask.vue';
</script>

<style lang="scss" scoped>
  .article-item {
    display: flex;
    margin-bottom: 40px;

    .cover-box {        
      img {
        width: 218px;
        height: 160px;
        object-fit: cover;
        vertical-align: top;
        border-radius: 4px;
        box-shadow: var(--box-shadow-cover);
      }
    }

    .article-box {
      flex: 1;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      margin-left: 24px;

      .article-title {
        height: 50px;
        line-height: 50px;
        // 单行文本溢出隐藏
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;

        a {
          color: var(--color-text);
          font-size: 1.25rem;
          font-weight: 700;
        }
      }

      .article-intro {
        flex: 1;
        // 多行文本溢出隐藏
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;

        a {
          color: var(--color-text-article-desc);
          font-size: 1rem;
          line-height: 1.5;
        }
      }

      .article-metas {
        display: flex;
        height: 36px;
        line-height: 36px;
        font-size: .9rem;

        .article-meta {
          margin-right: 20px;
          color: var(--color-text-article-desc);

          .iconfont {
            color: var(--color-text-article-desc);
            margin-right: 4px;
          }
        }
      }
    }
  }

  @media screen and (max-width: 520px) {
    .article-item {
      display: block;

      .cover-box {
        img {
          width: 100%;
        }
      }

      .article-box {
        margin-left: 0;
      }
    }
  }
</style>