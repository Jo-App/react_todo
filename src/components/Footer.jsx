import React, { useContext } from 'react';
import styles from '../styles/todo.module.css';
import { TodoActionContext } from '../context/TodoActionContext';

export default function Footer() {
  const { AddTodo } = useContext(TodoActionContext);
  let text = React.createRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    let txt = text.current.value;
    if(txt.length === 0) {
      alert("내용을 입력해주세요!");
    } else {
      if(AddTodo(txt)) text.current.value = '';
    }
  }; 
  const onKey = (e) => e.key === 'Enter' ? handleSubmit(e) : null;
  return (
    <form className={styles.footer} onSubmit={handleSubmit}>
      <input 
        className={styles.inp} 
        type="text" 
        placeholder="Add Todo" 
        ref={text}
        onKeyPress={onKey}
      >
      </input>
      <button className={styles.btn} type="submit">Add</button>
    </form>
  );
}