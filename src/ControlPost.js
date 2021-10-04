import Todo from './Todo';
import TodoForm from './TodoForm';

const ControlPost = (props) => {
    return (
        <div>
            { props.post ? <TodoForm isPosting={props.isPosting} addTodo={props.addTodo} /> :props.todos.map((todo, index) => (
      <Todo
        key={index}
        index={index}
        todo={todo}
       
        removeTodo={props.removeTodo}
        likedTodo={props.likedTodo}
        unLikedTodo={props.unLikedTodo}
      
      />
    ))} 
        </div>
    )
}

export default ControlPost;