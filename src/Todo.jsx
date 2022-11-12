import React from 'react';
import './styles/App.css';
import Header from './components/Header';
import List from './components/List';
import Footer from './components/Footer';

export default function Todo() {
  return (
    <div className="Container">
      <div className="Todo">
        <Header></Header>
        <List></List>
        <Footer></Footer>
      </div>
    </div>
  );
}

