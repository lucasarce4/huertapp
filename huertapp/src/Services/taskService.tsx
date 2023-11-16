import {
  getRequest,
  postRequest,
  deleteRequest,
  putRequest,
} from "./privateApiService";
import formType from "../components/Task/TaskFormType/index";

const endpoint: string = "/api/task";
const endpointFilterTaskOrchard: string = "/api/orchard_task"

export const getTask = async () => {
  return await getRequest(endpoint);
};

export const getTaskId = async (id: string) => {
  return await getRequest(endpoint, id);
};

export const getTaskIdOrchard = async (id: string) => {
  return await getRequest(endpointFilterTaskOrchard, id);
};

export const postTask = async (bodyData: formType) => {
  return await postRequest(endpoint, bodyData);
};

export const deleteTask = async (id: string) => {
  return await deleteRequest(endpoint, id);
};

export const updateTask = async (bodyData: formType) => {
  return await putRequest(endpoint, bodyData);
};
