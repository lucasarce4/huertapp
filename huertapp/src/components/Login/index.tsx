import React, { useContext } from "react";
import styles from "../../styles/Form.module.scss";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { postUserLogin } from "../../Services/userService";
import { Link } from "react-router-dom";
import AuthContext from "../AuthContext/AuthContext";
import Swal from "sweetalert2";

export default function UserRegister() {
  const { setToken } = useContext(AuthContext);

  const statusOk = () => {
    const token = localStorage.getItem("token");
    if (token) {
      window.location.href = "/";
    }
  };

  const setAlertError = () => {
    Swal.fire({
      icon: "error",
      title: "Incorrect data",
      text: "",
      timer: 2000,
      showConfirmButton: false,
    });
  };

  return (
    <Formik
      initialValues={{
        correo: "",
        contraseña: "",
      }}
      onSubmit={async (valores, { resetForm }) => {
        const res = await postUserLogin({
          user_email: valores.correo,
          user_password: valores.contraseña,
        });
        if (res.status === 200) {
          const token = res.data;
          localStorage.setItem("token", JSON.stringify(token));
          setToken(token);
          statusOk();
        } else {
          setAlertError();
        }
        resetForm();
      }}
      validate={(valores) => {
        const errores: any = {};

        if (!valores.correo) {
          errores.correo = "Please insert an email";
        } else if (
          !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
            valores.correo
          )
        ) {
          errores.correo = "The email format is wrong";
        }
        if (!valores.contraseña) {
          errores.contraseña = "Please insert a password";
        }

        return errores;
      }}
    >
      {({ errors }) => (
        <div className={styles.container}>
          <Form className={styles.formulario}>
            <div>
              <label htmlFor="correo">Email</label>
              <Field
                type="email"
                id="correo"
                name="correo"
                autoComplete="off"
                placeholder="email@email.com"
              />
              <ErrorMessage
                name="correo"
                component={() => (
                  <div className={styles.error}>{errors.correo}</div>
                )}
              />
            </div>

            <div>
              <label htmlFor="contraseña">Password</label>
              <Field
                type="password"
                id="contraseña"
                name="contraseña"
                autoComplete="off"
                placeholder="Insert password"
              />
              <ErrorMessage
                name="contraseña"
                component={() => (
                  <div className={styles.error}>{errors.contraseña}</div>
                )}
              />
            </div>

            <button type="submit">Login</button>
            <Link to={"/register"} className={styles.redirectionForm}>
              Register
            </Link>
          </Form>
        </div>
      )}
    </Formik>
  );
}
