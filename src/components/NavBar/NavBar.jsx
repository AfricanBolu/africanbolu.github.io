/** @format */

import { useState } from 'react';
import styles from './NavBar.module.css';
// import { getImageUrl } from '../../utils';
import closeIcon from '../../../assets/nav/closeIcon.png';
import menuIcon from '../../../assets/nav/menuIcon.png';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  //   const getImageUrl = (name) => `/assets/nav/${name}`

  // Test the URLs
  //   console.log('This is from NavBar');
  //   console.log('Close icon path:', getImageUrl('nav/closeIcon.png'));
  //   console.log('Hamburger path:', getImageUrl('nav/hamburger.png'));
  return (
    <nav className={styles.navbar}>
      <a href="/" className={styles.logo}>
        BOLU
      </a>
      <div className={styles.links}>
        <img
          className={styles.linkBtn}
          src={isOpen ? closeIcon : menuIcon}
          alt="menu-button"
          onClick={() => setIsOpen(!isOpen)}
        />
        <ul className={`${styles.linklist} ${isOpen && styles.active}`} onClick={() => setIsOpen(false)}>
          <li>
            <a href="#about">About</a>
          </li>
          {/* <li>
            <a href="#Experience">Experience</a>
          </li> */}
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
