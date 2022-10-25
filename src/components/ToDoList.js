import ToDoItem from "./ToDoItem";

const ToDoList = (props) => {
  return (
    <div>
      {props.toDoList.map((object) => (
        <ToDoItem
          key={object.id}
          id={object.id}
          title={object.title}
          removeHandler={props.removeHandler}
        />
      ))}
    </div>
  );
};

export default ToDoList;
