import React, { useContext, useState } from 'react';
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import styles from '../styles/todo.module.css';
import { useDarkMode } from '../context/DarkModeContext';
import { TodoActionContext } from '../context/TodoActionContext';
import { useImmer } from 'use-immer';

export default function Header() {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const { setFilter } = useContext(TodoActionContext);
  const [menus, updateMenus] = useImmer(menuItems);
  const handleMenu = (data) => {
    updateMenus((menus) => {
      menus = menus.map(d => d.active = false);
    })
    updateMenus((menus) => {
      const menu = menus.find(d => data.id === d.id);
      menu.active = true;
    })
    setFilter(data.name);
  }
  return (
    <div className={styles.header}>
      <section className={styles.setting}>
        {darkMode ? 
          <BsFillMoonFill onClick={() => toggleDarkMode()} color="dark"></BsFillMoonFill> :
          <BsFillSunFill onClick={() => toggleDarkMode()} color="white"></BsFillSunFill>
        }
      </section>
      <section>
        <ul className={styles.tabs}>
          {menus.map((data)=>{
            return (
              <li 
                className={data.active ? styles.tab_active : ''} 
                key={data.id}
                onClick={()=>handleMenu(data)}
              >
                {data.name}
              </li>
            )
          })}
        </ul>
      </section>
    </div>
  );
}

const menuItems = [
  {
    id: 1,
    name: 'All',
    active: true,
  },
  {
    id: 2,
    name: 'Active',
    active: false,
  },
  {
    id: 3,
    name: 'Completed',
    active: false,
  },
];

