import React, { useRef } from "react";
import { FaTimes } from "react-icons/fa";
import styles from "./Modal.module.scss";
export default function Modal({ children, setShowModal }: any) {
  const modalBackground = useRef<HTMLElement>(null);

  const handleCloseModal = (e: any) => {
    if (e.target !== modalBackground.current) return;
    setShowModal(false);
  };
  return (
    <section
      aria-labelledby="modal"
      className={styles.background}
      onClick={(e) => handleCloseModal(e)}
      ref={modalBackground}
    >
      <div className={styles.container}>
        <button className={styles.closeBtn} onClick={() => setShowModal(false)}>
          <FaTimes></FaTimes>
        </button>
        {children}
      </div>
    </section>
  );
}
