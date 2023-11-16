import {
  getRequest,
  postRequest,
  deleteRequest,
  putRequest,
} from "./privateApiService";
import formType from "../components/Task/TaskFormType/index";

const endpoint: string = "/api/planner";

export const getPlanner = async () => {
  return await getRequest(endpoint);
};

export const getPlannerId = async (id: string) => {
  return await getRequest(endpoint, id);
};

export const postPlanner = async (bodyData: string) => {
  return await postRequest(endpoint, bodyData);
};

export const deletePlanner = async (id: string) => {
  return await deleteRequest(endpoint, id);
};

export const updatePlanner = async (id: string, bodyData: formType) => {
  return await putRequest(endpoint, bodyData);
};
