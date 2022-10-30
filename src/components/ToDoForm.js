import { useRef } from 'react';

const ToDoForm = (props) => {
  const textRef = useRef('');
  //const dateRef = useRef("");

  const submitHandler = (event) => {
    event.preventDefault();

    const todo = {
      text: textRef.current.value,
      //date: dateRef.current.value,
    };

    props.onAddTodo(todo);

    textRef.current.value = '';
    //dateRef.current.value = "";
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          type='text'
          placeholder='Add...'
          name='text'
          ref={textRef}
          className='inputfeild'
        />
        <button className='Button'>
          <i className='fa fa-plus'></i>
        </button>
      </form>
    </div>
  );
};

export default ToDoForm;
