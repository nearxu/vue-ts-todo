<template>
  <div>{{ count }}</div>
  <!-- <button @click="innerCount +=1">add count</button> -->
</template>
<script lang="ts">
import Vue from 'vue';
import { Prop, Component, PropSync } from 'vue-property-decorator';
@Component
export default class PropComponent extends Vue {
  @Prop({
    type: Number,
    validator: val => val > 100,
    required: true,
  })
  private count!: string;

  // @PropSync('count') private innerCount!: number;
}
</script>
