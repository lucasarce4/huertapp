import React from "react";
import styles from "../../styles/Form.module.scss";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { postUser } from "../../Services/userService";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function UserRegister() {
  const navigate = useNavigate();

  const statusOk = () => {
    navigate("/login");
  };

  const setAlertError = () => {
    Swal.fire({
      icon: "error",
      title: "These data are already registered",
      text: "",
      timer: 2000,
      showConfirmButton: false,
    });
  };

  return (
    <Formik
      initialValues={{
        nombre: "",
        correo: "",
        contraseña: "",
        contraseñaRepetir: "",
      }}
      onSubmit={async (valores, { resetForm }) => {
        const res = await postUser({
          user_name: valores.nombre,
          user_password: valores.contraseña,
          user_email: valores.correo,
        });
        if (res.status === 409 || res.status === 500) {
          setAlertError();
        }
        if (res.status === 200) {
          statusOk();
        }
        resetForm();
      }}
      validate={(valores) => {
        const errores: any = {};

        if (!valores.nombre) {
          errores.nombre = "Please insert a username";
        } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)) {
          errores.nombre = "The username can only contain letters";
        }

        if (!valores.correo) {
          errores.correo = "Please insert an email";
        } else if (
          !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
            valores.correo
          )
        ) {
          errores.correo = "The email format is wrong";
        }
        if (valores.contraseña.length < 8) {
          errores.contraseña = "The password must contain 8 or more letters";
        }

        if (valores.contraseña !== valores.contraseñaRepetir) {
          errores.contraseñaRepetir = "Passwords do not match";
        }
        return errores;
      }}
    >
      {({ errors }) => (
        <div className={styles.container}>
          <Form className={styles.formulario}>
            <div>
              <label htmlFor="nombre">Username</label>
              <Field
                type="text"
                id="nombre"
                name="nombre"
                autoComplete="off"
                placeholder="Insert username"
              />
              <ErrorMessage
                name="nombre"
                component={() => (
                  <div className={styles.error}>{errors.nombre}</div>
                )}
              />
            </div>

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

            <div>
              <label htmlFor="contraseñaRepetir">Insert password again</label>
              <Field
                type="password"
                id="contraseñaRepetir"
                name="contraseñaRepetir"
                autoComplete="off"
                placeholder="Insert password"
              />
              <ErrorMessage
                name="contraseñaRepetir"
                component={() => (
                  <div className={styles.error}>{errors.contraseñaRepetir}</div>
                )}
              />
            </div>

            <button type="submit">Register</button>
            <Link to={"/login"} className={styles.redirectionForm}>
              Login
            </Link>
          </Form>
        </div>
      )}
    </Formik>
  );
}
