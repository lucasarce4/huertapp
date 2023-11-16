import React, { ReactElement } from "react";
import { FaTimes } from "react-icons/fa";
import { editUser, getUser } from "../../../Services/userService";
import styles from "./EditUser.module.scss";
import useForm from "./Hooks/useForm";

interface iSetShowModal {
  setShowModal: (showModal: boolean) => void;
}

export default function EditUser({
  setShowModal,
}: iSetShowModal): ReactElement {
  const { handleChange, values, errors, handleSubmit } = useForm(formLogin);

  async function formLogin() {
    if (
      values.name === "" ||
      values.password === "" ||
      values.password2 === "" ||
      values.image === ""
    ) {
      return;
    } else {
      const user = await getUser();
      await editUser({
        id: user.data.id,
        user_name: values.name,
        user_password: values.password,
        user_email: user.data.user_email,
        user_photo: values.image,
      });
    }
    setShowModal(false);
    window.location.reload();
  }

  function handleClickClose() {
    setShowModal(false);
  }

  return (
    <div className={styles.modalContainer}>
      <form onSubmit={handleSubmit} className={styles.registerForm}>
        <div>
          <button onClick={handleClickClose} className={styles.closeButton}>
            <FaTimes></FaTimes>
          </button>
        </div>
        <br></br>
        <div className={styles.campoForm}>
          <div>
            <div>
              <label className={styles.labels}>
                {" "}
                Name
                <br></br>
              </label>
            </div>
            <div>
              <input
                className={styles.editInput}
                onChange={handleChange}
                autoComplete="off"
                type="text"
                placeholder="Name"
                required
                name="name"
              />
            </div>
            <br></br>
            {errors.name && <h3 className={styles.errorMsg}>{errors.name}</h3>}
          </div>
          <div>
            <div>
              <label className={styles.labels}> New password </label>
            </div>
            <div>
              <input
                className={styles.editInput}
                onChange={handleChange}
                autoComplete="off"
                type="password"
                placeholder="Password"
                required
                name="password"
              />
            </div>
            <br></br>
            {errors.password && (
              <h3 className={styles.errorMsg}>{errors.password}</h3>
            )}
          </div>
          <div>
            <div>
              <label className={styles.labels}> Repeat password </label>
            </div>
            <div>
              <input
                className={styles.editInput}
                onChange={handleChange}
                autoComplete="on"
                type="password"
                required
                placeholder="Repeat password"
                name="password2"
              />
            </div>
            <br></br>

            {errors.password2 && (
              <h3 className={styles.errorMsg}>{errors.password2}</h3>
            )}
          </div>
          <div>
            <div>
              <label className={styles.labels}>
                Image link
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </label>
            </div>
            <div>
              <input
                className={styles.editInput}
                autoComplete="on"
                type="text"
                required
                name="image"
                placeholder="https://myimg.com/media/image.jpg"
                onChange={handleChange}
              ></input>
            </div>
          </div>
        </div>

        <button className={styles.botonForm} type="submit" value="Save">
          Save
        </button>
      </form>
    </div>
  );
}
