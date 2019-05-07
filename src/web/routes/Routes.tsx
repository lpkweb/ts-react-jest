import * as React from 'react';
import { Route } from 'react-router-dom';
import Home from '@/components/home/Home';
import List from '@/components/list/List';

export default (
  <div>
    <Route path='/' exact component={Home} />
    <Route path='/list' exact component={List} />
  </div>
);