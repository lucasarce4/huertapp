import React, { useEffect } from "react";
import styles from "./Form.module.scss";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

function Field({ field, register, errors }: any) {
  const { label, name, styleType, type, placeholder, isRequired } = field;

  return (
    <div className={styles.labelContainer}>
      <label htmlFor={name} className={styles.label}>
        {label} {isRequired === true ? "*" : ""} <p>{errors[name]?.message}</p>
      </label>
      {(() => {
        if (type === "textarea") {
          return (
            <textarea
              name={name}
              type={type}
              placeholder={placeholder}
              {...register(`${name}`)}
            />
          );
        } else {
          return (
            <>
              <input
                className={styles[styleType]}
                name={name}
                placeholder={placeholder}
                type={type}
                {...register(`${name}`)}
                autoComplete="new-password"
              ></input>
            </>
          );
        }
      })()}
    </div>
  );
}

export default function Form({ form, onSubmit, submitStatus }: any) {
  const schema = yup.object().shape(form.yupSchema);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(schema) });

  useEffect(() => {
    reset();
  }, [submitStatus]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      {form.fields.map((field: any) => {
        return (
          <Field
            key={field.name}
            field={field}
            register={register}
            errors={errors}
          />
        );
      })}
      <button type="submit" className={styles.btn}>
        {form.config.buttonText || "Submit"}
      </button>
    </form>
  );
}
