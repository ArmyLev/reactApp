import React from "react";
import { NavLink } from "react-router-dom";
import n from './NavBar.module.css'

const NavBar = () =>{
    return(
    <nav className={n.nav}>
    <div className='item'>
      <NavLink to='/Profile' activeClassName={n.active}> Моя страница </NavLink>
    </div>
    <div className='item'>
      <NavLink to='/Dialogs'activeClassName={n.active}> Cообщения </NavLink>
    </div>
    <div className='item'>
      <NavLink to='/Music'> Музыка </NavLink>
    </div>
    <div className='item'>
      <NavLink to='/Communities'>Сообщества </NavLink>
    </div>
    <div className='item'>
      <NavLink to='/Settings'>Настройки</NavLink>
    </div>
  </nav>
    )
}

export default NavBar;