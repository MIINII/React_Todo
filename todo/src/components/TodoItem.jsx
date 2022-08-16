import React, { useState } from 'react';
import './todo_item.css';
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
  flex-direction: column
  justify-content: center;
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
  border: ${props => (props.done ? `1px solid teal` : `1px solid #cab`)};
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 15px;
  cursor: pointer;
  color: ${props => props.done && `#3c3c`};
`;

const Title = styled.span`
  flex: 1;
  font-size: 16px;
  color: ${props => (props.done ? `color` : `gray`)} black;
`;

const TodoItem = props => {
  
  return (
    <div className='todo_wrap'>
      <ItemBlock>
        <CheckCircle done={props.done} onclick={props.done}>
          {props.done && <MdDone />}
        </CheckCircle>

        <Title done={props.done}>{props.item}</Title>
        <Remove>
          <MdDelete />
        </Remove>
      </ItemBlock>
    </div>
  );
};

export default TodoItem;
