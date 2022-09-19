import { ITodo } from "@/models/ITodo";
import { ref } from "vue";

const url = "http://localhost:3000/todos";

export const getTodos = () => {
  const todoList = ref<ITodo[]>([]);

  const fetchForTodos = async () => {
    try {
      const res = await fetch(url);
      if (!res.ok) {
        throw Error("no data availble");
      }
      todoList.value = await res.json();
      return todoList;
    } catch (err) {
      console.log(err);
    }
  };

  return { todoList, fetchForTodos };
};

export const setTodo = async (t: ITodo) => {
  await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(t),
  });
};
