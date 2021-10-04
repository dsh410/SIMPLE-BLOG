

function Todo({ todo, index, completeTodo, UncompleteTodo, removeTodo, likedTodo, unLikedTodo },props) {

    
    return (

        <div>
            <h4 className="post-title">title:{todo.title}</h4> 
      <div
        className="todo"
        style={{ textDecoration: todo.isCompleted ? "line-through" : "" }} 
        >
      
       <p> {todo.text}</p>
        <div>
           
      
                              
        <button className="heart-shape"
            style={{ backgroundColor: todo.isLiked ? "#F19CBB" : "#46444F",color:"#F19CBB" }}
                        onClick={() => todo.isLiked ? unLikedTodo(index) : likedTodo(index)} >{todo.isLiked?'Unlike' : 'Heart'}</button>
    
        <button onClick={() => removeTodo(index)}>x</button>
        </div>
            </div>
            </div>
    );
  }



export default Todo;