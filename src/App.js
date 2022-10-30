import ToDoForm from './components/ToDoForm';
import { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const baseUrl =
    'https://to-do-list-149ca-default-rtdb.europe-west1.firebasedatabase.app/';
  const urlEnding = 'todos.json';

  const [todos, setTodos] = useState([]);

  const addTodos = async (todo) => {
    const response = await fetch(baseUrl + urlEnding, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(todo),
    });
    const data = await response.json();
  };

  const fetchTodos = async () => {
    const response = await fetch(baseUrl + urlEnding);
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

  const deleteTodos = (id) => {};

  const deleteAllTodos = () => {
    const res = fetch(baseUrl + urlEnding, {
      method: 'DELETE',
    });
  };

  useEffect(() => {
    fetchTodos();
  }, [fetchTodos]);

  let content = todos.map((todo) => (
    <div className='Parents' key={todo.id}>
      <div>
        <h2 className='content'>{todo.text}</h2>
      </div>
      <div>
        <button className='Button-content' onClick={() => deleteTodos(todo.id)}>
          X
        </button>
      </div>
    </div>
  ));

  return (
    <>
      <section>
        <ToDoForm onAddTodo={addTodos} />
      </section>
      <section>{content}</section>
      <section>
        <button onClick={() => deleteAllTodos()}>Remove All</button>
      </section>
    </>
  );
};

export default App;
