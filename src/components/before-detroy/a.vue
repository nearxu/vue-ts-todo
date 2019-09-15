<template>
  <div>
    <ul>
      <li v-for="(item, index) in lists" :key="index">
        <router-link :to="'/list/:' + item">go {{ item }}</router-link>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component
export default class AComponent extends Vue {
  private lists = ['a', 'b', 'c', 'd'];
}
</script>
