<template>
  <section class="todosContainer">
    <article class="sortTodos">
      <p class="sortLinks">Show all</p>
      <p class="sortLinks">Show done</p>
      <p class="sortLinks">Show ongoing</p>
    </article>
    <section class="todosForDatesContainer">
      <article v-for="date in sortedList" :key="date" class="dateTracker">
        <div class="dates">
          <p>{{ date }}</p>
        </div>

        <article class="todosWrapper">
          <div v-for="todo in todoList" :key="todo.id">
            <div v-if="todo.needToBeDoneAt === date" class="todo">
              <div class="title">
                <p>{{ todo.title }}</p>
              </div>
              <div class="checkIcon">
                <i class="fa-solid fa-check"></i>
              </div>
            </div>
          </div>
        </article>
      </article>
    </section>
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

    fetchForTodos();

    watchEffect(() => {
      todoList.value.forEach((todo) => {
        let date = todo.needToBeDoneAt;
        if (sortedList.value.includes(date) === false) {
          sortedList.value.push(date);
        }
      });
    });

    onUpdated(() => {
      matchTodoToDate();
    });

    const test: ITodoOnDate[] = [];
    const matchTodoToDate = () => {
      const obj: ITodoOnDate = {
        date: "",
        todos: [],
      };

      sortedList.value.forEach((date) => {
        /*  if(test.includes(date)){

      } */
      });
    };

    //console.log("datummm", sortedList);
    console.log("todos", todoList);

    return { todoList, sortedList };
  },
});
</script>

<style lang="scss" scoped>
@import "styles/_variables.scss";
@import "styles/_mixins.scss";

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
        color: rgba(#7fa99b, 0.8);
        padding-left: 10px;
        border-right: 1px solid $darkGreen;
        padding-right: 15px;
        text-shadow: 2px 6px 4px black;
        font-size: 14pt;
        font-weight: bolder;

        p {
          margin: 0;
        }
      }
      .todosWrapper {
        display: flex;
        flex-direction: column;
        gap: 20px;
        width: 200px;
        padding-top: 20px;

        .todo {
          cursor: pointer;
          margin-left: 15px;
          display: flex;
          flex-direction: row;
          align-items: center;
          width: 100%;
          height: 30px;
          color: black;
          /*  background-color: rgba(#113f67, 0.7);
          border: 1px solid#a2a8d3; */
          /*   background-color: rgba(#113f67, 0.7);
          border: 1px solid#430f58; */
          background-color: rgba(#7fa99b, 0.8);
          border: 1px solid #155263;
          border-radius: 10px;
          font-size: 13pt;
          box-shadow: 10px 10px 10px black;

          .title {
            width: 90%;
          }

          .fa-check {
            /*  color: #236969; */
            color: $darkGreen;
          }
        }
      }
    }
  }
}
</style>
