<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
@import '@/styles/reset.scss';
@import '@/styles/global.scss';

#app {
  height: 100vh;
  width: 100vw;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: rgb(248, 248, 255);
}
</style>
