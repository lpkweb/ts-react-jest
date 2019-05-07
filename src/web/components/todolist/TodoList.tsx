import * as React from 'react';
import { Input,Button } from 'antd';
import 'antd/dist/antd.css';
import '@/assets/styles/todolist.css';

class TodoList extends React.Component {
  render() {
    return (
      <div>
        <div className='todo-list'>
          <Input 
            placeholder="list info"
           style={{width:'300px',marginRight:'10px'}}
          />
          <Button type="primary" >提交</Button>
        </div>
      </div>
    );
  }
}

export default TodoList;