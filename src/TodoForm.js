import { useState } from "react";

function TodoForm({ addTodo, isPosting }) {
  const [blog, setBlog] = useState("");
  const [blogTitle, setBlogTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!blog) return;
    if (!blogTitle) return;
    addTodo(blogTitle, blog);
    setBlog("");
    isPosting();
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <h3 className="create-blog-post-title">create blog post</h3>
      <input
        type="text"
        className="title-input"
        value={blogTitle}
        placeholder="Title"
        onChange={(e) => setBlogTitle(e.target.value)}
      />
      <textarea
        type="text"
        className="text-area"
        placeholder="Blog Post..."
        value={blog}
        onChange={(e) => setBlog(e.target.value)}
        required
      />
      <button className="btn btn-post"> post </button>
      <button onClick={isPosting}>back</button>
    </form>
  );
}

export default TodoForm;
