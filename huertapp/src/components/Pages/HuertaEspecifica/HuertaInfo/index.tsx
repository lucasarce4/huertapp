import React, { useState } from "react";
import { deletePlants } from "../../../../Services/plantsService";
import {
  IPlantListType,
  IPlantType,
} from "../huertaEspecificaTypes/huertaEspecificaTypes";
import EditPlantForm from "./EditPlantForm";
import styles from "./HuertaInfo.module.scss";
import PlantCard from "./PlantCard";

export default function HuertaInfo({
  plantList,
  setPlantList,
}: IPlantListType) {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [currentPlant, setCurrentPlant] = useState<IPlantType | null>(null);
  async function handleDelete(id: number | undefined) {
    if (id === undefined) return;
    await deletePlants(id.toString());
    setPlantList(plantList.filter((plant) => plant.id !== id));
  }

  async function handleEdit(plant: IPlantType) {
    setCurrentPlant(plant);
    setShowModal(true);
  }

  return (
    <section aria-labelledby="huerta-info" className={styles.container}>
      <h3 className={styles.title}>Orchard info</h3>
      <section aria-labelledby="Huerta info" className={styles.tableContainer}>
        {plantList.length !== 0 &&
          plantList.map((plant) => {
            return (
              <PlantCard
                key={plant.id}
                plant={plant}
                handleDelete={handleDelete}
                handleEdit={handleEdit}
              ></PlantCard>
            );
          })}
        {plantList.length === 0 && (
          <div className={styles.empty}>Empty orchard</div>
        )}
        {showModal && (
          <EditPlantForm
            setShowModal={setShowModal}
            currentPlant={currentPlant !== undefined ? currentPlant : null}
            plantList={plantList}
            setPlantList={setPlantList}
          ></EditPlantForm>
        )}
      </section>
    </section>
  );
}
