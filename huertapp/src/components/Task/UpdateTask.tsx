import React, { useEffect, useState, ChangeEvent, ReactElement } from "react";
import { useParams } from "react-router-dom";
import { getTaskId } from "../../Services/taskService";
import Buttons from "./Buttons";
import styles from "../../styles/Form.module.scss";
import formType from "./TaskFormType/index";

function UpdateTask(): ReactElement {
  type responseType =
    | {
      status: number;
      data: any;
      error?: undefined;
    }
    | {
      status: any;
      error: any;
      data: any;
    };

  const { id } = useParams<string>();
  const [loanding, setLoanding] = useState<boolean>(true);
  const [form, setForm] = useState<formType>({
    id: "",
    id_orchard: "",
    title: "",
    description: "",
    state: "",
  });

  useEffect(() => {
    const getTask = async () => {
      try {
        const response: responseType = await getTaskId(id ?? "");
        if (response.data[0]) {
          setForm({
            id: `${response.data[0].id}`,
            id_orchard: `${response.data[0].id_orchard}`,
            title: `${response.data[0].title}`,
            description: `${response.data[0].description}`,
            state: `${response.data[0].state}`,
          });
          setLoanding(false);
        }
      } catch (error) {
        throw new Error(`${error}`);
      }
    };

    getTask();
  }, []);

  const handleChange = (
    event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>
  ) => {
    const name = event.target.name;
    const value = event.target.value;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <main>
      {!loanding && (
        <form onSubmit={handleSubmit} className={styles.formulario}>
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={form.title}
            onChange={handleChange}
            placeholder="Title"
          ></input>
          <label>Description:</label>
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

          <Buttons
            id={id}
            form={form}
            typeButton={"updateT"}
            resetForm={() => { }}
            msjSet={() => { }}
          />
        </form>
      )}
    </main>
  );
}

export default UpdateTask;
