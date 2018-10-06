<template>
  <div class="hello">
    <!--<h1>{{ msg }}</h1>-->
    <el-container>
      <el-main>
        <div class="menu-wrapper">
          <el-row>
            <el-col :span="6">
              <el-button type="primary" round @click="toQuestionnaireSurvey">
                问卷调查
              </el-button>
            </el-col>
            <el-col :span="6">
              <el-button type="primary" round>
                统计分析
              </el-button>
            </el-col>
            <el-col :span="6">
              <el-button type="primary" round>
                后台管理
              </el-button>
            </el-col>
            <el-col :span="6">
              <el-button type="primary" round>
                系统管理
              </el-button>
            </el-col>
          </el-row>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    methods: {
      toQuestionnaireSurvey () {
          this.$router.push("QuestionnaireSurvey")
      }
    }
  }
</script>

<style scoped>
  .header-wrapper {
    text-align: center;
    font-size: 20px;
  }
  .menu-wrapper {
    width: 1200px;
    margin: 0 auto;
    text-align: center;
    margin-top: 20%;
  }
</style>
