import React, { ReactElement, useState } from "react";
import { postHuerta } from "../../../../Services/huertasService";
import { postOrchardUsers } from "../../../../Services/userOrchardService";
import Modal from "../../../Modal";
import AddHuertaFormConfig from "./AddHuertaFormConfig";
import Form from "../../../Form";
import { iSetShowModal } from "../huertasTypes/huertasTypes";
import { setSuccesAlert } from "../../../UI/sweetAlertFunctions";

export default function AddHuertaForm({
  huertas,
  setHuertas,
  setShowModal,
}: iSetShowModal): ReactElement {
  const [submitStatus] = useState<string>("");

  async function handleSubmit(data: any) {
    const res = await postHuerta({ orchard_name: data.orchard_name });
    if (res.status === 200) {
      const resUserOrchard = await postOrchardUsers({
        id_orchard: res.data.insertId,
        user_role: 1,
      });
      if (resUserOrchard.status === 200) {
        setHuertas([
          ...huertas,
          { id: res.data.insertId, orchard_name: data.orchard_name },
        ]);
        setShowModal(false);
        setSuccesAlert("Orchard created");
      }
    }
  }

  return (
    <Modal setShowModal={setShowModal}>
      <Form
        form={AddHuertaFormConfig}
        onSubmit={handleSubmit}
        submitStatus={submitStatus}
      ></Form>
    </Modal>
  );
}
