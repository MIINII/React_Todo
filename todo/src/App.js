import React from 'react';
import Globalstyle from './GlobalStyles.js';
import Layout from './layout/Layout';
import TodoList from './pages/TodoList.jsx';

function App(props) {
  return (
    <div>
      <React.Fragment>
        <Layout />
        <Globalstyle />
      </React.Fragment>
    </div>
  );
}

export default App;
