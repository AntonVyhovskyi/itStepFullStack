import { useState } from 'react'

import cls from './App.module.css'
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Home from './components/Home/Home';
import Forms from './components/Form/Forms';
import Posts from './components/Posts/Posts';
import Comments from './components/Comments/Comments';
import Users from './components/Users/Users';
import User from './components/Users/User';
function App() {


  return (
    <BrowserRouter>
      <div className={cls.header}>
        <nav>
          <NavLink to='/users' className={({ isActive }) => isActive ? cls.active : ''}>Users</NavLink>
          <NavLink to='/comments' className={({ isActive }) => isActive ? cls.active : ''}>Comments</NavLink>
          <NavLink to='/posts' className={({ isActive }) => isActive ? cls.active : ''}>Posts</NavLink>
          <NavLink to='/form' className={({ isActive }) => isActive ? cls.active : ''}>Form</NavLink>
          <NavLink to='/' className={({ isActive }) => isActive ? cls.active : ''}>Home</NavLink>
        </nav>
      </div>

      <div className={cls.main}>
        <div className={cls.mainContent}>
          <Routes>
          <Route path='/' Component={Home}/>
          <Route path='/form' Component={Forms}/>
          <Route path='/posts' Component={Posts}/>
          <Route path='/comments' Component={Comments}/>
          <Route path='/users' Component={Users}/>
          <Route path='/users/:id' Component={User}/>
          </Routes>
        </div>

      </div>


    </BrowserRouter>

  )
}

export default App
