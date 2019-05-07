import * as React from 'react';
import { Link } from 'react-router-dom';
import '@/assets/styles/header.css';

class Header extends React.Component {
  render(){
    return (
      <div>
        <div className="header">
          <ul>
            <li><Link to='/'>home</Link></li>
            <li><Link to='/list'>list</Link></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Header;