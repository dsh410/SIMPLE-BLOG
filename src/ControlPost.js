import Todo from "./Todo";
import TodoForm from "./TodoForm";
import { AiFillPlusSquare } from "react-icons/ai";

const ControlPost = (props) => {
  return (
    <div className="control-div">
      <AiFillPlusSquare
        onClick={props.addPost}
        style={{ visibility: !props.post ? "visible" : "hidden" }}
        className="plus-symbol"
      />
      {props.post ? (
        <TodoForm
          isPosting={props.isPosting}
          title={props.title}
          setTitle={props.setTitle}
          index={props.index}
          addTodo={props.addTodo}
          post={props.post}
        />
      ) : (
        props.todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            removeTodo={props.removeTodo}
            likedTodo={props.likedTodo}
            unLikedTodo={props.unLikedTodo}
          />
        ))
      )}
    </div>
  );
};

export default ControlPost;
