<template>
  <footer class="foot">
    <img src="../../assets/logo.png"/>
    <div class="email">
      <p>联系我：<a href="mailto:xzszsd@qq.com">xzszsd@qq.com</a></p>
      <a href="https://github.com/Shallow-Xu/ppc"><p>Fork me on GitHub</p></a>
    </div>
  </footer>
</template>
<style lang="stylus">
  .foot {
    height: 100px;
    background-color: #f5deb3;
    display: flex;
    justify-content: space-around;
    align-items: center;
    img {
      height: 20px;
      margin-left: 10%;
      padding-right: 5%;
      border-right: 1px solid #666;
    }
    .email {
      font-size: 13px;
      p {
        margin: 10px 0;
      }
    }
  }
</style>
