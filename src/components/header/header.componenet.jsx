import React from 'react';
import { Link } from 'react-router-dom'

// special syntax in React to import .svg
import { ReactComponent as Logo } from '../../assets/crown.svg'

import './header.scss';

//==== NOTE: <Link /> is native <a> in DOM =====
// <a class="option" href="/shop">SHOP<a/>

const Header = () => (
  <div className='header'>
    <Link className='logo-container' to="/">
      <Logo className='logo' />
    </Link>
    <div className='options'>
      <Link className='option' to="/shop">
        SHOP
      </Link>
      <Link className='option' to="/contact">
        CONTACT
      </Link>
    </div>
  </div>
)

export default Header;