import { AiFillHeart } from "react-icons/ai";
import { RiDeleteBin2Line } from "react-icons/ri";

function Todo({ todo, index, removeTodo, likedTodo, unLikedTodo }, props) {
  return (
    <div>
      <h4 className="post-title">Title:{todo.title}</h4>
      <div
        className="todo"
      
      >
        <p> {todo.text}</p>
       
      </div>
      <div className='action-btn'>
          <AiFillHeart
            className="heart-shape"
            style={{ color: todo.isLiked ? "#F19CBB" : "#46444F" }}
            onClick={() =>
              todo.isLiked ? unLikedTodo(index) : likedTodo(index)
            }
          ></AiFillHeart>

          <RiDeleteBin2Line
            className="trash-can"
            onClick={() => removeTodo(index)}
          ></RiDeleteBin2Line>
        </div>
    </div>
  );
}

export default Todo;
