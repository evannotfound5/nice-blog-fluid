<template>
  <div class="friend-page">
    <div class="links-box">
      <div class="hd">朋友们</div>
      <ul class="links-list">
        <li class="links-item" v-for="(item, index) in 5">
          <a href="#">
            <div class="avatar">
              <img src="https://wyun521-top-oss.oss-cn-beijing.aliyuncs.com/avatar/202402271757398.jpg" alt="">
            </div>
            <div class="info">
              <div class="title">朝花夕拾{{ index + 1 }}</div>
              <div class="desc">空山新雨后，天气晚来秋</div>
            </div>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
  
</script>

<style lang="scss" scoped>
  .links-box {

    .hd {
      padding: 12px 0;
      font-size: 1.5rem;
    }

    .links-list {
      display: flex;
      flex-wrap: wrap;
      padding: 8px 0;

      .links-item {
        flex: 0 0 33.333333%;
        max-width: 33.333333%;

        a {
          overflow: hidden;
          margin: 1rem;
          margin-left: 0;
          padding: 1rem;
          display: flex;
          height: 80px;
          border-radius: 0.3rem;

          &:hover {
            background-color: var(--color-bg-hover);
          }

          .avatar {
            img {
              width: 48px;
              height: 48px;
              border-radius: 50%;
              margin-right: 10px;
            }
          }

          .info {
            .title {
              font-size: 1.2rem;
              font-weight: 700;
              padding-bottom: 4px;
            }

            .desc {
              width: 180px;
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
            }
          }

        }
      }
    }
  }

  @media screen and (max-width: 789px) {
    .links-box {
      .links-list {
        .links-item {
          flex: 0 0 50%;
          max-width: 50%;
        }
      }
    }
  }

  @media screen and (max-width: 520px) {
    .links-box {
      .links-list {
        .links-item {
          flex: 0 0 100%;
          max-width: 100%;
        }
      }
    }
  }
</style>