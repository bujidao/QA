<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <el-container>
      <div class="steps">
        <el-steps :active="active" finish-status="success">
          <el-step title="步骤 1"></el-step>
          <el-step title="步骤 2"></el-step>
          <el-step title="步骤 3"></el-step>
        </el-steps>
      </div>
      <div class="content-wrapper">
      </div>
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
    }
  }
</script>

<style scoped>
</style>
