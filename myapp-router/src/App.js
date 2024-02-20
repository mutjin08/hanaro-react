import React from 'react';
import { Routes, Route, Link, Outlet } from 'react-router-dom';


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
        </Route>
        <Route path="/test" element={<Layout2 />}>
          <Route index element={<Add />} />
          <Route path="calc" element={<Calculator />} />
        </Route>
      </Routes>
    </div>
  );
}

function Layout() {
  return (
    <>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </nav>
      <hr />
      <Outlet/>
    </>
  );
}

function Layout2() {
  return (
    <>
      <nav>
        <ul>
          <li><Link to="/test">Add</Link></li>
          <li><Link to="/test/calc">Calculator</Link></li>
        </ul>
      </nav>
      <hr />
      <Outlet/>
    </>
  );
}

function Home() {
  return (
    <>
      <h1>Home</h1>
    </>
  );
}

function About() {
  return (
    <>
      <h1>About</h1>
    </>
  );
}

function Add() {
  return (
    <>
      <h1>Add</h1>
    </>
  );
}

function Calculator() {
  return (
    <>
      <h1>Calculator</h1>
    </>
  );
}

export default App;
