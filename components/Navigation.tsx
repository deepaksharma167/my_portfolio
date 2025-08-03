import Link from "next/link";
import styles from "../styles/Navigation.module.scss";
import { useState } from "react";
export default function Navigation() {
  const [showMenu, setShowMenu] = useState(false);

  const getCloseStyle = () => {
    return showMenu ? styles.close : "";
  };

  const getShowStyle = () => {
    return showMenu ? styles.show : "";
  };

  return (
    <header>
      <div
        className={styles.menubtn + " " + getCloseStyle()}
        onClick={() => {
          setShowMenu(!showMenu);
        }}
      >
        <div className={styles.btnline}></div>
        <div className={styles.btnline}></div>
        <div className={styles.btnline}></div>
      </div>
      <nav className={styles.menu + " " + getShowStyle()}>
        <div className={styles.menubranding + " " + getShowStyle()}>
          <div className={styles.portrait}></div>
        </div>
        <ul className={styles.menunav + " " + getShowStyle()}>
          <li className={styles.navitem + " " + getShowStyle()}>
            <Link
              href="/"
              className={`${styles.navlink} ${styles.current}`}
              onClick={() => setShowMenu(false)}
            >
              Home
            </Link>
          </li>
          <li className={styles.navitem + " " + getShowStyle()}>
            <Link
              href="/about"
              className={styles.navlink}
              onClick={() => setShowMenu(false)}
            >
              About
            </Link>
          </li>
          <li className={styles.navitem + " " + getShowStyle()}>
            <Link
              href="/work"
              className={styles.navlink}
              onClick={() => setShowMenu(false)}
            >
              My Work
            </Link>
          </li>
          <li className={styles.navitem + " " + getShowStyle()}>
            <Link
              href="/contact"
              className={styles.navlink}
              onClick={() => setShowMenu(false)}
            >
              How To Reach Me
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
