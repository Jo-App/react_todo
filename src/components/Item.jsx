import React, { useContext } from 'react';
import { BsTrash } from "react-icons/bs";
import styles from '../styles/todo.module.css';
import { TodoActionContext } from '../context/TodoActionContext';

export default function Item({item}) {
  const { changeTodo, deleteTodo } = useContext(TodoActionContext);
  const checkDelete = (id) => {
    if (window.confirm('선택한 항목을 삭제하시겠습니까?') === true) {
      deleteTodo(id);
    } else {
      return false;
    }
  }
  return (
    <div className={styles.container}>
      <div className={styles.item} onClick={() => changeTodo(item.id)}>
        <input className={styles.checkBox} type="checkbox" checked={item.isDone ? true : false} readOnly></input>
        <span className={item.isDone ? styles.done : styles.text}>{item.text}</span>
      </div>
      <div className={styles.icon} onClick={() => checkDelete(item.id)}>
        <BsTrash></BsTrash>
      </div>
    </div>
  );
}

