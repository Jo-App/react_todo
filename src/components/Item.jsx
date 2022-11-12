import React from 'react';
import { BsTrash } from "react-icons/bs";
import styles from '../styles/todo.module.css';

export default function Item() {
  return (
    <div className={styles.item}>
      <div>
        <input className={styles.checkBox} type="checkbox"></input>
        <span className={styles.text}>공부하기</span>
      </div>
      <div className={styles.icon}>
        <BsTrash></BsTrash>
      </div>
    </div>
  );
}

