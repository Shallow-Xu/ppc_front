<template>
  <div class="ppc">
    <app-head id="head"></app-head>
    <ul
      v-infinite-scroll="loadMore"
      infinite-scroll-disabled="loading"
      infinite-scroll-distance="10">
      <li v-for="item in list">{{ item }}</li>
    </ul>

  </div>
</template>

<script>
  import Indicator from 'mint-ui'
  import AppHead from '../components/Head'

  export default {
    name: 'ppc',

    components: {
      'app-head': AppHead
    },

    data () {
      return {
        list: [1]
      }
    },

    methods: {
      loadMore () {
        this.loading = true
        Indicator.open('加载中...')
        setTimeout(() => {
          let last = this.list[this.list.length - 1]
          for (let i = 1; i <= 20; i++) {
            this.list.push(last + i)
          }
          this.loading = false
          Indicator.close()
        }, 2500)
      }

    }
  }
</script>
