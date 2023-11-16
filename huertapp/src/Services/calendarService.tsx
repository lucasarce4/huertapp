import {
  getRequest,
  postRequest,
  deleteRequest,
  putRequest,
} from "./privateApiService";
import { ICalendarTypes } from "../components/Pages/HuertaEspecifica/huertaEspecificaTypes/huertaEspecificaTypes";

const endpoint: string = "/api/calendar";

export const getCalendar = async () => {
  return await getRequest(endpoint);
};

export const getCalendarId = async (id: string) => {
  return await getRequest(endpoint, id);
};

export const postCalendar = async (bodyData: ICalendarTypes) => {
  return await postRequest(endpoint, bodyData);
};

export const deleteCalendar = async (id: string) => {
  return await deleteRequest(endpoint, id);
};

export const updateCalendar = async (id: string, bodyData: ICalendarTypes) => {
  return await putRequest(endpoint, bodyData);
};
