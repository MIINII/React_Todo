import React from 'react';
import TodoList from './components/TodoLIst';
import Detail from './components/Detail';
import { Routes, Route } from 'react-router-dom';
import Globalstyle from './GlobalStyles.js';

function App() {
  return (
    <>
      <Globalstyle />
      <Routes>
        <Route path='/' element={<TodoList />} />
        <Route path='/detial/:id' element={<Detail />} />
      </Routes>
    </>
  );
}

export default App;
