import { useRef } from 'react';

const ToDoForm = (props) => {
  const textRef = useRef('');

  const submitHandler = (event) => {
    event.preventDefault();

    const todo = {
      text: textRef.current.value,
    };

    props.onAddTodo(todo);

    textRef.current.value = '';
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          type='text'
          placeholder='...'
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
