import { createContext, useState } from 'react';
import { useImmer } from 'use-immer';

export const TodoActionContext = createContext();

export function TodoActionProvider({ children }) {
  const [todoList, updateTodoList] = useImmer(todoItems);
  const [filter, setFilter] = useState('All');

  const changeTodo = (id) => {
    updateTodoList((todoList) => {
      const item = todoList.find(data => data.id === id);
      item.isDone = !item.isDone;
    })
  }

  const deleteTodo = (id) => {
    updateTodoList((todoList) => {
      const index = todoList.findIndex((data) => data.id === id);
      todoList.splice(index, 1);
    })
  }

  const AddTodo = (text) => {
    try {
      let lastId;
      if(todoList.length === 0) {
        lastId = 1;
      } else {
        lastId = todoList[todoList.length-1].id + 1;
      }
      updateTodoList((todoList) => {
        todoList.push({
          id: lastId,
          text,
          isDone: false,
        });
      })
      return true;
    } catch (err) {
      alert('에러!');
      return false;
    }
  }

  return (
    <TodoActionContext.Provider value={{ todoList, changeTodo, deleteTodo, AddTodo, filter, setFilter }} >
      {children}
    </TodoActionContext.Provider>
  )

}


const todoItems = 
[
  {
    id: 1,
    text: '공부하기',
    isDone: true,
  },
  {
    id: 2,
    text: '밥먹기',
    isDone: true,
  },
  {
    id: 3,
    text: '강의보기',
    isDone: true,
  },
  {
    id: 4,
    text: '카페가기',
    isDone: false,
  },
  {
    id: 5,
    text: '청소하기',
    isDone: false,
  },
];
