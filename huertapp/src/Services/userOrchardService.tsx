import {
  getRequest,
  postRequest,
  deleteRequest,
} from "./privateApiService";

const endpoint: string = "/api/user_orchards";

interface IUserOrchard {
  id_orchard: number;
  user_email?: string;
  user_role?: number;
}

export const getOrchardUsers = async (id: string) => {
  return await getRequest(endpoint, id);
};

export const postOrchardUsers = async (bodyData: IUserOrchard) => {
  return await postRequest(endpoint, bodyData);
};

export const deleteUserOrchard = async (id: string, data: IUserOrchard) => {
  return await deleteRequest(endpoint, id, data);
};
