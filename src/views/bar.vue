<template>
  <div>
    <h1>hello bar</h1>
    <router-link to="/bar-child">go bar child</router-link>
    <router-link to="/foo-child">go foo child</router-link>
    <router-view></router-view>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'bar',
});
</script>
