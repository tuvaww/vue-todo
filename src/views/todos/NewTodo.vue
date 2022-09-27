<template>
  <section class="formContainer">
    <form class="todoForm" @submit.prevent="handleSubmit">
      <div class="separate">
        <label for="title">Title:</label>
        <input v-model="title" id="title" type="text" placeholder="Titel..." />
      </div>
      <div class="separate">
        <label for="needToBeDoneAt">Set a date:</label>
        <input v-model="date" id="needToBeDoneAt" type="date" />
      </div>
      <div class="separate">
        <label for="desc">Add a description:</label>
        <textarea
          v-model="desc"
          name="test"
          id="desc"
          cols="30"
          rows="10"
          placeholder="Max 300 characters"
        ></textarea>
      </div>
      <button>Create</button>
    </form>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref } from "@vue/runtime-core";
import { setTodo } from "../../composables/todoCRUD";
import { ITodo } from "../../models/ITodo";
export default defineComponent({
  setup() {
    const title = ref("");
    const date = ref("");
    const desc = ref("");

    const translateDate = (d: string) => {
      let newDate = new Date(d);
      let translateDate = newDate.toLocaleDateString("EN-US", {
        month: "long",
        day: "2-digit",
      });

      return translateDate;
    };

    const handleSubmit = () => {
      const createdTodo: ITodo = {
        id: "",
        title: "",
        date: "",
        isDone: false,
        description: "",
      };

      createdTodo.title = title.value;
      createdTodo.date = translateDate(date.value);
      createdTodo.description = desc.value;

      setTodo(createdTodo);
    };

    return { title, date, desc, handleSubmit };
  },
});
</script>

<style lang="scss" scoped>
.formContainer {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;

  .todoForm {
    color: #dbd8e3;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 27px;
    width: 50%;

    .separate {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 3px;

      input,
      textarea {
        color: white;
        border-radius: 10px;
        height: 20px;
        background-color: rgba(#a2a8d3, 0.7);
        border: 1px solid #113f67;
      }
      ::placeholder {
        color: white;
        opacity: 1;
      }
      textarea {
        height: 200px;
      }
    }
    button {
      color: #dbd8e3;
      width: 80px;
      height: 22px;
      border-radius: 10px;
      background-color: #113f67;
      border: 1px solid #113f67;
      box-shadow: 3px 2px 20px 4px #dbd8e3;
    }
  }
}
</style>
