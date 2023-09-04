import React from 'react';
import MenuItem from './MenuItem.jsx';
import './header.scss';
import { NavLink } from 'react-router-dom';

const Header = () => {
   return (
      <header className="header">
         <NavLink to={"/"}><MenuItem title="Головна" /></NavLink>
         <NavLink to={"/contacts"}><MenuItem title="Контакти" /></NavLink>
         <NavLink to={"/about"}><MenuItem title="Матеріали" /></NavLink>
         <NavLink to={"/questions"}><MenuItem title="Питання" /></NavLink>
      </header>
   );
};

export default Header;