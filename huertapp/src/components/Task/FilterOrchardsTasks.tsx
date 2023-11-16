import React, { useState, useEffect, useContext, ChangeEvent } from "react";
import { IHuertaDataType } from "../Pages/Huertas/huertasTypes/huertasTypes";
import { getHuertas } from "../../Services/huertasService";
import TaskContext from "./Context/TaskContext";
import formType from "./TaskFormType/index";
import styles from "./FilterOrchardsTasksType.module.scss";

type FilterOrchardsTasksType = {
  filter: boolean;
  form?: formType;
  handleChange?: (
    event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>
  ) => void;
};

function FilterOrchardsTasks({
  filter,
  form,
  handleChange,
}: FilterOrchardsTasksType) {
  const context = useContext(TaskContext);
  const [orchards, setOrchards] = useState<IHuertaDataType[]>([]);

  useEffect(() => {
    const getOrchards = async () => {
      try {
        const response = await getHuertas();
        if (response.data) {
          setOrchards(response.data);
        }
      } catch (error) {
        throw new Error(`${error}`);
      }
    };

    getOrchards();
  }, []);

  const handleChangeFilter = (e: ChangeEvent<HTMLSelectElement>) => {
    context.IdOrchardSet(e.target.value.toString());
  };

  return (
    <>
      {filter === true && (
        <section className={styles.FilterOrchardsTasks}>
          <label>
            Filter tasks by orchards:
            <select
              onChange={handleChangeFilter}
              className={styles.selectFilterOrchar}
            >
              <option value="">All</option>
              {orchards.map((orchard, index) => (
                <option value={orchard.id.toString()} key={index}>
                  {orchard.orchard_name}
                </option>
              ))}
            </select>
          </label>
        </section>
      )}
      {filter === false && (
        <label>
          Select orchard:
          <select
            name="id_orchard"
            value={form?.id_orchard}
            onChange={handleChange}
          >
            <option value="0">-</option>
            {orchards.map((orchard, index) => (
              <option value={orchard.id.toString()} key={index}>
                {orchard.orchard_name}
              </option>
            ))}
          </select>
        </label>
      )}
    </>
  );
}

export default FilterOrchardsTasks;

/*
                    {orchards.map((orchard, index) => 
                        <button className={styles.buttonFilter} key={index} onClick={()=>context.IdOrchardSet(orchard.id.toString())}>{orchard.orchard_name}</button>  
                    )}
*/
