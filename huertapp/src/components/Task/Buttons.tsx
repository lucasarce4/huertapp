import React, { useContext, ReactElement } from "react";
import { postTask, deleteTask, updateTask } from "../../Services/taskService";
import TaskContext from "./Context/TaskContext";
import { useNavigate } from "react-router-dom";
import styles from "./Table.module.scss";
import formType from "./TaskFormType/index";
import Swal from "sweetalert2";

type ButtonsType = {
  form?: formType;
  resetForm: Function;
  id?: string;
  typeButton: "addT" | "addF" | "deleteT" | "updateT";
  msjSet: Function;
};

function Buttons({
  form,
  resetForm,
  id,
  typeButton,
  msjSet,
}: ButtonsType): ReactElement {
  const context = useContext(TaskContext);
  const navigate = useNavigate();

  const handleClick = () => {
    switch (typeButton) {
      case "addT":
        postTask(form!);
        context.reloadNew();
        resetForm();
        setAlertAdd();
        break;
      case "addF":
        msjSet();
        break;
      case "deleteT":
        setAlertError();
        break;
      case "updateT":
        updateTask(form!);
        setAlertUpdate();
        setTimeout(function () {
          navigate("/task");
        }, 2000);
        break;
    }
  };

  const setAlertAdd = () => {
    Swal.fire({
      icon: "success",
      title: "Add favourites",
      text: "",
      timer: 2000,
      showConfirmButton: false,
    });
  };

  const setAlertUpdate = () => {
    Swal.fire({
      icon: "success",
      title: "Update Task",
      text: "",
      timer: 2000,
      showConfirmButton: false,
    });
  };

  const setAlertError = () => {
    Swal.fire({
      title: "do you want to remove it?",
      icon: "warning",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Remove",
      denyButtonText: `Don't remove`,
    }).then((result) => {
      if (result.isConfirmed) {
        deleteTask(id!);
        context.reloadNew();
        Swal.fire("Task has been removed!", "", "success");
      } else if (result.isDenied) {
        Swal.fire("Changes are not been removed", "", "info");
      }
    });
  };

  return (
    <>
      {typeButton === "addT" && (
        <button className={styles.btnAddTable} onClick={handleClick}>
          Add Task
        </button>
      )}

      {typeButton === "addF" && (
        <button className={styles.btnAddTable} onClick={handleClick}>
          Add Task
        </button>
      )}

      {typeButton === "deleteT" && (
        <button className={styles.btnDeleteTable} onClick={handleClick}>
          Delete
        </button>
      )}

      {typeButton === "updateT" && (
        <button className={styles.btnUpdateTable} onClick={handleClick}>
          Update
        </button>
      )}
    </>
  );
}

export default Buttons;
