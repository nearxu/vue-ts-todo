<template>
  <div>
    <h1>{{ $route.params.id }}</h1>
    <h2>{{ count }}</h2>
  </div>
</template>

<script lang="ts">
// import Vue from 'vue';
// import Component from 'vue-class-component';
import { Watch, Component, Vue } from 'vue-property-decorator';
import { Route } from 'vue-router';

@Component
export default class BComponent extends Vue {
  private count: number = 0;
  private timer: any = null;
  mounted() {
    console.log(this.$route);
    this.addCount();
  }
  beforeDestroy() {
    console.log('beforesDestroy');
    clearInterval(this.timer);
    this.timer = null;
  }
  @Watch('$route', { immediate: true })
  private changeRoute(route: Route) {
    console.log(route, 'route');
    clearInterval(this.timer);
    this.timer = null;
    this.count = 0;
    this.addCount();
  }
  private addCount(): void {
    this.timer = setInterval(() => {
      this.count += 1;
    }, 1000);
  }
  // beforeRouteEnter(
  //   to: Route,
  //   from: Route,
  //   next: (vm: ThisType<this>) => void,
  // ): void {
  //   next((vm: this): void => {
  //     // do something
  //     if (to.name === from.name && to.params.id !== from.params.id) {
  //       clearInterval(this.timer);
  //       this.timer = null;
  //     }
  //   });
  // }
  // beforeRouteEnter(to: Route, from: Route, next: () => void): void {
  //   console.log('beforeRouteEnter');
  //   next();
  // }
  // beforeRouteUpdate(to: Route, from: Route, next: () => void): void {
  //   console.log('beforeRouteUpdate'); //暂时不生效，版本问题
  //   next();
  // }
  // beforeRouteLeave(to: Route, from: Route, next: () => void): void {
  //   console.log('beforeRouteLeave');
  //   next();
  // }
}
</script>
