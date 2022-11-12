import React from 'react';
import Item from './Item';
import styles from '../styles/todo.module.css';

export default function List() {
  return (
    <div className={styles.list}>
      <Item></Item>
      <Item></Item>
      <Item></Item>
      <Item></Item>
      <Item></Item>
      <Item></Item>
      <Item></Item>
      <Item></Item>
      <Item></Item>
      <Item></Item>
    </div>
  );
}

