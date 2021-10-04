import { useState } from "react";

function TodoForm({ addTodo,isPosting } ) {
  const [blog, setBlog] = useState("");
  const [blogTitle,setBlogTitle]=useState("");
 
  
    const handleSubmit = e => {
      e.preventDefault();
      if (!blog) return;
      if (!blogTitle) return;
      addTodo(blogTitle,blog);
      setBlog("");
      isPosting()
    };
    
  
    return (
        
      <form onSubmit={handleSubmit} className="form">
        <label>Title:</label>
        <input type="text"
          className="title-input"
          value={blogTitle}
          onChange={e => setBlogTitle(e.target.value)}
          

        />
        <textarea
          type="text"
          className="text-area"
          value={blog}
            onChange={e => setBlog(e.target.value)}
            required
        />
          <button className="btn btn-post"  > post </button>
          <button onClick={isPosting}>back</button>
        </form>
            
       
    );
  }
  
export default TodoForm;