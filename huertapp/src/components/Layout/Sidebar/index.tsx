import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import styles from "./Sidebar.module.scss";
import { IconContext } from "react-icons";
import AuthContext from "../../AuthContext/AuthContext";
import { FaPowerOff } from "react-icons/fa";

interface ISidebarProps {
  hideSidebar: boolean;
  isSmallDevice: boolean;
}

export default function Sidebar({ hideSidebar, isSmallDevice }: ISidebarProps) {
  const { token, setToken } = useContext(AuthContext);

  const userLogout = (): void => {
    if (token) {
      setToken("");
      localStorage.removeItem("token");
      window.location.href = "/";
    }
  };

  return (
    <>
      <IconContext.Provider value={{ color: "white" }}>
        {!hideSidebar && (
          <nav
            className={
              isSmallDevice
                ? `${styles.navMenu} ${styles.navMenuAbs}`
                : styles.navMenu
            }
          >
            <ul className={styles.navMenuItems}>
              {SidebarData.map((e, i) => (
                <li key={i} className={e.cName}>
                  <Link to={e.path}>
                    {e.icon}
                    <span>{e.title}</span>
                  </Link>
                </li>
              ))}
              <li key={99} className={styles.navText}>
                <Link to="#" onClick={userLogout}>
                  <FaPowerOff size={40} />
                  <span>Logout</span>
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </IconContext.Provider>
    </>
  );
}
