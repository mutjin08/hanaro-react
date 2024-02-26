import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Layout from './component/Layout';
import Home from './component/Home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout/ >}>
          <Route index element={<Home/ >}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
