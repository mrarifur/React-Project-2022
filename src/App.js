import ToDoList from "./components/ToDoList";
import { useState } from "react";

const testList = [
  {
    id: 1,
    title: "Buy food",
  },
  {
    id: 2,
    title: "Do homework",
  },
  {
    id: 3,
    title: "Exercise",
  },
];

function App() {
  const [toDoItems, setToDoItems] = useState(testList);

  const removeHandler = (id) => {
    console.log("Removed task " + id);
    setToDoItems((prevToDoItems) =>
      prevToDoItems.filter((item) => {
        return item.id !== id;
      })
    );
  };

  return (
    <div>
      <h1>To Do</h1>
      <ToDoList toDoList={testList} removeHandler={removeHandler} />
      <button>Add</button>
    </div>
  );
}

export default App;
