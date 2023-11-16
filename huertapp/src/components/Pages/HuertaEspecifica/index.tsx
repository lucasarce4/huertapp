import React, { ReactElement, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import CustomCalendar from "./CustomCalendar";
import HuertaInfo from "./HuertaInfo";
import Layout from "../../Layout";
import styles from "./HuertaEspecifica.module.scss";
import { deleteHuerta } from "../../../Services/huertasService";
import AddPlantForm from "./AddPlantForm";
import {
  IEventType,
  IPlantType,
} from "./huertaEspecificaTypes/huertaEspecificaTypes";
import { getPlantsId } from "../../../Services/plantsService";
import OrchardUsers from "./OrchardUsers";
import { setErrorAlert } from "../../UI/sweetAlertFunctions";

export default function HuertaEspecifica(): ReactElement {
  const { id } = useParams();
  const navigate = useNavigate();
  const [showUsers, setShowUsers] = useState<boolean>(false);
  const [plantList, setPlantList] = useState<IPlantType[]>([]);
  const [allEvents, setAllEvents] = useState<IEventType[]>([]);
  const [newEvent, setNewEvent] = useState<IEventType>({
    title: "",
    start: null,
    end: null,
  });

  async function handleClick() {
    if (id === undefined) return;
    const res = await deleteHuerta(id);
    if (res.status === 200) {
      navigate("/");
    }
    if (res.status === 401) {
      setErrorAlert("You don't have permits");
    }
  }

  useEffect(() => {
    if (id === undefined) return;
    (async () => {
      const res = await getPlantsId(id);
      setPlantList(res.data);
    })();
  }, []);

  useEffect(() => {
    setAllEvents([...allEvents, newEvent]);
  }, [newEvent]);

  return (
    <Layout>
      <main className={styles.pageContainer}>
        <button className={styles.addBtn} onClick={() => setShowUsers(true)}>
          Add users
        </button>
        {showUsers && <OrchardUsers setShowUsers={setShowUsers}></OrchardUsers>}
        <AddPlantForm
          plantList={plantList}
          setPlantList={setPlantList}
          setNewEvent={setNewEvent}
        ></AddPlantForm>
        <HuertaInfo
          plantList={plantList}
          setPlantList={setPlantList}
        ></HuertaInfo>
        <CustomCalendar
          allEvents={allEvents}
          setAllEvents={setAllEvents}
          plantList={plantList}
        ></CustomCalendar>
        <button className={styles.deleteBtn} onClick={handleClick}>
          Delete orchard
        </button>
      </main>
    </Layout>
  );
}
