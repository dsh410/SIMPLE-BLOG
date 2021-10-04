import { useState } from "react";

function TodoForm({ addTodo } ,props) {
    const [value, setValue] = useState("");
  
    const handleSubmit = e => {
      e.preventDefault();
      if (!value) return;
      addTodo(value);
      setValue("");
    };
  
    return (
        <div>
            <form onSubmit={handleSubmit}>
          
        <input
          type="text"
          className="input"
          value={value}
          onChange={e => setValue(e.target.value)}
        />
                <button className="btn btn-post" onClick={()=>props.isPosting} >create post +</button>
        </form>
            
        </div>
    );
  }
  
export default TodoForm;