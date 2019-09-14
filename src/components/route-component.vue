<template>
  <div>
    <router-link to="/foo">foo</router-link>
    <router-link to="/bar">bar</router-link>
    <router-view></router-view>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
export default Vue.extend({});
</script>
