import React from 'react';
import './todo.css';
import styled from 'styled-components';
import { MdDone, MdDelete } from 'react-icons/md';

const Remove = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: red;
  cursor: pointer;
  &:hover {
    color: blue;
  }
  display: none;
`;

const ItemBlock = styled.div`
  display: flex;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 12px;
  &:hover {
    ${Remove} {
      display: initial;
    }
  }
`;

const CheckCircle = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 16px;
  border: ${props => (props.done ? `1px solid teal`:`1px solid #cab`)};
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 15px;
  cursor: pointer;
  color: ${props => (props.done && `#3c3c` )};
`;

const Title = styled.span`
  flex: 1;
  font-size: 16px;
  color: ${props => (props.done ? `color` : `gray`)} black;
`;

const Todo = ({id, done, text}) => {
  return (
    <div className='todo_wrap'>
      <ItemBlock>
        <CheckCircle done={done}> {done && <MdDone />}</CheckCircle>
        <Title done={done}>{text}</Title>
        <Remove>
          <MdDelete/>
        </Remove>
      </ItemBlock>
    </div>
  );
};

export default Todo;
