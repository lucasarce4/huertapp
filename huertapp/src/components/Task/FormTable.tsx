import React, { ChangeEvent, ReactElement, useState, useEffect } from "react";
import Buttons from "./Buttons";
import styles from "../../styles/Form.module.scss";
import formType from "./TaskFormType/index";
import FilterOrchardsTasks from "./FilterOrchardsTasks";

function FormTable(): ReactElement {
  const [msj, setMsj] = useState<boolean>(false);
  const [formState, setFormState] = useState<boolean>(false);

  const [form, setForm] = useState<formType>({
    id_orchard: "0",
    title: "",
    description: "",
    state: "to do",
  });

  useEffect(() => {
    if (
      form.title.length !== 0 &&
      form.description.length !== 0 &&
      form.id_orchard !== "0"
    ) {
      setFormState(true);
    }
  }, [form]);

  const handleChange = (
    event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>
  ) => {
    const name = event.target.name;
    const value = event.target.value;
    setForm({ ...form, [name]: value });
    setMsj(false);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const resetForm = () => {
    setForm({ id_orchard: "0", title: "", description: "", state: "to do" });
    setFormState(false);
    setMsj(false);
  };

  const msjSet = () => {
    setMsj(true);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.formulario}>
      <input
        type="text"
        name="title"
        value={form.title}
        onChange={handleChange}
        placeholder="Title"
      ></input>
      <input
        type="text"
        name="description"
        value={form.description}
        onChange={handleChange}
        placeholder="Description"
      ></input>
      <label>
        Select state:
        <select name="state" value={form.state} onChange={handleChange}>
          <option value="to do">To do</option>
          <option value="in process">In process</option>
          <option value="finished">Finished</option>
        </select>
      </label>
      <FilterOrchardsTasks
        filter={false}
        form={form}
        handleChange={handleChange}
      />

      {formState === true && (
        <Buttons
          form={form}
          resetForm={resetForm}
          typeButton={"addT"}
          msjSet={() => {}}
        />
      )}
      {formState === false && (
        <Buttons msjSet={msjSet} typeButton={"addF"} resetForm={() => {}} />
      )}
      {msj && <p className={styles.msjFormTask}>All fields are required</p>}
    </form>
  );
}

export default FormTable;

/*
<input
type="text"
name="state"
value={form.state}
onChange={handleChange}
placeholder="State"
></input>
*/
