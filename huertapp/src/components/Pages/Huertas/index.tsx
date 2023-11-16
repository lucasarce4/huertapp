import React, { ReactElement, useState, useEffect } from "react";
import styles from "./Huertas.module.scss";
import { Link } from "react-router-dom";
import AddHuertaForm from "./AddHuertaForm";
import { FaPlus } from "react-icons/fa";
import Layout from "../../Layout";
import { getHuertas } from "../../../Services/huertasService";
import { IHuertaDataType } from "./huertasTypes/huertasTypes";

export default function Home(): ReactElement {
  const [huertas, setHuertas] = useState<IHuertaDataType[]>([]);
  const [showModal, setShowModal] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      const res = await getHuertas();
      setHuertas(res.data);
    })();
  }, []);

  function handleClick() {
    setShowModal(true);
  }
  return (
    <Layout>
      <div className={styles.Home}>
        <h1 className={styles.title}>Orchards</h1>
        <button onClick={handleClick} className={styles.addButton}>
          <FaPlus></FaPlus> Create orchard
        </button>
        <div className={styles.container}>
          {huertas.length !== 0 ? (
            huertas.map((huerta) => {
              return (
                <div key={huerta.orchard_name} className={styles.card}>
                  <span>{huerta.orchard_name}</span>
                  <Link to={`orchard/${huerta.id}`}>Orchard info</Link>
                </div>
              );
            })
          ) : (
            <div className={styles.emptyMsg}>
              Create an orchard to get started
            </div>
          )}
        </div>
        {showModal && (
          <AddHuertaForm
            huertas={huertas}
            setHuertas={setHuertas}
            setShowModal={setShowModal}
          ></AddHuertaForm>
        )}
      </div>
    </Layout>
  );
}
