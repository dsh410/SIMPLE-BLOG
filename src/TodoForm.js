import { useState } from "react";

function TodoForm({ addTodo,isPosting } ) {
  const [value, setValue] = useState("");
  const [blogTitle, setBlogTitle] = useState('');
  
    const handleSubmit = e => {
      e.preventDefault();
      if (!value) return;
      addTodo(value);
      setValue("");
      isPosting()
    };
    
  
    return (
        
      <form onSubmit={handleSubmit} className="form">
        <label>Title:</label>
        <input type="text"
          className="title-input"

        />
        <textarea
          type="text"
          className="text-area"
          value={value}
            onChange={e => setValue(e.target.value)}
            required
        />
          <button className="btn btn-post"  > post </button>
          <button onClick={isPosting}>back</button>
        </form>
            
       
    );
  }
  
export default TodoForm;