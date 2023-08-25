import ListItem from "./ListItem";

const listGroup = ({todos, deleteTodo, editTodo}) => {
  return (
    <ul className="list-group my-3">

  {todos.map((todo) =>(
        <ListItem key={todo.id} todo={todo}  deleteTodo={deleteTodo} editTodo={editTodo}/>
  ))}
   
  </ul>
  );
};

export default listGroup;
