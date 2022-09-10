import React, { useState } from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';

import { images } from '../../constants';
import './Navbar.scss';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav class="app__navbar">
        <ul className='app__navbar-links'>
            {['about','skills', 'projects', 'contact'].map((item) => (
        <li className='app__flex p-text nav__items slide-bottom' key={`link-${item}`}>
            <a className='p-text' href={`#${item}`}>{item}</a>
        </li>
            ))}
        </ul>
    </nav>
  );
};

export default Navbar;
