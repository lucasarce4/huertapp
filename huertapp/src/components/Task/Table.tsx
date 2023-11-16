import React, { useEffect, useState, useContext, ReactElement } from "react";
import { getTaskIdOrchard, getTask } from "../../Services/taskService";
import { Link } from "react-router-dom";
import TaskContext from "./Context/TaskContext";
import Buttons from "./Buttons";
import styles from "./Table.module.scss";
import formType from "./TaskFormType/index";

function Table(): ReactElement {
  const [allTask, setAllTask] = useState<formType[]>();
  const context = useContext(TaskContext);
  const reload = context.reload;
  const idOrchardSelect = context.idOrchard;

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

  useEffect(() => {
    const getTaskAll = async () => {
      try {
        if (idOrchardSelect.length === 0) {
          const response: responseType = await getTask();
          if (response.data) {
            setAllTask(response.data);
          }
        }
        if (idOrchardSelect.length !== 0) {
          const response: responseType = await getTaskIdOrchard(
            idOrchardSelect
          );
          if (response.data) {
            setAllTask(response.data);
          }
        }
      } catch (error) {
        throw new Error(`${error}`);
      }
    };

    getTaskAll();
  }, [reload, idOrchardSelect]);

  return (
    <section className={styles.sectionTable}>
      <div className={styles.tableContainerResponsive}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>State</th>
              <th colSpan={2}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {allTask?.length !== 0 ? (
              allTask?.map((t: any, index: number) => (
                <tr key={index}>
                  <td>
                    <p>{t.title}</p>
                  </td>
                  <td>
                    <p>{t.description}</p>
                  </td>
                  <td>
                    <p>{t.state}</p>
                  </td>
                  <td>
                    <Buttons
                      id={t.id}
                      typeButton={"deleteT"}
                      resetForm={() => { }}
                      msjSet={() => { }}
                    />
                  </td>
                  <td>
                    <button className={styles.btnUpdateTable}>
                      <Link to={`/task/update/${t.id}`}>Update</Link>
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td>--</td>
                <td>--</td>
                <td>--</td>
                <td>--</td>
              </tr>
            )}
          </tbody>
        </table>
        {allTask?.length === 0 && (
          <p className={styles.msjTable}>
            You dont have tasks assigned to this orchard
          </p>
        )}
      </div>
    </section>
  );
}

export default Table;
