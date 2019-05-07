import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import routes from '@/routes/Routes';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          {routes}
        </div>
      </BrowserRouter>
    );
  }
}

export default App;