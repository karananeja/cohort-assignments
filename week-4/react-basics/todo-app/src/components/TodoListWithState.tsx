import { useState } from 'react';

type NewTodoType = { text: string; desc: string };

const TodoListWithState = () => {
  const [text, setText] = useState<string>('');
  const [desc, setDesc] = useState<string>('');
  const [todos, setTodos] = useState<NewTodoType[]>([]);

  const handleClick = () => {
    const newTodo: NewTodoType = { text, desc };
    setTodos((prev) => [...prev, newTodo]);
  };

  return (
    <div className='todoListWithState'>
      <div className='inputFields'>
        <label className='label' htmlFor='text'>
          Enter the Text
        </label>
        <input
          className='text'
          id='text'
          type='text'
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <label className='label' htmlFor='desc'>
          Enter the Description
        </label>
        <textarea
          className='desc'
          id='desc'
          rows={2}
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />

        <button className='btn' onClick={handleClick}>
          Create TODO
        </button>
      </div>

      <div className='todoList'>
        {todos.map((todo, index) => (
          <div className='todoCard' key={index}>
            <div className='todoText'>Text: {todo.text}</div>
            <div className='todoDesc'>Desc: {todo.desc}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoListWithState;
