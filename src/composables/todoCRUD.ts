import { ITodo } from "@/models/ITodo";
import { ref } from "vue";

export const getTodos = () => {
  const todoList = ref<ITodo[]>([]);

  const fetchForTodos = async () => {
    try {
      const res = await fetch("http://localhost:3000/");
      if (!res.ok) {
        throw Error("no data availble");
      }
      todoList.value = await res.json();
      console.log("todolist i fetch", todoList.value);

      return todoList;
    } catch (err) {
      console.log(err);
    }
  };

  return { todoList, fetchForTodos };
};

export const setTodo = async (t: ITodo) => {
  console.log(t);

  await fetch("http://localhost:3000/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(t),
  });
};
