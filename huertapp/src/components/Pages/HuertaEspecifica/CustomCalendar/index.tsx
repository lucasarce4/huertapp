import React, { ReactElement, useEffect, useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import { format, parse, startOfWeek, getDay } from "date-fns";
import "react-big-calendar/lib/css/react-big-calendar.css";
import styles from "./CustomCalendar.module.scss";
import "react-datepicker/dist/react-datepicker.css";
import AddEventForm from "../AddEventForm";
import { useParams } from "react-router-dom";
import {
  IEventType,
  IEventInfoType,
  ICalendarProps,
} from "../huertaEspecificaTypes/huertaEspecificaTypes";
import { getCalendarId } from "../../../../Services/calendarService";

const locales = {
  es: require("date-fns/locale/es"),
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

export default function CustomCalendar({
  allEvents,
  setAllEvents,
  plantList,
}: ICalendarProps): ReactElement {
  const [newEvent, setNewEvent] = useState<IEventType>({
    title: "",
    start: null,
    end: null,
  });
  const [eventsInfo, setEventsInfo] = useState<IEventInfoType[]>([]);
  const [selectedEvent, setSelectedEvent] = useState<
    IEventInfoType | undefined
  >();

  const { id } = useParams();

  useEffect(() => {
    if (id === undefined) return;
    (async () => {
      const res = await getCalendarId(id);
      const calendarData: IEventType[] = res.data.map((e: any) => {
        return {
          title: e.title,
          start: e.start_date,
          end: e.end_date,
        };
      });
      setEventsInfo(res.data);
      setAllEvents(calendarData);
    })();
  }, [newEvent, plantList]);

  function handleSelectEvent(e: any) {
    const event = eventsInfo.find((event) => {
      return (
        event.title === e.title &&
        event.start_date === e.start &&
        event.end_date === e.end
      );
    });
    if (event === selectedEvent) {
      setSelectedEvent(undefined);
    } else {
      setSelectedEvent(event);
    }
  }

  return (
    <div className={styles.calendarContainer}>
      <AddEventForm
        newEvent={newEvent}
        setNewEvent={setNewEvent}
        allEvents={allEvents}
        setAllEvents={setAllEvents}
        selectedEvent={selectedEvent}
        setSelectedEvent={setSelectedEvent}
      ></AddEventForm>
      <Calendar
        localizer={localizer}
        events={allEvents}
        startAccessor="start"
        endAccessor="end"
        className={styles.calendar}
        onSelectEvent={handleSelectEvent}
        views={["month"]}
        eventPropGetter={(event, start, end, isSelected) => ({
          event,
          start,
          end,
          isSelected,
          style: { backgroundColor: "hsl(172, 100%, 37%)", padding: "5px" },
        })}
      ></Calendar>
    </div>
  );
}
