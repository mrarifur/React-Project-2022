const ToDoItem = (props) => {
  const clickHandler = () => {
    console.log("Now in the clickHandler");
    props.removeHandler(props.id);
  };

  return (
    <div>
      <p>{props.title}</p>
      <button onClick={clickHandler}>Remove</button>
    </div>
  );
};

export default ToDoItem;
