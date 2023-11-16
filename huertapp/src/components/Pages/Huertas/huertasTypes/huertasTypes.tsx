export interface IHuertaDataType {
  id: number;
  orchard_name: string;
}

export interface iSetShowModal {
  huertas: IHuertaDataType[];
  setHuertas: (huertas: IHuertaDataType[]) => void;
  setShowModal: (showModal: boolean) => void;
}
