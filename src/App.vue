<template>
  <div id="app">
      <Loading :active="isLoading" :is-full-page="true" :color="color"></Loading>
    <router-view></router-view>
  </div>
</template>

<script>
// Import component
import Loading from 'vue-loading-overlay';
// Import stylesheet
import 'vue-loading-overlay/dist/vue-loading.css';

export default {
  name: 'App',
  components: {Loading},
  data() {
    return {
      color: '#7CFC00'
    }
  },
  computed: {
    isLoading() {
      return this.$store.getters.IS_LOADING;
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
