import React from "react";
import { plantList } from "../plantList";
import styles from "./PlantPicker.module.scss";
import { IPlantPickerProps } from "../plannerTypes/plannerTypes";

export default function PlantPicker({
  setCurrentItem,
  isBigScreen,
}: IPlantPickerProps) {
  const classType = isBigScreen ? styles.container : styles.smallContainer;

  return (
    <section aria-labelledby="plant picker" className={classType}>
      {plantList.map((plant) => {
        return (
          <div
            key={plant.name}
            className={styles.plantContainer}
            onClick={() => {
              setCurrentItem(plant.id === "remove" ? null : plant);
            }}
          >
            <img src={plant.url}></img>
            <p>{plant.name}</p>
          </div>
        );
      })}
    </section>
  );
}
