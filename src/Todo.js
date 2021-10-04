

function Todo({ todo, index, completeTodo, UncompleteTodo, removeTodo, likedTodo, unLikedTodo },props) {

    
    return (

        <div>
            <h4>title:{todo.title}</h4> 
      <div
        className="todo"
        style={{ textDecoration: todo.isCompleted ? "line-through" : "" }} 
        >
      
       <p> {todo.text}</p>
        <div>
           
        <button
            onClick={() => todo.isCompleted ? UncompleteTodo(index) :
                completeTodo(index)} >
            {todo.isCompleted ? 'uncheck' : 'check'}
        </button>
                              
        <button className="heart-shape"
            style={{ backgroundColor: todo.isLiked ? "#F19CBB" : "gray" }}
            onClick={() => todo.isLiked ? unLikedTodo(index) : likedTodo(index)} >liked</button> 
    
        <button onClick={() => removeTodo(index)}>x</button>
        </div>
            </div>
            </div>
    );
  }



export default Todo;