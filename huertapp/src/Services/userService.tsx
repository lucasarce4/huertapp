import { getRequest, postRequest, putRequest } from "./privateApiService";
import { IUserType } from "../components/UserProfile/UserType/index";

const endpoint: string = "/api/users";
const endpointPostLogin: string = "/api/auth";

export const getUser = async () => {
  return await getRequest(endpoint);
};

export const postUser = async (bodyData: IUserType) => {
  return await postRequest(endpoint, bodyData);
};

export const editUser = async (bodyData: IUserType) => {
  return await putRequest(endpoint, bodyData);
};

export const postUserLogin = async (bodyData: IUserType) => {
  return await postRequest(endpointPostLogin, bodyData);
};
