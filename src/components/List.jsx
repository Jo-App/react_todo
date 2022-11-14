import React, { useContext, useEffect, useState } from 'react';
import Item from './Item';
import styles from '../styles/todo.module.css';
import { TodoActionContext } from '../context/TodoActionContext';

export default function List() {
  const scrollRef = React.useRef();
  const { todoList, filter } = useContext(TodoActionContext);
  const scrollToBottom = () => {
    console.log(scrollRef.current)
    scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }

  const listFilter = (filter, todoList) => {
    if(filter === 'All') {
      return todoList;
    } else if (filter === 'Active') {
      return todoList.filter(data => data.isDone === false);
    } else if (filter === 'Completed') {
      return todoList.filter(data => data.isDone === true);
    }
  }
  
  useEffect(() => {
    scrollToBottom();
  }, [todoList]);

  return (
    <div className={styles.list} ref={scrollRef}>
      { 
        listFilter(filter, todoList).length > 0 ?
        listFilter(filter, todoList).map(item => {
          return (<Item key={item.id} item={item}></Item>)
        })
        : '목록이 없습니다.'
      }
    </div>
  );
}