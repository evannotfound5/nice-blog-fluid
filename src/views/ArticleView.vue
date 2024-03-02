<template>
  <div class="article-page">
    <h1>标题1</h1>
    <h2>标题2</h2>
    <h3>标题3</h3>
    <h4>标题4</h4>
    <h4>标题5</h4>
    <h4>标题6</h4>

    <blockquote>引用文本</blockquote>

    <pre>
      <code>代码块</code>
    </pre>

    <p>
      <strong>加粗</strong>
      <em>倾斜</em>
      <a href="https://vercel.com/">Vercel</a>
      <code>highlight.js</code>
      <kbd>键盘</kbd>
    </p>

    <ul>
      <li>苹果</li>
      <li>橙子</li>
      <li>香蕉</li>
    </ul>

    <ol>
      <li>第一</li>
      <li>第二</li>
      <li>第三</li>
    </ol>

    <table>
      <thead>
        <tr>
          <th>姓名</th>
          <th>性别</th>
          <th>年龄</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>小明</td>
          <td>男</td>
          <td>20</td>
        </tr>
        <tr>
          <td>小红</td>
          <td>女</td>
          <td>18</td>
        </tr>
      </tbody>
    </table>

    <hr>

    <img src="https://wyun521-top-oss.oss-cn-beijing.aliyuncs.com/avatar/202402271757398.jpg" alt="">
    <img src="https://wyun521-top-oss.oss-cn-beijing.aliyuncs.com/img/202402051223579.png" alt="">
  </div>
</template>

<script setup>
  
</script>

<style lang="scss" scoped>

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 700;
  }

  a {
    color: var(--color-text-hover);
  }

  a:hover {
    text-decoration: underline;
  }

  ul {
    li {
      list-style-type: disc;
    }
  }

  ol {
    li {
      list-style-type: decimal;
    }
  }

  strong,
  em {
    padding: 0.25rem 0.4rem;
  }

  code,
  kbd {
    color: var(--color-text-hover);
    font-size: .85rem;
    padding: 0.25rem 0.4rem;
    margin: 0px 4px;
    background-color: var(--color-bg-hover);
    border: 1px solid var(--color-border);
    border-radius: .2rem;
  }

  blockquote {
    padding: .8rem 1.2rem;
    margin: .8rem 0;
    color: var(--color-text-article-desc);
    border-left: .25em solid #dfe2e5;
  }

  hr {
    margin: .8rem 0;
    border-color: var(--color-border);
  }

  img {
    display: block;
    margin: .8rem auto;
    padding: .4rem;
    max-height: 456px;
    border: 1px solid var(--color-border);
    border-radius: .2rem;
    box-sizing: content-box;
  }

  ul {
    margin: .8rem;
  }

  ol {
    margin: .8rem;
  }

  table {
    th {
      background-color: var(--color-text-hover);
    }
    td {
      border: 1px solid var(--color-border);
    }
  }
</style>