import React from 'react';
import PropTypes from 'prop-types';

const style = {
  border: '5px solid black',
  'backgroundColor': 'white',
  margin: '0 5px'
};

const NavItem = ({ name, label, clickHandler }) => (
  <button style={style} name={name} onClick={clickHandler}>{label}</button>
);

NavItem.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  clickHandler: PropTypes.func
};

export default NavItem;
