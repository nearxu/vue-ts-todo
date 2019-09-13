<template>
  <div class="hello">
    <h1>{{ msg | reverseMsg }}</h1>
    <prop-component
      :count="count"
      v-on:button-click="listChange"
    ></prop-component>
    <!-- <prop-component :count.sync="count"></prop-component> -->
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, PropSync } from 'vue-property-decorator';
import PropComponent from '@/components/prop-component.vue';
@Component({
  components: {
    PropComponent,
  },
  filters: {
    reverseMsg: (val: string) =>
      val
        .split('')
        .reverse()
        .join(''),
  },
})
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;
  // @PropSync('count') private innerCount!: number;
  private count = 101;

  private listChange(val: number, event: any) {
    console.log(val, event, 'emit ');
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
