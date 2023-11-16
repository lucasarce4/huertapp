import React, { ReactElement, useState } from "react";
import { registerLocale, setDefaultLocale } from "react-datepicker";
import { useParams } from "react-router-dom";
import es from "date-fns/locale/es";
import styles from "./AddEventForm.module.scss";
import {
  postCalendar,
  deleteCalendar,
} from "../../../../Services/calendarService";
import { IEventType } from "../huertaEspecificaTypes/huertaEspecificaTypes";
import Form from "../../../Form";
import addEventFormConfig from "./addEventFormConfig";

export default function AddEventForm({
  setNewEvent,
  allEvents,
  setAllEvents,
  selectedEvent,
  setSelectedEvent,
}: any): ReactElement {
  registerLocale("es", es);
  setDefaultLocale("es");
  const { id } = useParams();
  const [submitStatus, setSubmitStatus] = useState<boolean>(false);

  async function handleAddEvent(data: any) {
    if (id === undefined) return;
    await postCalendar({
      id_orchard: +id,
      title: data.title,
      start_date: data.startDate,
      end_date: data.endDate,
    });
    setNewEvent({
      title: data.title,
      start: new Date(data.startDate),
      end: new Date(data.endDate),
    });
  }

  async function handleDeleteEvent() {
    if (selectedEvent === undefined) return;
    const res = await deleteCalendar(selectedEvent.id);
    if (res.status === 200) {
      const calendar = allEvents.filter(
        (event: IEventType) =>
          event.title !== selectedEvent.title &&
          event.start !== selectedEvent.start_date &&
          event.end !== selectedEvent.end_date
      );
      setSelectedEvent(undefined);
      setAllEvents(calendar);
    }
  }

  return (
    <section aria-labelledby="form" className={styles.formContainer}>
      <p className={styles.title}>Add event</p>
      <Form
        form={addEventFormConfig}
        onSubmit={handleAddEvent}
        submitStatus={submitStatus}
      ></Form>
      <button
        onClick={handleDeleteEvent}
        className={styles.deleteBtn}
        style={
          selectedEvent === undefined
            ? { backgroundColor: "grey" }
            : { backgroundColor: "red" }
        }
      >
        Delete
      </button>
    </section>
  );
}
