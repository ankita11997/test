import React from 'react'

const ListItem = ({todo, deleteTodo , editTodo}) => {
  return (
    <li className="list-group-item rounded-0 shadow-sm">
     {todo.text}
    <button className="btn btn-sm btn-danger rounded-0 float-end" 
    onClick={()=> deleteTodo(todo.id)}>
     Delete
    </button>
    <button className="btn btn-sm btn-light mx-2 rounded-0 float-end" onClick={()=>
    editTodo(todo)}>Edit</button>
   </li>
  );
}

export default ListItem
