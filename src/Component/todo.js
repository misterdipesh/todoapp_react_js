  
import CancelIcon from '@material-ui/icons/Cancel';
import { Card } from '@material-ui/core';

const Todo = ({ todos, removeTodo}) => {

    return todos.map((todo, index) => (
    <div style={{padding:'5px 5px'}}>
        <Card>
            {todo.date}<br/>
            {todo.text}
            <CancelIcon  style={{float:'right'}} onClick={() => removeTodo(todo.id)}/>
        </Card>
    </div>
  ));
};

export default Todo;