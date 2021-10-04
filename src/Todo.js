import { AiFillHeart,AiFillPlusSquare } from 'react-icons/ai';
import { RiDeleteBin2Line } from 'react-icons/ri';



function Todo({ todo, index,  removeTodo, likedTodo, unLikedTodo },props) {

    
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
    
        <RiDeleteBin2Line className="trash-can" onClick={() => removeTodo(index)}></RiDeleteBin2Line>
                </div>
             
            </div>
           
            </div>
            
    );
  }



export default Todo;