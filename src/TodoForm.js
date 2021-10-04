import { useState } from "react";

function TodoForm({ addTodo,isPosting,post } ) {
    const [value, setValue] = useState("");
  
    const handleSubmit = e => {
      e.preventDefault();
      if (!value) return;
      addTodo(value);
      setValue("");
      isPosting()
    };
    
  
    return (
        <div>
            <form onSubmit={ handleSubmit }>
          
        <input
          type="text"
          className="input"
          value={value}
            onChange={e => setValue(e.target.value)}
            required
        />
          <button className="btn btn-post"  > post </button>
          <button onClick={isPosting}>back</button>
        </form>
            
        </div>
    );
  }
  
export default TodoForm;