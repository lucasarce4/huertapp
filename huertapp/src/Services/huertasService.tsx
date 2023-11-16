import {
  getRequest,
  postRequest,
  deleteRequest,
  putRequest,
} from "./privateApiService";

const endpoint: string = "/api/orchards";

interface IHuertasType {
  orchard_name: string;
}

export const getHuertas = async () => {
  return await getRequest(endpoint);
};

export const getHuertasId = async (id: string) => {
  return await getRequest(endpoint, id);
};

export const postHuerta = async (bodyData: IHuertasType) => {
  return await postRequest(endpoint, bodyData);
};

export const deleteHuerta = async (id: string) => {
  return await deleteRequest(endpoint, id);
};

export const updateHuerta = async (id: string, bodyData: IHuertasType) => {
  return await putRequest(endpoint, bodyData);
};
