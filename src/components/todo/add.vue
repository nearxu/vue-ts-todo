<template>
  <div>
    <input type="text" v-model="title" />
    <button @click="onAdd">submit</button>
  </div>
</template>
<script lang="ts">
// import Vue from 'vue'
import { Component, Vue, Emit } from 'vue-property-decorator';
import { Todo } from '@/type/Todo.ts';

@Component({
  components: {},
})
export default class AddTodo extends Vue {
  private title: string = '';

  @Emit()
  public onAdd(event: Event): Todo {
    event.preventDefault();
    const newTodo: Todo = {
      id: '',
      title: this.title,
      completed: false,
    };
    this.title = '';
    return newTodo;
  }
}
</script>
