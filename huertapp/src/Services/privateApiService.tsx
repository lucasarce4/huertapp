import axios from "axios";
import { baseURL } from "./Api";

const getToken = () => {
  const token =
    localStorage.getItem("token") === "undefined"
      ? ""
      : JSON.parse(localStorage.getItem("token") || "null");
  return token;
};

const config: any = {
  headers: {
    "Content-Type": "application/json",
  },
};

export const postRequest = async <T extends {}>(
  endpoint: string,
  bodyData: T
) => {
  try {
    const response = await axios({
      method: "post",
      url: `${baseURL}${endpoint}`,
      data: bodyData,
      headers: {
        Authorization: getToken(),
        ...config.headers,
      },
    });

    return {
      status: response.status,
      data: response.data,
    };
  } catch (error: any) {
    return {
      status: error.response.status,
      error,
      data: error.response.data,
    };
  }
};

export const getRequest = async (endpoint: string, id?: string) => {
  try {
    const response = await axios({
      method: "get",
      url: !id ? `${baseURL}${endpoint}` : `${baseURL}${endpoint}/${id}`,
      headers: {
        Authorization: getToken(),
        ...config.headers,
      },
    });
    return {
      status: response.status,
      data: response.data,
    };
  } catch (error: any) {
    return {
      status: error.response.status,
      error: error.message,
      data: error.response.data,
    };
  }
};

export const deleteRequest = async <T extends {}>(
  endpoint: string,
  id: string,
  data?: T
) => {
  try {
    const response = await axios({
      method: "delete",
      url: `${baseURL}${endpoint}/${id}`,
      headers: {
        Authorization: getToken(),
        ...config.headers,
      },
      data,
    });

    return {
      status: response.status,
      data: response.data,
    };
  } catch (error: any) {
    return {
      status: error.response.status,
      error: error.message,
      data: error.response.data,
    };
  }
};

export const putRequest = async <T extends {}>(endpoint: string, body: T) => {
  try {
    const response = await axios({
      method: "put",
      url: `${baseURL}${endpoint}`,
      data: body,
      headers: {
        Authorization: getToken(),
        ...config.headers,
      },
    });
    return {
      status: response.status,
      data: response.data,
    };
  } catch (error: any) {
    return {
      status: error.response.status,
      error: error.message,
      data: error.response.data,
    };
  }
};
