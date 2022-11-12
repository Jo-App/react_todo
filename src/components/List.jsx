import React, { useContext, useEffect, useState } from 'react';
import Item from './Item';
import styles from '../styles/todo.module.css';
import { TodoActionContext } from '../context/TodoActionContext';

export default function List() {
  const scrollRef = React.useRef();
  const { todoList, isList, setIsList } = useContext(TodoActionContext);
  
  const scrollToBottom = () => {
    scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    setIsList(false);
  }
  
  useEffect(() => {
    scrollToBottom();
  }, [isList]);

  return (
    <div className={styles.list} ref={scrollRef}>
      { 
        todoList.length > 0 ?
        todoList.map(item => {
          return (<Item key={item.id} item={item}></Item>)
        })
        : ''
      }
    </div>
  );
}