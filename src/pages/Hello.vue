<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h1>{{ msg_cn }}</h1>
    <p>{{ redict_msg }}</p>
  </div>

</template>

<script>
  export default {
    name: 'hello',
    data () {
      return {
        msg: 'Welcome to PPC',
        msg_cn: '欢迎来到葩葩虫',
        redict_msg: '页面准备中，请稍后…'
      }
    },
    methods: {}
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  a {
    color: #42b983;
  }
</style>
