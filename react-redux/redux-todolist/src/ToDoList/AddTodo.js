import React from 'react';

const AddTodo = ({ onAddTodo }) => {
  let todoInput = null;
  return (
    <div className="form-group form-inline">
      <input className="form-control" type="text" ref={(node) => { todoInput = node;}}/>
      <button type="button" className="btn btn-default" onClick={() => {
        onAddTodo(todoInput.value);
        todoInput.value = '';
        }}
      >
        Add
      </button>
    </div>
  );
};

export default AddTodo;
