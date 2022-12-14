import React from 'react';
import styled from 'styled-components';
import { MdDone, MdDelete } from 'react-icons/md';
import './todo.css';

const Remove = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: red;
  cursor: pointer;
  &:hover {
    color: #f70d1a;
  }
  display: none;
`;

const ItemBlock = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-wrap: wrap;
  width: 300px;
  
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
  border: ${props => (props.isDone ? `1px solid #008080` : `1px solid #43BFC7`)};
  font-size: 16px;
  font-weight: 800;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 15px;
  cursor: pointer;
  color: ${props => props.isDone && `#4C787E`};
`;

const Title = styled.span`
  flex: 1;
  font-size: 16px;
  font-weight: 600;
  margin-right: 10px;
  color: ${props => (props.isDone ? `gray` : `#2c2f33`)};
  text-decoration-line: ${props => props.isDone && `line-through`};
`;

const Con = styled.span`
  // flex: 1;
  font-size: 14px;
  margin-right: 20px;
  color: ${props => (props.isDone ? `gray` : `#2c2f33`)};
  text-decoration-line: ${props => props.isDone && `line-through`};
`;

const Todo = ({ todos, onToggle, onRemove }) => {
  console.log('호잇', todos);
  const { id, title, con, isDone } = todos;

  return (
    <div className='todoitem'>
      <ItemBlock>
        <CheckCircle isDone={isDone} onClick={() => onToggle(id)}>
          {isDone && <MdDone />}
        </CheckCircle>

        <Title isDone={isDone}>{title}</Title>
        <Con isDone={isDone}>{con}</Con>

        <Remove onClick={() => onRemove(id)}>
          <MdDelete />
        </Remove>
      </ItemBlock>
    </div>
  );
};

export default Todo;

// {todos.map(todos => {
//   if (todos.isDone === false) {
//     return <Todo todos={todos} key={todos.id} onRemove={onRemove} onToggle={onToggle} />;
//   }
// })}
