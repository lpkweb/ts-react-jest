import * as React from 'react';
import Header from '@/common/header/Header';
import TodoList from '@/components/todolist/TodoList';

class Home extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <TodoList />
      </div>
    );
  }
}

export default Home;