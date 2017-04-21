import React from 'react';
import NavItem from './navItem';

const Nav = ({ history }) => {
  const clickHandler = (e) => {
    history.push(e.target.name);
  };

  return (
    <nav className="nav">
      <NavItem name="" label="HOME" clickHandler={clickHandler} />
      <NavItem name="arrivals" label="NEW ARRIVALS" clickHandler={clickHandler} />
      <NavItem name="shop" label="SHOP" clickHandler={clickHandler} />
      <NavItem name="blog" label="BLOG" clickHandler={clickHandler} />
      <NavItem name="contact" label="CONTACT" clickHandler={clickHandler} />
    </nav>
  );
}



export default Nav;

