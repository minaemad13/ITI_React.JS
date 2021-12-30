
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const Todo=({ todo, index, markTodo, removeTodo })=> {
    return (
      <div >
        <span style={{ textDecoration: todo.isDone ? "line-through" : "" }}>{todo.text}</span>
        <div>
          <Button variant="outline-success" onClick={() => markTodo(index)}>Complete</Button>{' '}
          <Button variant="outline-danger" onClick={() => removeTodo(index)}>Remove</Button>
        </div>
      </div>
    );
  }
  export default Todo