import React, { ReactElement, useEffect, useState } from "react";
import styles from "./UserProfile.module.scss";
import Layout from "../Layout";
import EditUser from "./EditUser";
import { getUser } from "../../Services/userService";
import { IUserType } from "./UserType";

export default function UserProfile(): ReactElement {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [user, setUser] = useState<IUserType>();

  function handleClick() {
    setShowModal(true);
  }

  useEffect(() => {
    (async () => {
      try {
        const response = await getUser();
        if (response.data) {
          setUser(response.data);
        }
      } catch (error) {
        throw new Error(`${error}`);
      }
    })();
  }, []);

  return (
    <Layout>
      <div className={styles.userContainer}>
        <div className={styles.profileImage}>
          {user?.user_photo ? (
            <img src={user.user_photo}></img>
          ) : (
            <img
              src="https://freesvg.org/img/abstract-user-flat-4.png"
              alt="userPhoto"
            />
          )}
        </div>
        <div className={styles.info}>
          <div>
            <span>{user?.user_name}</span>
            <br></br>
            <br></br>
            <br></br>
          </div>
          <div>
            <span> **********</span>
            <br></br>
            <br></br>
          </div>
          <div>
            <span>{user?.user_email}</span>
            <br></br>
          </div>
        </div>
        <button className={styles.editUser} onClick={handleClick}>
          Edit
        </button>
      </div>
      {showModal && <EditUser setShowModal={setShowModal}></EditUser>}
    </Layout>
  );
}
