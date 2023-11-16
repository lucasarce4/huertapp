import React, { ReactElement } from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.scss";

interface IHeaderProps {
  hideSidebar: boolean;
  setHideSidebar: (value: boolean) => void;
  isSmallDevice: boolean;
}

function Header({
  hideSidebar,
  setHideSidebar,
  isSmallDevice,
}: IHeaderProps): ReactElement {
  return (
    <header className={styles.header}>
      <span className={styles.titleContainer}>
        {isSmallDevice && (
          <div
            onClick={() => setHideSidebar(!hideSidebar)}
            className={styles.burgerMenuContainer}
          >
            <div
              className={`${styles.burgerMenuBtn} ${
                !hideSidebar ? styles.menuOpen : styles.menuClosed
              }`}
            ></div>
          </div>
        )}
        <span>Huertapp</span>
      </span>
      <nav>
        <Link to={`/userProfile`}>
          <div>My profile</div>
        </Link>
      </nav>
    </header>
  );
}
export default Header;
