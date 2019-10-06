<template>
  <div>
    <input type="checkbox" v-model="todo.checked" />
    <span>{{ todo.title }}</span>
    <button @click="onDel(todo.id)">del</button>
  </div>
</template>

<script lang="ts">
// import Vue from 'vue'
// import Component from 'vue-class-component';
import { Component, Vue, Prop, Emit } from 'vue-property-decorator';
import { Todo } from '@/type/Todo.ts';
@Component({
  components: {},
})
export default class TodoItem extends Vue {
  @Prop() private todo!: Todo;
  @Emit()
  private onDel(id: string) {
    this.$emit('handleDel', id);
  }
}
</script>
