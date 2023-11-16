import React, { useState } from "react";
import { FaChevronDown, FaChevronRight, FaPen, FaTimes } from "react-icons/fa";
import { IPlantType } from "../../huertaEspecificaTypes/huertaEspecificaTypes";
import styles from "./PlantCard.module.scss";

interface IPlantCardProps {
  plant: IPlantType;
  handleDelete: (value: number | undefined) => void;
  handleEdit: (value: IPlantType) => void;
}

export default function PlantCard({
  plant,
  handleDelete,
  handleEdit,
}: IPlantCardProps) {
  const [showDetails, setShowDetails] = useState<boolean>(false);
  const detailsClass = showDetails ? styles.details : styles.hideDetails;
  return (
    <div className={styles.displayInfo} key={plant.id}>
      <div className={styles.shortInfo}>
        <img
          className={styles.img}
          src={
            plant.image !== null &&
            plant.image !== undefined &&
            plant.image !== ""
              ? plant.image
              : "/images/plantPlaceholder.jpg"
          }
        ></img>
        <span>{plant.name}</span>
        <div className={styles.dates}>
          <span>{`Planting date: ${plant.start_date} `}</span>
          <span>{`Harvest date: ${plant.end_date}`}</span>
        </div>
        <div className={styles.buttons}>
          <button onClick={() => setShowDetails(!showDetails)}>
            {showDetails ? (
              <FaChevronDown className={styles.detailsIcon}></FaChevronDown>
            ) : (
              <FaChevronRight className={styles.detailsIcon}></FaChevronRight>
            )}
          </button>
          <button>
            <FaPen
              onClick={() => handleEdit(plant)}
              className={styles.editIcon}
            ></FaPen>
          </button>
          <button
            onClick={() => handleDelete(plant.id)}
            className={styles.deleteIcon}
          >
            <FaTimes></FaTimes>
          </button>
        </div>
      </div>
      {
        <div className={detailsClass}>
          {plant.description === "" ? (
            <span className={styles.emptyDescription}>
              No description added
            </span>
          ) : (
            plant.description
          )}
        </div>
      }
    </div>
  );
}
