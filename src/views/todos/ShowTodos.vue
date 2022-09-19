<template>
  <section class="todosContainer">
    <article v-for="date in sortedList" :key="date" class="dateTracker">
      <div class="dates">{{ date }}</div>

      <article class="todosWrapper">
        <div v-for="todo in todoList" :key="todo.id">
          <div v-if="todo.needToBeDoneAt === date" class="todo">
            <div class="checkTodo"></div>
            <p>{{ todo.title }}</p>
          </div>
        </div>
      </article>
    </article>
  </section>
</template>

<script lang="ts">
import { defineComponent, onMounted, watchEffect } from "@vue/runtime-core";
import { ref } from "vue";
import { getTodos } from "../../composables/todoCRUD";

export default defineComponent({
  setup() {
    const { todoList, fetchForTodos } = getTodos();
    const sortedList = ref<string[]>([]);
    fetchForTodos();

    watchEffect(() => {
      todoList.value.forEach((todo) => {
        if (sortedList.value.includes(todo.needToBeDoneAt) === false) {
          sortedList.value.push(todo.needToBeDoneAt);
        }
      });
    });

    console.log("datummm", sortedList);
    console.log("todos", todoList);

    return { todoList, sortedList };
  },
});
</script>

<style lang="scss" scoped>
.todosContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 70px;

  .dateTracker {
    display: flex;
    color: white;
    width: 50%;

    .dates {
      border-right: 1px solid white;
      padding-right: 15px;
      text-shadow: 2px 6px 4px black;
    }
    .todosWrapper {
      display: flex;
      flex-direction: column;
      color: white;

      .todo {
        padding-left: 15px;
        display: flex;
        flex-direction: row;
        align-items: center;
        widows: 100%;
        gap: 15px;
        text-shadow: 10px 10px 10px black;

        .checkTodo {
          height: 10px;
          width: 10px;
          border: 1px solid white;
          border-radius: 2px;
        }
      }
    }
  }
}
</style>
