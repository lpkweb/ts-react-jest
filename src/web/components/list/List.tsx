import * as React from 'react';
import Header from '@/common/header/Header';
import '@/assets/styles/list.css';

class List extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <span className="list-span">this is a list page.</span>
      </div>
    );
  }
}

export default List;