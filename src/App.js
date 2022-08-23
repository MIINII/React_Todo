import React from 'react';
import TodoList from './components/TodoLIst';
import Detail from './components/Detail';
import Globalstyle from './GlobalStyles.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<TodoList />} />
        <Route path='/detial/:id' element={<Detail />} />
        <Globalstyle />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
