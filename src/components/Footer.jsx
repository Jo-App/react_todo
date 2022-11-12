import React from 'react';
import styles from '../styles/todo.module.css';

export default function Footer() {
  return (
    <div className={styles.footer}>
      <input className={styles.inp} placeholder="Add Todo"></input>
      <div className={styles.btn}>Add</div>
    </div>
  );
}

