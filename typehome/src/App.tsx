import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Layout from './component/Layout';
import Home from './component/Home';
import Counter1 from './component/Counter1';
import Counter2 from './component/Counter2';
import Counter3 from './component/Counter3';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout/ >}>
          <Route index element={<Home/ >}></Route>
          <Route path="/counter1" element={<Counter1/>}></Route>
          <Route path="/counter2" element={<Counter2/>}></Route>
          <Route path="/counter3" element={<Counter3/>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
