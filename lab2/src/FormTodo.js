
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const FormTodo=({ addTodo })=> {
    const [value, setValue] = useState("");
  
    const handleSubmit = e => {
      e.preventDefault();
      if (!value) return;
      addTodo(value);
      setValue("");
    };
  
    return (
      <form onSubmit={handleSubmit}> 
    
        <label><b>Add Todo</b></label>
        <input type="text" className="form-control" value={value} onChange={e => setValue(e.target.value)} placeholder="Add new todo" />
    
      <Button variant="primary mb-3" type="submit">
        Submit
      </Button>
    </form>
    );
  }
  export default FormTodo;