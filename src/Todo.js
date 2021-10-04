import { AiFillHeart } from 'react-icons/ai';

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
           
      
                              
        <AiFillHeart className="heart-shape"
            style={{ color: todo.isLiked ? "#F19CBB" : "#46444F", }}
                        onClick={() => todo.isLiked ? unLikedTodo(index) : likedTodo(index)} ></AiFillHeart>
    
        <button onClick={() => removeTodo(index)}>x</button>
        </div>
            </div>
            </div>
    );
  }



export default Todo;