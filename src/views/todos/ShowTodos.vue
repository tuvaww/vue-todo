<template>
  <section v-if="todosOnDate.length" class="todosContainer">
    <article class="sortTodos">
      <p class="sortLinks">Show all</p>
      <p class="sortLinks">Show done</p>
      <p class="sortLinks">Show ongoing</p>
    </article>
    <section class="todosForDatesContainer">
      <article v-for="td in todosOnDate" :key="td.date" class="dateTracker">
        <div class="dates">
          <p>{{ td.date }}</p>
        </div>

        <article class="todosWrapper">
          <div v-for="todo in td.todos" :key="todo.id" class="todo">
            <div class="title">
              <p>{{ todo.title }}</p>
            </div>
            <div class="checkIcon">
              <i class="fa-solid fa-check"></i>
            </div>
          </div>
        </article>
      </article>
    </section>
  </section>
  <section v-else class="noTodosContainer">
    <p>You have nothing to do !</p>
    <router-link class="newTodoLink" :to="{ name: 'newTodo' }"
      >Create Todo</router-link
    >
  </section>
</template>

<script lang="ts">
import { ITodo } from "@/models/ITodo";
import {
  defineComponent,
  onMounted,
  onUpdated,
  watchEffect,
} from "@vue/runtime-core";
import { ref } from "vue";
import { getTodos } from "../../composables/todoCRUD";

interface ITodoOnDate {
  date: string;
  todos: ITodo[];
}
export default defineComponent({
  setup() {
    const { todoList, fetchForTodos } = getTodos();
    const sortedList = ref<string[]>([]);
    const todosOnDate = ref<ITodoOnDate[]>([]);

    fetchForTodos();

    const matchTodoToDate = () => {
      sortedList.value.forEach((date) => {
        const obj: ITodoOnDate = {
          date: date,
          todos: [],
        };

        todoList.value.forEach((todo) => {
          if (todo.date === obj.date) {
            obj.todos.push(todo);
          }
        });
        todosOnDate.value.push(obj);
      });
    };

    watchEffect(() => {
      todoList.value.forEach((todo) => {
        let date = todo.date;
        if (sortedList.value.includes(date) === false) {
          sortedList.value.push(date);
        }
      });
      matchTodoToDate();
    });

    console.log(todosOnDate.value);

    return { todosOnDate };
  },
});
</script>

<style lang="scss" scoped>
@import "styles/_variables.scss";
@import "styles/_mixins.scss";

.noTodosContainer {
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px;

  p,
  .newTodoLink {
    font-size: 17pt;
    font-weight: bolder;
    color: $smallHeaderColor;
    text-shadow: 1px 15px 3px black;
  }
  .newTodoLink {
    text-shadow: none;
    text-decoration: none;
    &:hover {
      border-bottom: 1px solid $smallHeaderColor;
    }
  }
}

.todosContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 40px;

  .sortTodos {
    color: $smallHeaderColor;
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: center;
    gap: 20px;
    font-weight: bolder;
    font-size: 14pt;

    text-shadow: 1px 15px 3px black;

    @include phone-up {
      gap: 50px;
    }

    @include tablet {
      gap: 70px;
    }

    .sortLinks {
      height: 30px;
      cursor: pointer;
      padding: 0;
      margin: 0;

      &:hover {
        border-bottom: $smallHeaderColor 1.5px solid;
      }
    }
  }

  .todosForDatesContainer {
    width: 100%;
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    .dateTracker {
      display: flex;
      width: 80%;

      .dates {
        color: rgba($lightGreen, 0.8);
        border-right: 1px solid $darkGreen;
        text-shadow: 2px 6px 4px black;
        font-size: 14pt;
        font-weight: bolder;

        padding: 20px;

        p {
          margin: 0;
        }
      }
      .todosWrapper {
        display: flex;
        flex-direction: column;
        gap: 15px;
        width: 200px;
        padding-top: 60px;
        padding-bottom: 40px;

        .todo {
          cursor: pointer;
          margin-left: 15px;
          display: flex;
          flex-direction: row;
          align-items: center;
          width: 100%;
          height: 30px;
          color: black;
          background-color: rgba($lightGreen, 0.8);
          border: 1px solid $darkGreen;
          border-radius: 10px;
          font-size: 13pt;
          box-shadow: 10px 10px 10px black;

          .title {
            width: 90%;
          }

          .fa-check {
            color: $darkGreen;
          }
        }
      }
    }
  }
}
</style>
