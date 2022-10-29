import ToDoForm from "./components/ToDoForm";
import { useState, useEffect } from "react";

const App = () => {
  const [todos, setTodos] = useState([]);

  const addTodoHandler = async (todo) => {
    console.log(todo);
    const response = await fetch(
      "https://to-do-list-149ca-default-rtdb.europe-west1.firebasedatabase.app/todos.json",
      {
        method: "POST",
        body: JSON.stringify(todo),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    console.log(data);
  };

  const fetchTodos = async () => {
    const response = await fetch(
      "https://to-do-list-149ca-default-rtdb.europe-west1.firebasedatabase.app/todos.json"
    );
    const data = await response.json();

    const fetchedTodos = [];

    for (const key in data) {
      fetchedTodos.push({
        id: key,
        text: data[key].text,
        date: data[key].date,
      });
    }

    setTodos(fetchedTodos);
  };

  useEffect(() => {
    fetchTodos();
  }, [fetchTodos]);

  let content = todos.map((todo) => (
    <div key={todo.id}>
      <h2>{todo.text}</h2>
      <h3>{todo.date}</h3>
      <br></br>
    </div>
  ));

  return (
    <>
      <section>
        <ToDoForm onAddTodo={addTodoHandler} />
      </section>
      <section>{content}</section>
    </>
  );
};

export default App;
