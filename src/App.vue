<template>
  <router-link to="/">Home</router-link> &nbsp;| &nbsp;
  <router-link to="/about">About</router-link> &nbsp;| &nbsp;
  <router-link to="/jobs">Jobs</router-link> 
 
  <router-view></router-view>
</template>

<script>
  


export default {
  name: 'App',
 
}
</script>

<style>
#app{
  text-align: center;
  font-size: 28px;
  text-decoration: none;
}
</style>

