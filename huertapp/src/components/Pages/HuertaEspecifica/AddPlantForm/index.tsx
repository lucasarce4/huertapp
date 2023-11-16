import React, { useState } from "react";
import styles from "./AddPlantForm.module.scss";
import { registerLocale, setDefaultLocale } from "react-datepicker";
import es from "date-fns/locale/es";
import { postPlants } from "../../../../Services/plantsService";
import { useParams } from "react-router-dom";
import {
  IAddPlantFormProps,
  ICalendarTypes,
  IPlantType,
} from "../huertaEspecificaTypes/huertaEspecificaTypes";
import { postCalendar } from "../../../../Services/calendarService";
import Form from "../../../Form";
import addPlantFormConfig from "./addPlantFormConfig";
import { setSuccesAlert } from "../../../UI/sweetAlertFunctions";

registerLocale("es", es);
setDefaultLocale("es");

export default function AddPlantForm({
  plantList,
  setPlantList,
  setNewEvent,
}: IAddPlantFormProps) {
  const { id } = useParams();
  const [submitStatus, setSubmitStatus] = useState<boolean>(false);

  async function handleAdd(data: any) {
    if (id === undefined) return;
    const plant: IPlantType = {
      id_orchard: +id,
      name: data.name,
      description: data.description,
      image: data.imgLink,
      start_date: new Date(data.startDate).toLocaleDateString("fr-FR"),
      end_date: new Date(data.endDate).toLocaleDateString("fr-FR"),
    };
    const calendar: ICalendarTypes = {
      id_orchard: +id,
      title: data.name,
      start_date: data.startDate,
      end_date: data.endDate,
    };
    const plantRes = await postPlants(plant);
    const calendarRes = await postCalendar(calendar);
    if (plantRes.status === 200 && calendarRes.status === 200) {
      setPlantList([...plantList, { ...plant, id: plantRes.data.insertId }]);
      setNewEvent({
        title: data.name,
        start: new Date(data.startDate),
        end: new Date(data.endDate),
      });
      setSubmitStatus(!submitStatus);
    }
    setSuccesAlert("Crop created!")
  }

  return (
    <div className={styles.formContainer}>
      <h2 className={styles.title}>Add crop</h2>
      <Form
        form={addPlantFormConfig}
        onSubmit={handleAdd}
        submitStatus={submitStatus}
      ></Form>
    </div>
  );
}
