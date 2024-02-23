<template>
  <div id="footer">
    <div class="detail">
      <div class="w">
        <div class="social-link">
          <ul class="social-link">
            <li><a href="mailto:3032317941@qq.com"><i class="iconfont icon-youjian"></i></a></li>
            <li><a href="https://mysource-hexo.wyun521.top/img/my/wechat-me.png" target="_blank"><i class="iconfont icon-weixin1"></i></a></li>
            <!-- <li><a href="javascript: void(0);" target="_blank"><i class="iconfont icon-fenlei2"></i></a></li> -->
          </ul>
          <img src="@/assets/img/avatar.png" alt="奈思">
          <ul class="social-link">
            <li><a href="https://github.com/evannotfound5/" target="_blank"><i class="iconfont icon-GitHub"></i></a></li>
            <li><a href="https://juejin.cn/user/981236373005534" target="_blank"><i class="iconfont icon-juejin-logo"></i></a></li>
            <!-- <li><a href="javascript: void(0);" target="_blank"><i class="iconfont icon-shequ"></i></a></li> -->
          </ul>
        </div>
        <div class="love-link">
          <dl class="tools">
            <dt>在线工具</dt>
            <dd><a href="https://codegist.cn/" target="_blank">CodeGist</a></dd>
            <dd><a href="https://ajietextd.github.io/" target="_blank">Excalidraw</a></dd>
            <dd><a href="https://wormhole.app/" target="_blank">Wormhole</a></dd>
          </dl>
          <dl class="tools">
            <dt>生活娱乐</dt>
            <dd><a href="https://soupian.pro/" target="_blank">搜片</a></dd>
            <dd><a href="https://music.163.com/#/discover/toplist" target="_blank">网易云</a></dd>
            <dd><a href="http://8.141.94.64:8080/" target="_blank">奈思の小窝</a></dd>
          </dl>
          <dl class="tools">
            <dt>生活娱乐</dt>
            <dd><a href="https://soupian.pro/" target="_blank">搜片</a></dd>
            <dd><a href="https://music.163.com/#/discover/toplist" target="_blank">网易云</a></dd>
            <dd><a href="http://8.141.94.64:8080/" target="_blank">奈思の小窝</a></dd>
          </dl>
          <dl class="tools">
            <dt>生活娱乐</dt>
            <dd><a href="https://soupian.pro/" target="_blank">搜片</a></dd>
            <dd><a href="https://music.163.com/#/discover/toplist" target="_blank">网易云</a></dd>
            <dd><a href="http://8.141.94.64:8080/" target="_blank">奈思の小窝</a></dd>
          </dl>
          <dl class="tools">
            <dt>友情链接</dt>
            <dd><a href="https://fanyi.youdao.com/" target="_blank">有道翻译</a></dd>
            <dd><a href="https://juejin.cn/" target="_blank">掘金</a></dd>
            <dd><a href="https://aliyun.com/" target="_blank">阿里云</a></dd>
            <dd><a href="https://kkgithub.com" target="_blank">KGitHub</a></dd>
            <dd><a href="https://codepen.io/" target="_blank">CodePen</a></dd>
            <dd><a href="https://vercel.com/dashboard" target="_blank">Vercel</a></dd>
          </dl>
      </div>
      </div>
      <div class="bottom">
        <div class="w">
          <div class="bottom-l">
            Copyright By <a href="javascript: void(0);">奈思</a>
          </div>
          <div class="bottom-r">
            <span class="heart">❤</span>
            <span> 龙年大吉</span>
          </div>
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
    background-image: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, var(--color-bg-page) 25%);

    .detail {
      .social-link {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 20px 0;

        img {
          width: 72px;
          height: 72px;
          border: 1px solid #eee;
          border-radius: 50%;
          margin: 0 18px;
          transition: all .35s;

          &:hover {
            transform: rotate(720deg);
          }
        }

        a {
          display: block;
          margin: 0 12px;
          padding: 8px;
          background-color: var(--color-bg-social);
          border-radius: 50%;

          .iconfont {
            color: #fff;
            font-size: 20px;
          }

          &:hover {
            background-color: var(--color-bg);
          }

          &:hover .iconfont {
            color: var(--color-text-hover);
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
            color: var(--color-text-footer);
            font-size: 1.1rem;
            font-weight: 700;
          }

          dd {
            font-size: 1rem;
            padding-bottom: 8px;
          }
        }

        a {
          color: var(--color-text-footer);
        }
      }
    }

    .bottom {
      color: var(--color-text-footer);
      border-top: 1px solid var(--color-border);

      .w {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 72px;
      }

      a {
        color: var(--color-text-footer);
      }
    }
  }

  @media screen and (max-width: 789px) {
    #footer {
      .detail {
        .social-link {
          img {
            width: 60px;
            height: 60px;
          }
        }
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

      .detail {
        .social-link {
          img {
            width: 42px;
            height: 42px;
            margin: 0 8px;
          }
        }
      }
    }
  }
</style>