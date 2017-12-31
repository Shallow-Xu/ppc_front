<template>
  <div id="app">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="文章" name="first">
        <div class="block">
          <ul>
            <li v-for="item in tableData">
              <div class="text_detail">
                <p>{{item.content}}</p>
                <a>收录时间：</a><a v-text="formatTime(item.addTime)"/>
                <!--<a :href="item.url">查看原文</a>-->
              </div>
            </li>
          </ul>
          <div class="block">
            <el-pagination
              class="pull-right clearfix"
              @current-change="handleCurrentChange"
              :current-page.sync="pageNo"
              :page-sizes="pageSizesList"
              :page-size="pageSize"
              layout="total, prev, pager, next, jumper"
              :total="totalDataNumber">
            </el-pagination>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="关于" name="second">
        <img src="./assets/logo.png"/>
        <div class="email">
          <p>联系我：<a href="mailto:xzszsd@qq.com">xzszsd@qq.com</a></p>
          <a href="https://github.com/Shallow-Xu/ppc"><p>Fork me on GitHub</p></a>
        </div>
      </el-tab-pane>
    </el-tabs>

  </div>
</template>

<script>
  import ElButton from 'element-ui/packages/button/src/button'

  export default {
    components: {ElButton},
    name: 'app',
    data () {
      return {
        activeName: 'first',
        pageNo: 1,
        pageSize: 10,
        pageSizesList: [10, 15, 20, 30, 50],
        tableData: this.getText(),
        totalDataNumber: 0
      }
    },
    methods: {
      handleClick (tab, event) {
        console.log(tab, event)
      },
      getText (pageNum, pageSize) {
        console.log(`${pageNum}`)
        console.log(`${pageSize}`)

        this.$http.get('/api/text',
          {
            params: {
              'pageNum': pageNum,
              'pageSize': pageSize
            }
          }
        ).then(response => {
          console.log(response)

          if (response.data.data.content.length > 0) {
            this.tableData = response.data.data.content
            this.totalDataNumber = response.data.data.totalElements
            // this.listLoading = false
            this.$message({
              message: '刷新成功',
              type: 'success'
            })
          } else {
            this.tableData = []
            this.totalDataNumber = 0
          }
        }, response => {
          this.$message({
            message: '找不到服务器了…',
            type: 'error'
          })
        })
      },
      formatTime (timestamp) {
        var newDate = new Date()
        return newDate.toLocaleString()
      },
      handleCurrentChange (val) {
        var pageNo = `${val}`
        var pageSize = this.pageSize
        this.getText(parseInt(pageNo), parseInt(pageSize))
      }
    }
  }
</script>

<style>
  html, body,
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

  .text_detail {
    align-items: center;
    text-align: left;
    margin-bottom: 10px;
    border-bottom: 1px solid darkgrey;
    width: 60%;
    height: 10%;
    margin: 0 auto;

  }

  img {
    height: 20px;
    margin-left: 10%;
    padding-right: 5%;
  }

  li {
    list-style-type: none;
  }


</style>
