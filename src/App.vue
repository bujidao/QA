<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <div class="header-wrapper">
      <tHeader></tHeader>
    </div>
    <div class="container-wrapper">
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
/*#app {*/
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
  /*-webkit-font-smoothing: antialiased;*/
  /*-moz-osx-font-smoothing: grayscale;*/
  /*text-align: center;*/
  /*color: #2c3e50;*/
  /*margin-top: 60px;*/
/*}*/
  html,body {
    margin: 0;
    padding: 0;
    background: deepskyblue;
  }
  .header-wrapper {
    height: 100px;
    margin: 0 auto;
    text-align: center;
    line-height: 200px;
    background: blue;
    overflow: hidden;
  }
  .container-wrapper {
    width: 100%;
    min-height: 100%;
  }
</style>
