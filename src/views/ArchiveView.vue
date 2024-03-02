<template>
  <div class="archive-page">
    <div class="cate-box">
      <div class="hd">分类</div>
      <div class="bd">
        <ul class="cate-list">
          <li class="cate-item"><a href="#">前端</a></li>
          <li class="cate-item"><a href="#">后端</a></li>
          <li class="cate-item"><a href="#">兴趣</a></li>
        </ul>
      </div>
    </div>
    <div class="archive-box">
      <div class="hd">归档</div>
      <div class="bd">
        <div class="archive-total">共计 19 篇文章</div>
        <ul class="article-list">
          <li class="article-item" v-for="item in 10">
            <a href="#">
              <span class="article-date">2024-02-23</span>
              <span class="article-title">Vercel 部署高级用法教程</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>

</script> 

<style lang="scss" scoped>
  .archive-page {
    .hd {
      padding: 10px 0;
      color: var(--color-text);
      font-size: 1.5rem;
      font-weight: 700;
      text-align: center;

      &::before,
      &::after {
        content: '-';
        padding: 0 4px;
      }
    }

    .cate-box {
      
      .cate-list {
        display: flex;
        justify-content: center;
        padding: 20px;

        .cate-item {
          margin: 0 10px;

          a {
            padding: 8px 16px;
            font-size: 1.8rem;
            border-radius: 4px;
            transition: color 0.2s ease-in-out, background-color 0.2s ease-in-out;

            &:hover {
              background-color: var(--color-bg-hover);
            }
          }
        }
      }
    }

    .archive-box {
      .archive-total {
        padding: 12px 20px;
        font-size: 1.2rem;
      }

      .article-list {
        padding-top: 10px;
        .article-item {

          a {
            display: flex;
            padding: 12px 20px;
            margin-bottom: 4px;
            border-radius: 2px;
            transition: color 0.2s ease-in-out, background-color 0.2s ease-in-out;

            &:hover {
              background-color: var(--color-bg-hover);
            }

            .article-date {
              margin-right: 20px;
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
            }

            .article-title {
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
            }
          }
        }
      }
    }
  }

  @media screen and (max-width: 520px) {
    .archive-page {
      .cate-box {
        .cate-list {
          .cate-item {
            margin: 0;

            a {
              padding: 8px 12px;
              font-size: 1.3rem;
            }
          }
        }
      }
    }
  }
</style>