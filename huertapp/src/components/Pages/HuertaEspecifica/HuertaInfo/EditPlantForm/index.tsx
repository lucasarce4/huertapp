import React, { useRef, useState } from "react";
import { FaTimes } from "react-icons/fa";
import styles from "./EditPlantForm.module.scss";
import { IPlantType } from "../../huertaEspecificaTypes/huertaEspecificaTypes";
import { updatePlants } from "../../../../../Services/plantsService";
import Form from "../../../../Form";
import editFormConfig from "./editFormConfig";
import Modal from "../../../../Modal";

interface IEditPlantFormProps {
  setShowModal: (value: boolean) => void;
  currentPlant: IPlantType | null;
  plantList: IPlantType[];
  setPlantList: (value: IPlantType[]) => void;
}
export default function EditPlantForm({
  setShowModal,
  currentPlant,
  plantList,
  setPlantList,
}: IEditPlantFormProps) {
  const [submitStatus] = useState<boolean>(false);

  async function handleEdit(data: any) {
    if (currentPlant?.id_orchard === undefined) return;
    const res = await updatePlants({
      id: currentPlant?.id,
      id_orchard: currentPlant?.id_orchard,
      name: data.name,
      description: data.description,
      image: data.imgLink,
      start_date: new Date(data.startDate).toLocaleDateString("fr-FR"),
      end_date: new Date(data.endDate).toLocaleDateString("fr-FR"),
    });
    if (res.status === 200) {
      const id = plantList.indexOf(res.data.id);
      const tempArr = [...plantList];
      tempArr[id] = res.data;
      setPlantList(tempArr);
    }

    setShowModal(false);
  }

  return (
    <Modal setShowModal={setShowModal}>
      <Form
        form={editFormConfig}
        onSubmit={handleEdit}
        submitStatus={submitStatus}
      ></Form>
    </Modal>
  );
}
