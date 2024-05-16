import React from 'react';
import Link from 'next/link';
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}> 
      <div className={styles.logoContainer}>
        <Link href="/">
          <img src="/duck.png" alt="Logo" className={styles.logo} /> 
        </Link>
      </div>

      <nav>
        <ul className={styles.navLinks}> 
          <li>
            <Link href="/Video">
              Watch Video
            </Link>
          </li>
          <li>
            <Link href="/About">
              About
            </Link>
          </li>
          <li>
            <Link href="/Features">
              Features
            </Link>
          </li>
          <li>
            <Link href="/DevTeam">
              Meet The Team
            </Link>
          </li>
          <li>
            <Link href="/Contact">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
