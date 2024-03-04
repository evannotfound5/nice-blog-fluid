<template>
  <div class="home-page">
    <div class="article-list">
      <div class="article-item" v-for="article in articleList" :key="article.article_id">
        <div class="cover-box">
          <router-link :to="`/article/${article.article_id}`">
            <img :src="article.article_cover_img" alt="">
          </router-link>
        </div>
        <div class="article-box">
          <div class="article-title">
            <router-link :to="`/article/${article.article_id}`">{{ article.article_title }}</router-link>
          </div>
          <div class="article-intro">
            <router-link :to="`/article/${article.article_id}`">
              {{ article.article_desc }}
            </router-link>
          </div>
          <div class="article-metas">
            <div class="article-meta">
              <i class="iconfont icon-riqi"></i>
              <span>{{ article.article_create_date.split(' ')[0] }}</span>
            </div>
            <div class="article-meta">
              <i class="iconfont icon-fenlei2"></i>
              <span>{{ article.article_cate_id }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { getArticleListAPI } from '@/api/article';
  import { ref, onMounted } from 'vue'

  const articleList = ref([])
  const params = {
    pageNum: 1,
    pageSize: 10
  }

  onMounted(async ()=>{
    const { data, total } = await getArticleListAPI(params)
    articleList.value = data
  })
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