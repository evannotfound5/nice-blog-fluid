<template>
  <div id="footer">
    <div class="detail">
      <div class="w">
        <ul class="social-link">
          <li><a href="javascript: void(0);"><i class="iconfont icon-biaoqian"></i></a></li>
          <li><a href="javascript: void(0);"><i class="iconfont icon-fenlei1"></i></a></li>
          <li><a href="javascript: void(0);"><i class="iconfont icon-shezhi"></i></a></li>
        </ul>
        <div class="love-link">
          <dl class="tools">
            <dt>在线工具</dt>
            <dd><a href="javascript: void(0);">CodeGist</a></dd>
            <dd><a href="javascript: void(0);">CodeGist</a></dd>
          </dl>
          <dl class="tools">
            <dt>在线工具</dt>
            <dd><a href="javascript: void(0);">CodeGist</a></dd>
            <dd><a href="javascript: void(0);">CodeGist</a></dd>
          </dl>
          <dl class="tools">
            <dt>在线工具</dt>
            <dd><a href="javascript: void(0);">CodeGist</a></dd>
            <dd><a href="javascript: void(0);">CodeGist</a></dd>
          </dl>
          <dl class="tools">
            <dt>在线工具</dt>
            <dd><a href="javascript: void(0);">CodeGist</a></dd>
            <dd><a href="javascript: void(0);">CodeGist</a></dd>
          </dl>
          <dl class="tools">
            <dt>在线工具</dt>
            <dd><a href="javascript: void(0);">CodeGist</a></dd>
            <dd><a href="javascript: void(0);">CodeGist</a></dd>
          </dl>
        </div>
      </div>
    </div>
    <div class="bottom">
      <div class="w">
        <div class="bottom-l">
          Copyright By <a href="javascript: void(0);">奈思</a>
        </div>
        <div class="bottom-r">
          <span class="heart">❤</span>
          <span> 龙年大吉！</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
  #footer {
    padding: 0 36px;
    // 从上往下，透明色渐变到白色
    background-image: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #fff 25%);

    .detail {
      .social-link {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 20px 0;

        a {
          display: block;
          margin: 0 12px;
          padding: 8px;
          background-color: #000;
          border-radius: 50%;

          .iconfont {
            color: #fff;
            font-size: 20px;
          }

          &:hover {
            background-color: #eee;
          }

          &:hover .iconfont {
            color: #30a9de;
          }

        }
      }
      
      .love-link {
        overflow: hidden;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        padding: 20px 0;

        dl {
          dt {
            padding-bottom: 20px;
            color: rgba(60, 60, 67, 0.8);
            font-size: 18px;
            font-weight: 700;
          }

          dd {
            padding-bottom: 8px;
          }
        }

        a {
          color: #000;
        }
      }
    }

    .bottom {
      border-top: 1px solid #e3e8f7;

      .w {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 72px;
      }

      a {
        color: #000;
      }
    }
  }

  @media screen and (max-width: 789px) {
    #footer {
      .detail {
        .love-link {
          dl {
            padding: 20px;
          }
        }
      }
    }
  }

  @media screen and (max-width: 520px) {
    #footer {
      padding: 0 28px;
    }
  }
</style>