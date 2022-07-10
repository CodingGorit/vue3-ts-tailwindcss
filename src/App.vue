<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from './components/HelloWorld.vue'
import NavigationBar from './components/navigationBar/index.vue';
</script>

<template>
  <NavigationBar />
  <div class="md:container md:mx-auto">
    <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
    <div class="flex space-x-3">
      <div id="left-content">
        <router-view/>
      </div>
      <div id="right-content">
        侧边栏
      </div>
    </div>
  </div>
</template>

<style scoped>
#left-content {
  width: 75%;
  background-color: aqua;
}

#right-content {
  width: 24%;
  height: 200px;
  max-height: 220px;
  background-color: antiquewhite;
}
</style>
