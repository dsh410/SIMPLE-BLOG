import NavBar from './NavBar';

import ControlPost from "./ControlPost";
import './App.css';
import { useState } from 'react';
// import "bootstrap/dist/css/bootstrap.min.css";
// import 'semantic-ui-css/semantic.min.css'


const App = () => {
  const [todos,setTodos] = useState([
    {
      title:"Get Started",
      text: "Learn about React",
      isCompleted: false
    }
    ,
    {
      title:"Build your network",
      text: "Meet friend for lunch",
      isCompleted: false
    },
    {
      title:'Create that app',
      text: "Build really cool todo app",
      isCompleted: false
    }
  ]);


  const [post, setPost] = useState(false);


  const addTodo = (title,text) => {
    const newTodos = [{ title ,text},...todos ];
    setTodos(newTodos);
  };


  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
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
  const isPosting = (e) => setPost(false);
  const addPost = () => setPost(true);
  

  

 
  return (
    <div className="App">
      <NavBar title='Simple blog.' />
      
      <div className="todo-list">

        <ControlPost addTodo={addTodo} todos={todos}  removeTodo={removeTodo}
            likedTodo={likedTodo}
          unLikedTodo={unLikedTodo}
          post={post}
          isPosting={isPosting}
          addPost={addPost}
        
        />
        
       
        
      </div>
    </div>
  );
}

export default App;


