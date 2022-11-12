import React, { useState, useEffect } from 'react';
import { useImmer } from 'use-immer';
import Item from './Item';
import { current } from "@reduxjs/toolkit";
import styles from '../styles/todo.module.css';

export default function List() {
  const [todoList, updateTodoList] = useImmer(todoItems);
  useEffect(() => {

  }, []);

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

  return (
    <div className={styles.list}>
      { 
        todoList.length > 0 ?
        todoList.map(item => {
          return (<Item key={item.id} item={item} changeTodo={changeTodo} deleteTodo={deleteTodo}></Item>)
        })
        : ''
      }
    </div>
  );
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
