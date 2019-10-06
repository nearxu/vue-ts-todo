<template>
  <div>
    <add-todo></add-todo>
    <ul>
      <li v-for="(todo, index) in todos" :key="index">
        <todo-item :todo="todo"></todo-item>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
// import Vue from 'vue'
import { Component, Vue } from 'vue-property-decorator';
import AddTodo from '@/components/todo/add.vue';
import TodoItem from '@/components/todo/item.vue';
import { Todo } from '@/type/Todo.ts';

@Component({
  components: {
    AddTodo,
    TodoItem,
  },
})
export default class TodoComponent extends Vue {
  private todos!: Todo[];
}
</script>
