<template>
  <div>
    <div>{{ count }}</div>
    <button @click="emitChange">emit</button>
    <input type="text" v-model="value" ref="name" />
  </div>
  <!-- <button @click="innerCount +=1">add count</button> -->
</template>
<script lang="ts">
import Vue from 'vue';
import { Prop, Component, PropSync, Emit, Ref } from 'vue-property-decorator';
@Component
export default class PropComponent extends Vue {
  @Prop({
    type: Number,
    validator: val => val > 100,
    required: true,
  })
  private count!: string;
  private count1 = 0;
  @Emit('button-click')
  private emitChange() {
    this.count1 += 1;
    return this.count1;
  }

  @Ref('name')
  readonly name!: string;
  private value = 'lorry';

  private mounted() {
    console.log(this.name);
  }

  // @PropSync('count') private innerCount!: number;
}
</script>
