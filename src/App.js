import NavBar from './NavBar';
import DisplayTodo from './DisplayTodo';
import './App.css';
import { useState } from 'react';
// import "bootstrap/dist/css/bootstrap.min.css";
// import 'semantic-ui-css/semantic.min.css'


const App = () => {
  const [todos, setTodos] = useState([
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
  return (
    <div className="App">
      <NavBar title='Simple blog.' />
      {todos.map((todo, index) => (
          <DisplayTodo
            key={index}
            index={index}
            todo={todo}
           
          />
        ))}
    </div>
  );
}

export default App;


