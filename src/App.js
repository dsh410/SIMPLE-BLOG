import NavBar from './NavBar';
import Todo from "./Todo";
import TodoForm from "./TodoForm";
import './App.css';
import { useState } from 'react';
// import "bootstrap/dist/css/bootstrap.min.css";
// import 'semantic-ui-css/semantic.min.css'


const App = () => {
  const [todos,setTodos] = useState([
    {
      text: "Learn about React",
      isCompleted: false
    }
    ,
    {
      text: "Meet friend for lunch",
      isCompleted: false
    },
    {
      text: "Build really cool todo app",
      isCompleted: false
    }
  ]);
  const addTodo = text => {
    const newTodos = [ {text} ,...todos ];
    setTodos(newTodos);
  };

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

 

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };

  const UncompleteTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = false;
    setTodos(newTodos);
  };

  const likedTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isLiked= true;
    setTodos(newTodos)
  }

  const unLikedTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isLiked= false;
    setTodos(newTodos)
  }

 
  return (
    <div className="App">
      <NavBar title='Simple blog.' />
      
         <div className="todo-list">
         <TodoForm addTodo={addTodo}    />
    
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
            UncompleteTodo={UncompleteTodo }
            removeTodo={removeTodo}
            likedTodo={likedTodo}
            unLikedTodo={unLikedTodo}
          
          />
        ))}
        
      </div>
    </div>
  );
}

export default App;


