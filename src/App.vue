<template>
  <div id="app">
    <app-head></app-head>
    <keep-alive>
      <router-view class="fadeView"></router-view>
    </keep-alive>
    <app-foot></app-foot>
  </div>
</template>

<script>
  import AppFoot from '@/components/public/Foot'
  import AppHead from '@/components/public/Head'

  export default {
    name: 'app',
    components: {
      'app-foot': AppFoot,
      'app-head': AppHead
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 0px;
    margin-left: 20px;
    margin-right: 20px;

  }

  .page {
    position: relative;
    z-index: 99;
    transition: all 0.5s;
  }
</style>
