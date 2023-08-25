import Navbar from "./components/Navbar";
import Form from "./components/Form";
import ListGroup from "./components/ListGroup";
import {useState} from 'react';

const App = () => {
  const[todos, setTodos] = useState([
    {id: 1, text: "Code" },
    {id: 2, text: "Eat" },
    {id: 3, text: "Sleep" },
    {id: 4, text: "Repeat" },
  ]); 
   const [edit, setEdit] = useState({todo:{}, isEdit: false});


    const deleteTodo = (id) => {

      // short cut of code
      //  setTodos(todos.filter((todo)=> todo.id !== id));
   
      // long pattern of code
      setTodos(
        todos.filter((todo) => {
         if (todo.id !== id){
           return true;
         }
        })
     )
   
   
    };

      const saveTodo =(text)=>{
        const newTodo = {
          id: crypto.randomUUID(),
          text: text,
        };
          setTodos([newTodo, ...todos]);
      };
  
      //edit todo 
      const editTodo =(todo)=>{
         setEdit({
          todo:todo,
          isEdit: true,
         });
      };

      // update todo

      const updateTodo = (id,text)=>{
        setTodos(
          todos.map((item)=>{
            if(item.id === id){
              return{
                ...item,
                text:text,
              };
            }else{
              return item;
            }
          })
        );
        setEdit({todo: {}, isEdit: false});

        // upper code in single line how to write----
    //  1>  setTodos(todos.map((item =>item.id === id ? {...item,   text : text}:item)));
        // 2>  setEdit({todo:{},isEdit: false});
          
        
      };

   
     

   return (
    
    <>

       <Navbar/>
       <div className="container p-5">
        

         <Form saveTodo = {saveTodo}  edit = {edit}
          updateTodo={updateTodo}/>
         <ListGroup todos = {todos} deleteTodo = {deleteTodo} editTodo = {editTodo}/>

        
      </div>
    
    </>
  )
}

export default App;


