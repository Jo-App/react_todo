import React, { useContext } from 'react';
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import styles from '../styles/todo.module.css';
import { DarkModeContext } from '../context/DarkModeContext';

export default function Header() {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
  return (
    <div className={styles.header}>
      <section className={styles.setting}>
        {darkMode ? 
          <BsFillMoonFill onClick={() => toggleDarkMode()} color="white"></BsFillMoonFill> :
          <BsFillSunFill onClick={() => toggleDarkMode()} color="white"></BsFillSunFill>
        }
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

