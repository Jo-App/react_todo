import React, { useContext } from 'react';
import './styles/App.css';
import Header from './components/Header';
import List from './components/List';
import Footer from './components/Footer';
import { DarkModeProvider } from './context/DarkModeContext';
import { TodoActionProvider } from './context/TodoActionContext';

export default function Todo() {
  return (
    <DarkModeProvider>
      <div className="container">
        <div className="todo">
          <TodoActionProvider>
            <Header></Header>
            <List></List>
            <Footer></Footer>
          </TodoActionProvider>
        </div>
      </div>
    </DarkModeProvider>
  );
}