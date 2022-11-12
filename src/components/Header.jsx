import React from 'react';
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import styles from '../styles/todo.module.css';

export default function header() {
  return (
    <div className={styles.header}>
      <section className={styles.setting}>
        <BsFillSunFill color="white"></BsFillSunFill>
        {/* <BsFillMoonFill color="white"></BsFillMoonFill> */}
      </section>
      <section>
        <ul className={styles.tabs}>
          <li className={styles.tab_active}>All</li>
          <li className={styles.tab_active}>Active</li>
          <li className={styles.tab_active}>Completed</li>
        </ul>
      </section>
    </div>
  );
}

