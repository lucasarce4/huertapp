import React, {
  PropsWithChildren,
  ReactElement,
  useState,
  useEffect,
} from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import styles from "./Layout.module.scss";

export default function Layout({ children }: PropsWithChildren): ReactElement {
  const [hideSidebar, setHideSidebar] = useState<boolean>(
    window.innerWidth < 800
  );
  const [isSmallDevice, setIsSmallDevice] = useState<boolean>(
    window.innerWidth < 800
  );

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 800) {
        setIsSmallDevice(true);
        setHideSidebar(true);
      } else {
        setIsSmallDevice(false);
        setHideSidebar(false);
      }
    }
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [isSmallDevice]);

  return (
    <>
      <Header
        hideSidebar={hideSidebar}
        setHideSidebar={setHideSidebar}
        isSmallDevice={isSmallDevice}
      ></Header>
      <div className={styles.midSection}>
        <Sidebar hideSidebar={hideSidebar} isSmallDevice={isSmallDevice} />
        {children}
      </div>
      <Footer></Footer>
    </>
  );
}
