import FormTodo from "./FormTodo";
import Todo from "./Todo";
import { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

const TodoApp = () =>{
    const [todos, setTodos] = useState([
        {
          text: "First",
          isDone: false
        }
      ]);
    
      const addTodo = text => {
        const newTodos = [...todos, { text }];
        setTodos(newTodos);
      };
    
      const markTodo = index => {
        const newTodos = [...todos];
        newTodos[index].isDone = true;
        setTodos(newTodos);
      };
    
      const removeTodo = index => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
      };
    
      return (
        <div className="app">
          <div className="container">
            <h1 className="text-center mb-4">Todo List</h1>
            <FormTodo addTodo={addTodo} />
            <div>
              {todos.map((todo, index) => (
               
                   <div key={index}> <Todo
                    key={index}
                    index={index}
                    todo={todo}
                    markTodo={markTodo}
                    removeTodo={removeTodo}
                    /></div>
                 
              ))}
            </div>
          </div>
        </div>
      );
}

export default TodoApp;