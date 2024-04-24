import Darkmode from "Components/Darkmode/Darkmode";
import React from "react";
import styles from "./Header.module.css";
import logoLight from "Assets/Images/logo-white.png";
import logoDark from "Assets/Images/logo-dark.png";
import { useSelector } from "react-redux";
import NavBarButton from "Components/NavBarButton/NavBarButton";
import ProfileIcon from "Components/ProfileIcon/ProfileIcon";

const Header = () => {
  const darkmode = useSelector((state) => state.darkmode.value);
  return (
    <div className="header">
      <header className={styles.header}>
        <div className={styles.logoContainer}>
          <img
            src={!darkmode ? logoLight : logoDark}
            alt="Logo"
            className={styles.logo}
          />
        </div>
        <nav className={styles.nav}>
          {/* <ul className={styles.navList}>
            <li className={styles.navItem}>Home</li>
            <li className={styles.navItem}>About</li>
            <li className={styles.navItem}>Services</li>
            <li className={styles.navItem}>Contact</li>
          </ul> */}
        </nav>
        <div className={styles.buttonContainer}>
          <Darkmode />
          <NavBarButton> Sign Up</NavBarButton>
          <NavBarButton> Login</NavBarButton>
          <ProfileIcon></ProfileIcon>
        </div>
      </header>
    </div>
  );
};

export default Header;
