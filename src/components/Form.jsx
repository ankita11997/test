import React, { useEffect, useState} from "react";

const form = ({saveTodo,edit,updateTodo}) => {
 
  const[text, setText] = useState(""); 


   const handleSubmit = (e) => {
    e.preventDefault();
    if(edit.isEdit){
      updateTodo(edit.todo.id,text);
    }else{
      saveTodo(text);
    }
    setText("");
   };

    //component life cycle
       useEffect(()=>{
        setText(edit.todo.text);
       },[edit]);

  return (
    <form className="my-3" onSubmit={(e) => handleSubmit(e)}>
            <input type="text" placeholder="Enter Text here..."

            onChange={(e)=> setText(e.target.value)} 
            value={text}
            className="form-control rounded-0 my-3" required></input>
             <button className="btn btn-warning w-100 rounded-0">Save A
             </button>
        </form>
  );
};

export default form
