import { createContext, useState } from 'react';
import { useImmer } from 'use-immer';

export const TodoActionContext = createContext();

export function TodoActionProvider({ children }) {
  const [todoList, updateTodoList] = useImmer(todoItems);
  const [isList, setIsList] = useState(false);
  // useEffect(() => {

  // }, []);

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
    setIsList(false);
    try {
      const lastId = todoList[todoList.length-1].id + 1;
      updateTodoList((todoList) => {
        todoList.push({
          id: lastId,
          text,
          isDone: false,
        });
      })
      setIsList(true);
      return true;
    } catch (err) {
      alert('에러!');
      setIsList(false);
      return false;
    }
  }

  return (
    <TodoActionContext.Provider value={{ todoList, changeTodo, deleteTodo, AddTodo, isList, setIsList }} >
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
