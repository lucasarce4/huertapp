import React, { useState } from "react";

const useForm = (callback: () => void) => {
  const [values, setValues] = useState({
    name: "",
    password: "",
    password2: "",
    image: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    password: "",
    password2: "",
    image: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
    e.preventDefault();

    const name: string = e.target.name;
    const val: string = e.target.value;

    validate(e, name, val);
    setValues({ ...values, [name]: val });
  }

  function validate(
    event: React.ChangeEvent,
    name: string,
    value: string
  ): void {
    switch (name) {
      case "name":
        if (value && !/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(value)) {
          setErrors({ ...errors, name: "Los nombres no cotienen números" });
        } else {
          const newObj = {
            name: "",
            password: errors.password,
            password2: errors.password2,
            image: errors.image,
          };
          setErrors(newObj);
        }
        break;
      case "password":
        if (value && value.length < 8) {
          setErrors({
            ...errors,
            password: "La contraseña debe tener 8 o mas caracteres",
          });
        } else {
          const newObj = {
            name: errors.name,
            password: "",
            password2: errors.password2,
            image: errors.image,
          };

          setValues({
            ...values,
            [name]: value,
          });
          setErrors(newObj);
        }
        break;

      case "password2":
        if (value !== values.password) {
          setErrors({ ...errors, password2: "Las contraseñas no coinciden" });
        } else {
          const newObj = {
            name: errors.name,
            password: errors.password,
            password2: "",
            image: errors.image,
          };
          setErrors(newObj);
        }
        break;

      default:
        break;
    }
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>): void {
    if (event) event.preventDefault();

    if (
      errors.name === "" &&
      errors.password === "" &&
      errors.password2 === "" &&
      errors.image === ""
    ) {
      callback();
    } else {
      throw new Error(`${errors}`);
    }
  }

  return {
    values,
    errors,
    handleChange,
    handleSubmit,
  };
};

export default useForm;
