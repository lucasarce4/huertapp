import {
  getRequest,
  postRequest,
  deleteRequest,
  putRequest,
} from "./privateApiService";
import { IPlantType } from "../components/Pages/HuertaEspecifica/huertaEspecificaTypes/huertaEspecificaTypes";

const endpoint: string = "/api/plants";

export const getPlants = async () => {
  return await getRequest(endpoint);
};

export const getPlantsId = async (id: string) => {
  return await getRequest(endpoint, id);
};

export const postPlants = async (bodyData: IPlantType) => {
  return await postRequest(endpoint, bodyData);
};

export const deletePlants = async (id: string) => {
  return await deleteRequest(endpoint, id);
};

export const updatePlants = async (bodyData: IPlantType) => {
  return await putRequest(endpoint, bodyData);
};
