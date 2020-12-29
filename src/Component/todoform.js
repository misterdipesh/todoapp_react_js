  
import { Button, TextField } from '@material-ui/core';
import React, { useState, useEffect, useRef } from 'react';

function TodoForm(props) {
  const [input, setInput] = useState('');

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let d= new Date()
    props.onSubmit({
        id:d.valueOf(),
        date:d.toLocaleString(),
        text: input
    });
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit}>
        <div style={{margin:'5px 5px'}}>
          <TextField
            variant="outlined"
            placeholder='Add a todo'
            value={input}
            onChange={handleChange}
            name='text'
            ref={inputRef}
          />
          </div>
          <Button onClick={handleSubmit} variant="contained" color='primary' >
            Add todo
          </Button>
    </form>
  );
}

export default TodoForm;