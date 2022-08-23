import React from 'react';
import { useNavigate } from 'react-router-dom';

const Detail = todos => {
  const navigate = useNavigate();
  return (
    <>
      <h3>id:{todos.id}</h3>
      <button
        onClick={() => {
          navigate('/');
        }}
        style={{ cursor: 'pointer' }}></button>
    </>
  );
};

export default Detail;
