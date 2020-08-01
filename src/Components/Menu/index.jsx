import React from 'react';

import { Link } from 'react-router-dom';

import { Navbar, BrandIcon } from './styles';

function Menu() {
  return (
    <Navbar>
      <BrandIcon as={Link} to="/">Say Hello!</BrandIcon>
    </Navbar>
  );
}

export default Menu;
