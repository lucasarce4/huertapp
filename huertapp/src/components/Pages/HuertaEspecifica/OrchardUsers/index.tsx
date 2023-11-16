import React, { useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";
import Form from "../../../Form";
import Modal from "../../../Modal";
import styles from "./OrchardUsers.module.scss";
import addUsersFormConfig from "./addUsersFormConfig";
import {
  deleteUserOrchard,
  getOrchardUsers,
  postOrchardUsers,
} from "../../../../Services/userOrchardService";
import { useParams } from "react-router-dom";
import { setErrorAlert } from "../../../UI/sweetAlertFunctions";

interface IUser {
  id: number;
  user_email: string;
}

export default function OrchardUsers({ setShowUsers }: any) {
  const [submitStatus, setSubmitStatus] = useState<boolean>(false);
  const [userList, setUserList] = useState<IUser[]>([]);
  const { id } = useParams();

  async function handleAddEvent(data: any) {
    if (id === undefined) return;
    const sendData = { id_orchard: +id, user_email: data };
    const res = await postOrchardUsers(sendData);
    if (res.status === 200) {
      setUserList([...userList, data]);
    }
    if (res.status === 409) {
      setErrorAlert(res.data);
    }
    if (res.status === 401) {
      setErrorAlert("You don't have permitions");
    }
  }
  async function handleDelete(user: string) {
    if (id === undefined) return;
    const res = await deleteUserOrchard(id, {
      id_orchard: +id,
      user_email: user,
    });
    if (res.status === 200) {
      const users = userList.filter((userL) => userL.user_email !== user);
      setUserList(users);
    }
    if (res.status === 401) {
      setErrorAlert("You don't have permitions");
    }
  }
  useEffect(() => {
    (async () => {
      if (id === undefined) return;
      const res = await getOrchardUsers(id?.toString());
      if (res.status === 200) {
        setUserList(res.data);
      }
    })();
  }, []);

  return (
    <Modal setShowModal={setShowUsers}>
      <Form
        form={addUsersFormConfig}
        onSubmit={handleAddEvent}
        submitStatus={submitStatus}
      ></Form>
      <div className={styles.userList}>
        {userList.map((user: IUser) => {
          return (
            <div key={user.user_email} className={styles.user}>
              <p>{user.user_email}</p>
              <button onClick={() => handleDelete(user.user_email)}>
                <FaTimes></FaTimes>
              </button>
            </div>
          );
        })}
      </div>
    </Modal>
  );
}
